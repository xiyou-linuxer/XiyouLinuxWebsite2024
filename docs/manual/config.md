# 配置修改

::: tip
你可以参考 VitePress 官方文档的 [自定义主题](https://vitepress.dev/zh/guide/custom-theme) 和 [配置](https://vitepress.dev/zh/reference/site-config) 一节。
:::

## cleanUrls

如果使用 Nginx 运行，由于启用了 VitePress 的 `cleanUrls`，刷新时会导致页面 404。

你需要在 Nginx 中配置 index, try_files 和 error_page 规则：

```nginx
    index index.html;
    location / {
        try_files $uri $uri.html $uri/ =404;
    }
    error_page 404 /404.html;
```