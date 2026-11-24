<?php
// Lead form settings. Edit on the server if needed.
return [
  'to'       => 'info@norvexatechnologies.com',          // where new enquiries are emailed
  'from'     => 'no-reply@norvexatechnologies.com',      // must be a mailbox on this domain (create it in Hostinger Emails)
  'smtp2go_api_key' => '',                             // SMTP2GO API key (your domain already uses SMTP2GO); empty = PHP mail()
  'webhook'  => '',                                     // optional: CRM / automation webhook URL (HubSpot, Zoho, n8n, Make)
  'per_hour' => 5,                                      // max submissions per IP per hour

  // Candidate assessment (/careers/assessment/ → api/assessment.php, results at api/results.php)
  'assess_to' => 'info@norvexatechnologies.com',        // where each completed assessment is emailed
  'assess_admin_password' => '',                        // optional: /api/results.php always offers a sign-in link emailed to assess_to; set this to also allow a password
  'anthropic_api_key' => '',                            // optional: Claude API key, enables AI grading of the practical answers
  'assess_model' => 'claude-opus-5-5',                  // Claude model used for grading
];
