# 推送部署

## 推送

如果你没有仓库的推送权限，请将 Remote 指向到你 Fork 的仓库。推送后发起 Pull Request。

## 在小组服务器部署

将仓库克隆到服务器上，使用 `update-deploy.sh` 更新部署。

它应当类似以下这样：

```sh
WWW_DIR="/opt/1panel/apps/openresty/openresty/www/sites/www.xiyoulinux.com/index"

git pull
pnpm i
pnpm run build
sudo rm -rf $WWW_DIR
sudo cp -r docs/.vitepress/dist $WWW_DIR
```