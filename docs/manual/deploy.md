# 部署

将仓库克隆到服务器上，使用 `deploy.sh` 进行部署。

它应当类似以下这样：

```sh
WWW_DIR="/opt/1panel/apps/openresty/openresty/www/sites/www.xiyoulinux.com/index"

git pull
pnpm i
npm run docs:build
sudo rm -rf $WWW_DIR
sudo cp -r docs/.vitepress/dist $WWW_DIR
```