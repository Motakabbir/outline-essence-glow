#!/bin/bash
# Quick restart script - just restarts PM2 without rebuilding
# Run as: bash /var/www/vision148.com/restart.sh

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$DIR"

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

echo "==> Stopping old PM2 process..."
pm2 delete vision148 2>/dev/null || true

echo "==> Starting app..."
pm2 start ecosystem.config.cjs

echo "==> Saving PM2 list..."
pm2 save

echo ""
sleep 2
pm2 list

echo ""
echo "==> Testing port 3030..."
curl -s -o /dev/null -w "Port 3030 HTTP status: %{http_code}\n" http://127.0.0.1:3030/ 2>/dev/null || echo "curl check failed"

echo ""
echo "==> PM2 logs (last 20 lines):"
pm2 logs vision148 --lines 20 --nostream 2>/dev/null
