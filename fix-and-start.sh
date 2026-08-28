#!/bin/bash
# Fix & Start Script for vision148.com
# Run this as root: bash /var/www/vision148.com/fix-and-start.sh

set -e
cd /var/www/vision148.com

echo "============================================"
echo "  vision148.com - Fix & Start"
echo "============================================"

# 1. Load NVM if available
export NVM_DIR="$HOME/.nvm"
if [ -s "$NVM_DIR/nvm.sh" ]; then
    set +e  # Disable exit-on-error for NVM internal sourcing
    . "$NVM_DIR/nvm.sh"
    echo "NVM loaded. Using/Installing Node version from .nvmrc..."
    nvm install
    nvm use
    set -e  # Re-enable exit-on-error
else
    echo "NVM not found. Make sure Node.js >= 25 is installed."
fi

echo "[1] Node version: $(node -v)"
echo "[1] NPM version:  $(npm -v)"

# 2. Check what's in dist/server
echo ""
echo "[2] Current dist/server contents:"
ls -la dist/server/ 2>/dev/null || echo "  (empty or missing)"

# 3. Rebuild the project
echo ""
echo "[3] Rebuilding project..."
npm run build

echo ""
echo "[3] Post-build dist/server contents:"
ls -la dist/server/

# 4. Stop existing PM2 process if running
echo ""
echo "[4] Stopping existing PM2 process (if any)..."
pm2 delete vision148 2>/dev/null || true

# 5. Start fresh with PM2
echo ""
echo "[5] Starting app with PM2..."
pm2 start ecosystem.config.cjs

# 6. Save PM2 process list so it survives reboots
echo ""
echo "[6] Saving PM2 startup config..."
pm2 save

# 7. Wait a moment and check status
sleep 3
echo ""
echo "[7] PM2 status:"
pm2 list

# 8. Check if port 3030 is listening
echo ""
echo "[8] Checking port 3030:"
ss -tlnp | grep 3030 || netstat -tlnp | grep 3030 || echo "  Port 3030 check failed - checking with curl..."
curl -s -o /dev/null -w "HTTP Status: %{http_code}\n" http://127.0.0.1:3030/ || echo "  curl failed"

# 9. Test and reload Apache
echo ""
echo "[9] Reloading apache2..."
systemctl reload apache2 || service apache2 reload

echo ""
echo "============================================"
echo "  Done! Check https://vision148.com"
echo "============================================"

# Show logs if anything looks wrong
echo ""
echo "[LOGS] Last 30 lines of PM2 logs:"
pm2 logs vision148 --lines 30 --nostream 2>/dev/null || true
