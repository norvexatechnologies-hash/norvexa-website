#!/bin/bash
# Pulls the built site from the `deploy` branch and syncs it into the web root. Runs every 5 minutes from cron.
set -e
R=/opt/norvexa-site
D=/var/www/norvexa
[ -d "$R/.git" ] || git clone -q --depth 1 -b deploy https://github.com/norvexatechnologies-hash/norvexa-website.git "$R"
cd "$R" && git fetch -q --depth 1 origin deploy && git reset -q --hard origin/deploy
EX=""; [ -f "$D/api/config.php" ] && EX="--exclude=api/config.php"
rsync -a --exclude=.git --exclude=api/data/ --exclude=.htaccess $EX "$R/" "$D/"
echo "$(date -u +%FT%TZ) deployed $(git rev-parse --short HEAD)"
