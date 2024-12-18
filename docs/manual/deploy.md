# 推送部署

## 推送

如果你没有仓库的推送权限，请将 Remote 指向到你 Fork 的仓库。推送后发起 Pull Request。

## 在 Pages 服务上部署

采用在线构建方式。

- 分支：`main`
- 构建命令：`pnpm build`
- 部署目录：`docs/.vitepress/dist`

## 在小组服务器部署

::: info 弃用
已经换用 Cloudflare Pages 部署。
:::

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
### cleanUrls

如果使用 Nginx 运行，由于启用了 VitePress 的 `cleanUrls`，刷新时会导致页面 404。

需要在 Nginx 中配置规则：

```nginx
    index index.html;
    location / {
        try_files $uri $uri.html $uri/ =404;
    }
    error_page 404 /404.html;
```
