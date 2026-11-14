#!/bin/bash
# One-time VPS setup: backup, auto-deploy from GitHub, nginx config with PHP lead handler. Safe to re-run.
set -e
RAW=https://raw.githubusercontent.com/norvexatechnologies-hash/norvexa-website/main/ops
TS=$(date +%F-%H%M)
command -v git >/dev/null && command -v rsync >/dev/null || apt-get install -y git rsync >/dev/null
tar czf /root/norvexa-site-backup-$TS.tgz -C /var/www/norvexa . && echo "Backup: /root/norvexa-site-backup-$TS.tgz"
cp /etc/nginx/conf.d/norvexa.conf /root/norvexa.conf.bak-$TS
curl -fsSL $RAW/norvexa-deploy.sh -o /usr/local/bin/norvexa-deploy && chmod +x /usr/local/bin/norvexa-deploy
/usr/local/bin/norvexa-deploy
PHPU=$(awk -F= '/^user/{gsub(/ /,"",$2);print $2}' /etc/php/8.3/fpm/pool.d/www.conf 2>/dev/null); PHPU=${PHPU:-www-data}
mkdir -p /var/www/norvexa/api/data && chown -R $PHPU:$PHPU /var/www/norvexa/api/data
curl -fsSL $RAW/nginx-norvexa.conf -o /etc/nginx/conf.d/norvexa.conf
if nginx -t 2>/dev/null; then systemctl reload nginx && echo "nginx reloaded"; else cp /root/norvexa.conf.bak-$TS /etc/nginx/conf.d/norvexa.conf; nginx -t; echo "NGINX CONFIG FAILED - rolled back"; fi
(crontab -l 2>/dev/null | grep -v norvexa-deploy; echo "*/5 * * * * /usr/local/bin/norvexa-deploy >>/var/log/norvexa-deploy.log 2>&1") | crontab -
echo "SETUP DONE"
