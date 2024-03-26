# 部署

将仓库克隆到服务器上，使用 `update-deploy.sh` 更新部署。

它应当类似以下这样：

```sh
WWW_DIR="/opt/1panel/apps/openresty/openresty/www/sites/www.xiyoulinux.com/index"

git pull
pnpm i
npm run build
sudo rm -rf $WWW_DIR
sudo cp -r docs/.vitepress/dist $WWW_DIR
```