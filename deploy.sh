#!/bin/bash
# Deploy Script for Static Portfolio (Astro + Tailwind CSS + shadcn)
# Script ini melakukan build static lokal dan mengupload hasilnya ke server untuk menimpa portofolio lama.

set -e

ENV_FILE=".env.deploy"
if [ ! -f "$ENV_FILE" ]; then
    echo -e "\033[0;31mError: $ENV_FILE tidak ditemukan!\033[0m"
    echo -e "\033[0;33mSilakan buat file $ENV_FILE dari contoh .env.deploy.example\033[0m"
    echo -e "\033[0;33mContoh isi:\nDEPLOY_HOST=ip_server\nDEPLOY_USER=root\nDEPLOY_PORT=22\033[0m"
    exit 1
fi

# Load environment variables
export $(grep -v '^#' $ENV_FILE | xargs)

HOST_NAME=$DEPLOY_HOST
USER=$DEPLOY_USER
PORT=${DEPLOY_PORT:-22}
REMOTE_TEMP_DIR="/var/www/portofolio-temp"
REMOTE_DIR="/var/www/portofolio-hibban"

if [ -z "$HOST_NAME" ] || [ -z "$USER" ]; then
    echo -e "\033[0;31mError: DEPLOY_HOST dan DEPLOY_USER harus diisi di $ENV_FILE!\033[0m"
    exit 1
fi

echo -e "\033[0;36m🚀 Memulai proses deploy ke $USER@$HOST_NAME:$PORT...\033[0m"

# 1. Build Astro Static
echo -e "\033[0;33m🏗️  Building project static Astro...\033[0m"
pnpm build

if [ ! -d "dist" ]; then
    echo -e "\033[0;31m❌ Folder dist tidak ditemukan setelah build!\033[0m"
    exit 1
fi

# 2. Archive dist folder
echo -e "\033[0;33m🗜️  Mengompres file build static (dist)... \033[0m"
rm -f deploy.tar.gz
tar -czf deploy.tar.gz -C dist .

# 3. Upload & Deploy to Server
echo -e "\033[0;33m📤 Mengirim file ke server...\033[0m"

SSH_CMD="ssh -p $PORT"
SCP_CMD="scp -P $PORT"

if [ -n "$DEPLOY_PASSWORD" ] && command -v sshpass &> /dev/null; then
    SSH_CMD="sshpass -p $DEPLOY_PASSWORD ssh -p $PORT"
    SCP_CMD="sshpass -p $DEPLOY_PASSWORD scp -P $PORT"
fi

# Pastikan folder temp ada di server
$SSH_CMD $USER@$HOST_NAME "mkdir -p $REMOTE_TEMP_DIR $REMOTE_DIR"

# Upload archive
$SCP_CMD deploy.tar.gz $USER@$HOST_NAME:$REMOTE_TEMP_DIR/

# Eksekusi ekstraksi dan penimpaan di server
echo -e "\033[0;33m🔄 Menimpa file di server dan menyelaraskan layanan web...\033[0m"
$SSH_CMD $USER@$HOST_NAME "bash -s" << EOF
set -e
echo "── 1. Mengosongkan folder target lama ─────────────────"
# Bersihkan sisa file Nuxt SSR lama (.output, server.mjs, dll)
rm -rf $REMOTE_DIR/*

echo "── 2. Mengekstrak file static baru ─────────────────────"
tar -xzf $REMOTE_TEMP_DIR/deploy.tar.gz -C $REMOTE_DIR/
rm -rf $REMOTE_TEMP_DIR

echo "── 3. Menyelaraskan PM2 static server (Port 38241) ────"
if command -v pm2 &> /dev/null; then
    # Jika Nginx server Anda masih me-reverse-proxy ke port 38241 (konfigurasi Nuxt lama):
    # Kita jalankan PM2 serve bawaan agar port 38241 langsung melayani file static tanpa perlu ubah Nginx!
    pm2 delete portofolio-hibban 2>/dev/null || true
    pm2 serve $REMOTE_DIR 38241 --name "portofolio-hibban" --spa
    pm2 save
fi

echo "── 4. Reload Nginx (jika tersedia) ─────────────────────"
if command -v nginx &> /dev/null; then
    nginx -t 2>/dev/null && systemctl reload nginx 2>/dev/null || true
fi

echo "✅ Deploy selesai & berhasil ditimpa!"
EOF

# Bersihkan arsip lokal
rm -f deploy.tar.gz

echo -e "\033[0;32m🎉 Sukses! Portofolio static terbaru telah aktif di server.\033[0m"
