#!/bin/bash
# Build the static site and publish it to the `deploy` branch, which the Hostinger VPS pulls every 5 minutes.
set -e
npm run build
cd out && git init -q && git checkout -q -b deploy && git add -A && git commit -qm "Deploy $(date -u +%FT%TZ)" && \
  git push -qf "$(cd .. && git remote get-url origin)" deploy && rm -rf .git && echo "Pushed to deploy branch"
