#!/usr/bin/env bash
set -e

# Deployment script for VPS 202 (202.10.34.27)
cd /var/www/projects/nurul-ibad
git pull origin main
/usr/local/bin/bun install
/usr/local/bin/bun run build
systemctl reload nginx

echo "Deploy Nurul Ibad successfully completed!"
