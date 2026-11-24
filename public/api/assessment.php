<?php
// Norvexa AI marketing assessment: candidate API for /careers/assessment/.
//   POST action=start  → registers the candidate (one attempt per email), returns their questions and deadline.
//   POST action=submit → scores multiple choice, saves everything, then (optionally) has Claude grade the
//                        practical answers and emails HR a summary. Results: /api/results.php.
// Settings (optional) in config.php: assess_to, assess_admin_password, anthropic_api_key, assess_model.
header('Content-Type: application/json');
header('X-Robots-Tag: noindex');
header('Cache-Control: no-store');
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); echo '{"ok":false}'; exit; }

define('NX_ASSESS', 1);
$cfg  = require __DIR__ . '/config.php';
$bank = require __DIR__ . '/assessment-bank.php';
require __DIR__ . '/assessment-lib.php';

$f = fn($k, $max = 500) => trim(mb_substr(strip_tags((string)($_POST[$k] ?? '')), 0, $max));
$out = function (int $code, array $body) { http_response_code($code); echo json_encode($body); exit; };

$email = strtolower($f('email', 160));
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $out(422, ['ok' => false, 'error' => 'email']);
$file = nx_record_path($email);
$action = $f('action', 10);

/* ------------------------------------------------------------------ start */
if ($action === 'start') {
  if ($f('website') !== '') $out(200, ['ok' => false, 'error' => 'invalid']); // honeypot
  $rec = nx_read($file);
  if ($rec && !empty($rec['submitted'])) $out(409, ['ok' => false, 'error' => 'done']);

  if (!$rec) {
    $track = $f('track', 20);
    $name = $f('name', 120);
    if (!isset($bank['tracks'][$track]) || $name === '' || $f('consent') === '') $out(422, ['ok' => false, 'error' => 'invalid']);
    if (!nx_rate_ok('start', (int)($cfg['assess_per_hour'] ?? 10))) $out(429, ['ok' => false, 'error' => 'rate']);

    $t = $bank['tracks'][$track];
    $core = array_values(array_filter($bank['mcq'], fn($q) => $q['lvl'] === 'core'));
    $adv  = array_values(array_filter($bank['mcq'], fn($q) => $q['lvl'] === 'adv'));
    shuffle($core); shuffle($adv);
    $picked = array_merge(array_slice($core, 0, $t['core']), array_slice($adv, 0, $t['adv']));
    shuffle($picked);
    $now = time();
    $rec = [
      'id' => substr(sha1($email), 0, 16),
      'name' => $name, 'email' => $email, 'phone' => $f('phone', 40), 'city' => $f('city', 80),
      'track' => $track, 'years' => $f('years', 10), 'current_role' => $f('current_role', 160),
      'linkedin' => $f('linkedin', 300), 'portfolio' => $f('portfolio', 300), 'ref' => $f('ref', 80),
      'ip' => explode(',', $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? '')[0],
      'ua' => mb_substr((string)($_SERVER['HTTP_USER_AGENT'] ?? ''), 0, 300),
      'started' => $now, 'deadline' => $now + $t['minutes'] * 60,
      'qids' => array_column($picked, 'id'),
      'token' => bin2hex(random_bytes(16)),
    ];
    nx_write($file, $rec);
  }
  // existing unfinished attempt → resume with the same questions and the original deadline
  $byId = array_column($bank['mcq'], null, 'id');
  $mcq = array_map(fn($id) => ['id' => $id, 'q' => $byId[$id]['q'],
    'o' => array_map(fn($k, $v) => ['id' => $k, 't' => $v], array_keys($byId[$id]['o']), $byId[$id]['o'])], $rec['qids']);
  $tasks = array_map(fn($t) => ['id' => $t['id'], 'title' => $t['title'], 'q' => $t['q']], $bank['tasks'][$rec['track']]);
  $out(200, ['ok' => true, 'token' => $rec['token'], 'name' => $rec['name'], 'track' => $rec['track'],
    'label' => $bank['tracks'][$rec['track']]['label'], 'deadline' => $rec['deadline'] * 1000, 'now' => time() * 1000,
    'mcq' => $mcq, 'tasks' => $tasks, 'tools' => $bank['tools']]);
}

/* ----------------------------------------------------------------- submit */
if ($action === 'submit') {
  $rec = nx_read($file);
  if (!$rec || !hash_equals($rec['token'], (string)($_POST['token'] ?? ''))) $out(403, ['ok' => false, 'error' => 'token']);
  if (!empty($rec['submitted'])) $out(409, ['ok' => false, 'error' => 'done']);
  $in = json_decode((string)($_POST['answers'] ?? ''), true);
  if (!is_array($in)) $out(422, ['ok' => false, 'error' => 'answers']);

  $byId = array_column($bank['mcq'], null, 'id');
  $mcq = []; $correct = 0;
  foreach ($rec['qids'] as $id) {
    $a = (string)($in['mcq'][$id] ?? '');
    $ok = $a !== '' && $a === $byId[$id]['a'];
    $correct += $ok ? 1 : 0;
    $mcq[$id] = ['a' => $a, 'ok' => $ok];
  }
  $tasks = [];
  foreach ($bank['tasks'][$rec['track']] as $t) $tasks[$t['id']] = mb_substr(trim((string)($in['tasks'][$t['id']] ?? '')), 0, 8000);
  $tools = [];
  foreach ($bank['tools'] as $tool) $tools[$tool] = max(0, min(3, (int)($in['tools'][$tool] ?? 0)));
  $ig = is_array($in['integrity'] ?? null) ? $in['integrity'] : [];

  $now = time();
  $rec['submitted'] = $now;
  $rec['minutes_taken'] = round(($now - $rec['started']) / 60, 1);
  $rec['late'] = $now > $rec['deadline'] + 120;
  $rec['answers'] = ['mcq' => $mcq, 'tasks' => $tasks, 'tools' => $tools];
  $rec['integrity'] = ['tab_switches' => (int)($ig['blur'] ?? 0), 'pastes' => array_map('intval', (array)($ig['pastes'] ?? [])), 'auto_submitted' => !empty($ig['auto'])];
  $rec['scores'] = ['mcq_correct' => $correct, 'mcq_total' => count($rec['qids']),
    'mcq_pct' => count($rec['qids']) ? round($correct / count($rec['qids']) * 100) : 0,
    'tools_pct' => count($tools) ? round(array_sum($tools) / (3 * count($tools)) * 100) : 0];
  nx_write($file, $rec);

  // reply to the candidate now; grading and email continue in the background
  echo json_encode(['ok' => true]);
  if (function_exists('fastcgi_finish_request')) fastcgi_finish_request();
  elseif (function_exists('litespeed_finish_request')) litespeed_finish_request();
  ignore_user_abort(true);
  set_time_limit(180);

  $grade = nx_grade($cfg, $bank, $rec);
  if ($grade) $rec['ai'] = $grade;
  $rec['scores']['overall'] = nx_overall($rec);
  nx_write($file, $rec);
  nx_notify($cfg, $bank, $rec);
  exit;
}

$out(400, ['ok' => false, 'error' => 'action']);
