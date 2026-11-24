<?php
// HR dashboard for the AI marketing assessment. Password-protected (user "hr", password = assess_admin_password in config.php).
//   /api/results.php            ranked list (filter with ?track=intern|fresher|experienced)
//   /api/results.php?id=…       one candidate's full answers
//   /api/results.php?csv=1      download everything as CSV (opens in Excel / Google Sheets)
define('NX_ASSESS', 1);
$cfg  = require __DIR__ . '/config.php';
$bank = require __DIR__ . '/assessment-bank.php';
require __DIR__ . '/assessment-lib.php';
header('X-Robots-Tag: noindex');
header('Cache-Control: no-store');

$pw = (string)($cfg['assess_admin_password'] ?? '');
if ($pw === '') { http_response_code(403); header('Content-Type: text/plain'); echo "Results are locked. Set 'assess_admin_password' in api/config.php on the server."; exit; }
$user = $_SERVER['PHP_AUTH_USER'] ?? null; $pass = $_SERVER['PHP_AUTH_PW'] ?? null;
if ($user === null && preg_match('/^Basic\s+(.+)$/i', $_SERVER['HTTP_AUTHORIZATION'] ?? '', $m)) [$user, $pass] = array_pad(explode(':', (string)base64_decode($m[1]), 2), 2, '');
if ($user !== 'hr' || !hash_equals($pw, (string)$pass)) {
  header('WWW-Authenticate: Basic realm="Norvexa assessment results"'); http_response_code(401); echo 'Login required'; exit;
}

$rows = array_values(array_filter(nx_all(), fn($r) => !empty($r['submitted']) || isset($_GET['all'])));
$rank = fn($r) => $r['scores']['overall'] ?? ($r['scores']['mcq_pct'] ?? -1);
usort($rows, fn($a, $b) => $rank($b) <=> $rank($a));
$track = $_GET['track'] ?? '';
if (isset($bank['tracks'][$track])) $rows = array_values(array_filter($rows, fn($r) => $r['track'] === $track));
$e = fn($s) => htmlspecialchars((string)$s, ENT_QUOTES);
$recLabel = fn($r) => isset($r['ai']['recommendation']) ? NX_REC[$r['ai']['recommendation']] : '–';

/* ---------- CSV export */
if (isset($_GET['csv'])) {
  header('Content-Type: text/csv; charset=UTF-8');
  header('Content-Disposition: attachment; filename="assessment-results-' . date('Y-m-d') . '.csv"');
  $o = fopen('php://output', 'w');
  fputcsv($o, ['submitted', 'name', 'email', 'phone', 'track', 'years', 'current_role', 'linkedin', 'portfolio', 'overall', 'mcq_pct', 'task_avg', 'tools_pct', 'ai_fluency', 'automation', 'performance', 'recommendation', 'summary', 'minutes', 'late', 'tab_switches', 'ref']);
  foreach ($rows as $r) {
    $ai = $r['ai'] ?? []; $ts = array_column($ai['tasks'] ?? [], 'score');
    fputcsv($o, [!empty($r['submitted']) ? date('Y-m-d H:i', $r['submitted']) : 'not submitted', $r['name'], $r['email'], $r['phone'], $bank['tracks'][$r['track']]['label'], $r['years'], $r['current_role'], $r['linkedin'], $r['portfolio'],
      $r['scores']['overall'] ?? '', $r['scores']['mcq_pct'] ?? '', $ts ? round(array_sum($ts) / count($ts), 1) : '', $r['scores']['tools_pct'] ?? '',
      $ai['ai_fluency'] ?? '', $ai['automation_depth'] ?? '', $ai['performance_marketing'] ?? '', $recLabel($r), $ai['summary'] ?? '',
      $r['minutes_taken'] ?? '', !empty($r['late']) ? 'yes' : '', $r['integrity']['tab_switches'] ?? '', $r['ref']]);
  }
  exit;
}

header('Content-Type: text/html; charset=UTF-8');
?><!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex">
<title>Assessment results · Norvexa</title>
<style>
:root{--bg:#f7f9fd;--s:#fff;--ink:#0a1230;--mut:#5d6886;--line:#e2e8f3;--blue:#1d4ed8;--g:#047857;--gbg:#ecfdf5;--a:#b45309;--abg:#fffbeb;--r:#b91c1c;--rbg:#fef2f2}
@media (prefers-color-scheme:dark){:root{--bg:#0b1020;--s:#121a30;--ink:#e8edf8;--mut:#9aa6c4;--line:#24304d;--blue:#7aa2ff;--g:#34d399;--gbg:#0f2a22;--a:#fbbf24;--abg:#2a2210;--r:#f87171;--rbg:#2c1416}}
*{box-sizing:border-box}body{margin:0;font:15px/1.5 Inter,system-ui,sans-serif;background:var(--bg);color:var(--ink)}
.w{max-width:1200px;margin:0 auto;padding:24px 16px}h1{font-size:24px;margin:0 0 4px}h2{font-size:18px;margin:28px 0 10px}
a{color:var(--blue)}.mut{color:var(--mut)}.bar{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin:16px 0}
.bar a{padding:6px 12px;border:1px solid var(--line);border-radius:999px;text-decoration:none;color:var(--ink);background:var(--s)}.bar a.on{background:var(--ink);color:var(--bg)}
.tw{overflow-x:auto;background:var(--s);border:1px solid var(--line);border-radius:14px}
table{border-collapse:collapse;width:100%;min-width:900px}th,td{padding:10px 12px;border-bottom:1px solid var(--line);text-align:left;vertical-align:top}th{font-size:12px;text-transform:uppercase;letter-spacing:.04em;color:var(--mut)}
tr:last-child td{border-bottom:0}.n{font-variant-numeric:tabular-nums;text-align:right}
.pill{display:inline-block;padding:2px 9px;border-radius:999px;font-size:12px;font-weight:600}.p-sy,.p-y{background:var(--gbg);color:var(--g)}.p-m{background:var(--abg);color:var(--a)}.p-n{background:var(--rbg);color:var(--r)}
.card{background:var(--s);border:1px solid var(--line);border-radius:14px;padding:16px 18px;margin-bottom:12px}
.kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px}.kpi b{display:block;font-size:26px}
pre{white-space:pre-wrap;font:inherit;margin:8px 0 0}.ok{color:var(--g)}.bad{color:var(--r)}
</style></head><body><div class="w">
<?php
$pill = function ($r) use ($recLabel) {
  $k = $r['ai']['recommendation'] ?? ''; $c = ['strong_yes' => 'p-sy', 'yes' => 'p-y', 'maybe' => 'p-m', 'no' => 'p-n'][$k] ?? '';
  return $k ? "<span class=\"pill $c\">" . $recLabel($r) . '</span>' : '<span class="mut">–</span>';
};

/* ---------- one candidate */
if (isset($_GET['id'])) {
  $r = nx_read(nx_dir() . '/' . preg_replace('/[^a-f0-9]/', '', (string)$_GET['id']) . '.json');
  if (!$r) { echo '<p>Not found. <a href="?">Back</a></p></div></body></html>'; exit; }
  $s = $r['scores'] ?? []; $ai = $r['ai'] ?? null; $byId = array_column($bank['mcq'], null, 'id');
  $tScore = $ai ? array_column($ai['tasks'], null, 'id') : [];
  echo '<p><a href="?">← All candidates</a></p><h1>' . $e($r['name']) . ' ' . $pill($r) . '</h1>';
  echo '<p class="mut">' . $e($bank['tracks'][$r['track']]['label']) . ($r['years'] !== '' ? ' · ' . $e($r['years']) . ' yrs' : '') . ' · <a href="mailto:' . $e($r['email']) . '">' . $e($r['email']) . '</a> · ' . $e($r['phone']) . ($r['city'] ? ' · ' . $e($r['city']) : '') . '</p>';
  echo '<p>' . ($r['current_role'] ? $e($r['current_role']) . ' · ' : '') . ($r['linkedin'] ? '<a href="' . $e($r['linkedin']) . '" rel="noopener noreferrer" target="_blank">LinkedIn</a> · ' : '') . ($r['portfolio'] ? '<a href="' . $e($r['portfolio']) . '" rel="noopener noreferrer" target="_blank">Portfolio</a>' : '') . '</p>';
  if (empty($r['submitted'])) { echo '<div class="card">Started ' . date('d M Y H:i', $r['started']) . ', not submitted yet.</div></div></body></html>'; exit; }
  echo '<div class="kpis">';
  foreach ([['Overall', isset($s['overall']) ? $s['overall'] . '/100' : 'Pending'], ['Multiple choice', "{$s['mcq_correct']}/{$s['mcq_total']}"], ['AI fluency', $ai ? $ai['ai_fluency'] . '/10' : '–'], ['Automation', $ai ? $ai['automation_depth'] . '/10' : '–'], ['Performance mktg', $ai ? $ai['performance_marketing'] . '/10' : '–'], ['Time', $r['minutes_taken'] . ' min' . ($r['late'] ? ' (late)' : '')], ['Tab switches', $r['integrity']['tab_switches']]] as [$k, $v])
    echo '<div class="card kpi"><span class="mut">' . $k . '</span><b>' . $e($v) . '</b></div>';
  echo '</div>';
  if ($ai) {
    echo '<div class="card"><b>AI review</b><p>' . $e($ai['summary']) . '</p>' . ($ai['red_flags'] !== '' ? '<p class="bad">Red flags: ' . $e($ai['red_flags']) . '</p>' : '') . '<b>Ask in interview</b><ul>';
    foreach ($ai['interview_questions'] as $q) echo '<li>' . $e($q) . '</li>';
    echo '</ul></div>';
  } else echo '<div class="card mut">Practical answers have not been AI-graded (no Claude API key set, or grading failed). Review them below.</div>';
  echo '<h2>Practical tasks</h2>';
  foreach ($bank['tasks'][$r['track']] as $t) {
    $g = $tScore[$t['id']] ?? null;
    echo '<div class="card"><b>' . $e($t['title']) . '</b>' . ($g ? ' · <b>' . $g['score'] . '/10</b>' : '') . (!empty($r['integrity']['pastes'][$t['id']]) ? ' <span class="mut">· pasted ' . (int)$r['integrity']['pastes'][$t['id']] . 'x</span>' : '')
      . '<p class="mut">' . nl2br($e($t['q'])) . '</p><pre>' . $e($r['answers']['tasks'][$t['id']] ?: '(blank)') . '</pre>'
      . ($g ? '<p><span class="ok">+ ' . $e($g['strengths']) . '</span><br><span class="bad">– ' . $e($g['gaps']) . '</span></p>' : '') . '</div>';
  }
  echo '<h2>Tool proficiency (self-rated)</h2><div class="card">';
  $lv = ['Never', 'Basic', 'Regular', 'Advanced'];
  foreach ($r['answers']['tools'] as $tool => $v) echo $e($tool) . ': <b>' . $lv[$v] . '</b><br>';
  echo '</div><h2>Multiple choice</h2><div class="card">';
  foreach ($r['answers']['mcq'] as $id => $a) echo '<p>' . ($a['ok'] ? '<span class="ok">✓</span> ' : '<span class="bad">✗</span> ') . $e($byId[$id]['q']) . '<br><span class="mut">Answered: ' . $e($byId[$id]['o'][$a['a']] ?? '(none)') . ($a['ok'] ? '' : ' · Correct: ' . $e($byId[$id]['o'][$byId[$id]['a']])) . '</span></p>';
  echo '</div></div></body></html>'; exit;
}

/* ---------- ranked list */
echo '<h1>AI marketing assessment results</h1><p class="mut">' . count($rows) . ' submitted · ranked by overall score (MCQ score where practical tasks are not graded)</p><div class="bar">';
echo '<a href="?" class="' . ($track === '' ? 'on' : '') . '">All</a>';
foreach ($bank['tracks'] as $k => $t) echo '<a href="?track=' . $k . '" class="' . ($track === $k ? 'on' : '') . '">' . $e($t['label']) . '</a>';
echo '<a href="?csv=1' . ($track ? '&track=' . $e($track) : '') . '">⬇ CSV</a></div><div class="tw"><table><thead><tr><th>#</th><th>Candidate</th><th>Track</th><th class="n">Overall</th><th class="n">MCQ</th><th class="n">AI fluency</th><th class="n">Automation</th><th class="n">Perf.</th><th>Verdict</th><th class="n">Min</th><th class="n">Tabs</th><th>Submitted</th></tr></thead><tbody>';
foreach ($rows as $i => $r) {
  $ai = $r['ai'] ?? [];
  echo '<tr><td class="n">' . ($i + 1) . '</td><td><a href="?id=' . $e($r['id']) . '">' . $e($r['name']) . '</a><br><span class="mut">' . $e($r['email']) . '</span></td><td>' . $e($bank['tracks'][$r['track']]['label']) . '</td>'
    . '<td class="n"><b>' . $e($r['scores']['overall'] ?? '–') . '</b></td><td class="n">' . $e($r['scores']['mcq_pct'] ?? '–') . '%</td>'
    . '<td class="n">' . $e($ai['ai_fluency'] ?? '–') . '</td><td class="n">' . $e($ai['automation_depth'] ?? '–') . '</td><td class="n">' . $e($ai['performance_marketing'] ?? '–') . '</td>'
    . '<td>' . $pill($r) . '</td><td class="n">' . $e($r['minutes_taken'] ?? '') . (!empty($r['late']) ? ' <span class="bad">late</span>' : '') . '</td><td class="n">' . $e($r['integrity']['tab_switches'] ?? '') . '</td>'
    . '<td class="mut">' . (!empty($r['submitted']) ? date('d M H:i', $r['submitted']) : 'in progress') . '</td></tr>';
}
if (!$rows) echo '<tr><td colspan="12" class="mut">No submissions yet.</td></tr>';
echo '</tbody></table></div><p class="mut" style="margin-top:12px"><a href="?all=1">Include candidates who started but did not submit</a></p></div></body></html>';
