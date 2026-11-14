<?php
// Lead form settings. Edit on the server if needed.
return [
  'to'       => 'info@norvexatechnologies.com',          // where new enquiries are emailed
  'from'     => 'no-reply@norvexatechnologies.com',      // must be a mailbox on this domain (create it in Hostinger Emails)
  'smtp2go_api_key' => '',                             // SMTP2GO API key (your domain already uses SMTP2GO); empty = PHP mail()
  'webhook'  => '',                                     // optional: CRM / automation webhook URL (HubSpot, Zoho, n8n, Make)
  'per_hour' => 5,                                      // max submissions per IP per hour
];
