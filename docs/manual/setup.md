# 本地运行

项目使用 [VitePress](https://github.com/vuejs/vitepress) 构建。你可以参考 VitePress 官方文档的 [快速开始](https://vitepress.dev/zh/guide/getting-started) 一节。

## 配置项目环境

- 运行项目需要 Node.js 和 pnpm。
- VS Code 需要装有 ESLint 和 Stylelint 扩展。
- 克隆 [<i class="fa-brands fa-github"></i>website-2024](https://github.com/xiyou-linuxer/website-2024) 到本地。
  ```sh
  git clone git@github.com:xiyou-linuxer/website-2024.git
  ```
- 在终端中进入 Git 仓库所在的路径：
  ```sh
  cd website-2024
  ```
- 使用 pnpm 安装项目依赖：
  ```sh [pnpm]
  pnpm i
  ```

## 启动本地测试服务器

`dev` 脚本将启动具有即时热更新的本地开发服务器。使用以下命令运行它：

```sh
pnpm run dev
```

本地开发服务应该会运行在 `localhost:5173` 上。
