<?php
// Norvexa lead handler: validates, emails, stores (api/data/leads.csv) and optionally forwards to a CRM webhook.
header('Content-Type: application/json');
header('X-Robots-Tag: noindex');
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); echo '{"ok":false}'; exit; }
$cfg = require __DIR__ . '/config.php';
$f = fn($k, $max = 500) => trim(mb_substr(strip_tags((string)($_POST[$k] ?? '')), 0, $max));

if ($f('website') !== '') { echo '{"ok":true}'; exit; } // honeypot: pretend success
$name = $f('name', 120); $email = $f('email', 160);
if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || $f('consent') === '') { http_response_code(422); echo '{"ok":false,"error":"invalid"}'; exit; }

// simple per-IP rate limit
$dir = __DIR__ . '/data'; if (!is_dir($dir)) mkdir($dir, 0750, true);
$ip = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? '';
$ipKey = $dir . '/rl_' . md5(explode(',', $ip)[0] . date('YmdH'));
$n = (int)@file_get_contents($ipKey);
if ($n >= ($cfg['per_hour'] ?? 5)) { http_response_code(429); echo '{"ok":false,"error":"rate"}'; exit; }
@file_put_contents($ipKey, $n + 1);

$fields = ['name','email','company','phone','country','budget','interest','message','page','landing','referrer','utm_source','utm_medium','utm_campaign','utm_term','utm_content','gclid','fbclid','li_fat_id'];
$lead = ['received' => gmdate('c')];
foreach ($fields as $k) $lead[$k] = $f($k, $k === 'message' ? 4000 : 500);
$lead['name'] = $name; $lead['email'] = $email;

// store
$csv = $dir . '/leads.csv'; $new = !file_exists($csv);
if ($fh = @fopen($csv, 'a')) { if ($new) fputcsv($fh, array_keys($lead)); fputcsv($fh, array_values($lead)); fclose($fh); }

// email
$lines = []; foreach ($lead as $k => $v) if ($v !== '') $lines[] = str_pad(ucfirst(str_replace('_', ' ', $k)) . ':', 14) . ' ' . $v;
$subject = 'New enquiry: ' . $name . ($lead['company'] ? ' (' . $lead['company'] . ')' : '') . ($lead['interest'] ? ' – ' . $lead['interest'] : '');
$headers = ['From: Norvexa Website <' . $cfg['from'] . '>', 'Reply-To: ' . $name . ' <' . $email . '>', 'Content-Type: text/plain; charset=UTF-8'];
$sent = false;
if (!empty($cfg['smtp2go_api_key']) && function_exists('curl_init')) {
  $ch = curl_init('https://api.smtp2go.com/v3/email/send');
  curl_setopt_array($ch, [CURLOPT_POST => true, CURLOPT_RETURNTRANSFER => true, CURLOPT_TIMEOUT => 10,
    CURLOPT_HTTPHEADER => ['Content-Type: application/json', 'X-Smtp2go-Api-Key: ' . $cfg['smtp2go_api_key']],
    CURLOPT_POSTFIELDS => json_encode(['sender' => 'Norvexa Website <' . $cfg['from'] . '>', 'to' => [$cfg['to']], 'subject' => $subject,
      'text_body' => implode("\n", $lines), 'custom_headers' => [['header' => 'Reply-To', 'value' => $name . ' <' . $email . '>']]])]);
  $res = json_decode((string)curl_exec($ch), true); curl_close($ch);
  $sent = !empty($res['data']['succeeded']);
}
if (!$sent) $sent = @mail($cfg['to'], '=?UTF-8?B?' . base64_encode($subject) . '?=', implode("\n", $lines), implode("\r\n", $headers));

// optional CRM webhook
if (!empty($cfg['webhook']) && function_exists('curl_init')) {
  $ch = curl_init($cfg['webhook']);
  curl_setopt_array($ch, [CURLOPT_POST => true, CURLOPT_POSTFIELDS => json_encode($lead), CURLOPT_HTTPHEADER => ['Content-Type: application/json'], CURLOPT_RETURNTRANSFER => true, CURLOPT_TIMEOUT => 5]);
  curl_exec($ch); curl_close($ch);
}
echo json_encode(['ok' => true, 'mailed' => (bool)$sent]);
