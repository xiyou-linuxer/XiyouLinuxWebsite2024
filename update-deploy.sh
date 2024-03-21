WWW_DIR="/opt/1panel/apps/openresty/openresty/www/sites/www.xiyoulinux.com/index"

git pull
pnpm i
npm run docs:build
sudo rm -rf $WWW_DIR
sudo cp -r docs/.vitepress/dist $WWW_DIR