# 本地运行

项目使用 [VitePress](https://github.com/vuejs/vitepress) 构建。

## 配置项目环境

运行项目需要 Node.js ，如果没有，你需要手动下载或者使用包管理器安装它。

安装完成后，请尝试运行此命令：

```sh
npm -v
```

如果看到诸如 `10.5.0` 的版本号输出，说明成功安装了 Node.js 和 npm。如果提示找不到命令，请使用包管理器安装 npm。

## 克隆仓库

使用以下的命令克隆 [<i class="fa-brands fa-github"></i>XiyouLinuxWebsite2024](https://github.com/xiyou-linuxer/XiyouLinuxWebsite2024) 到本地。

```sh
git clone https://github.com/xiyou-linuxer/XiyouLinuxWebsite2024.git
```

如果你在 GitHub 上配置了 SSH 密钥，也可以使用此命令：

```sh
git clone git@github.com:xiyou-linuxer/XiyouLinuxWebsite2024.git
```

## 安装项目依赖

在终端中进入 Git 仓库所在的路径：

```sh 
cd XiyouLinuxWebsite2024
```

使用 npm 或者其他管理工具安装项目依赖：

::: code-group
```sh [pnpm]
pnpm i
```
```sh [npm]
npm i
```
:::

## 启动本地测试服务器

::: tip
你可以参考 VitePress 官方文档的 [快速开始](https://vitepress.dev/zh/guide/getting-started) 一节。
:::

`dev` 脚本将启动具有即时热更新的本地开发服务器。使用以下命令运行它：

::: code-group
```sh [pnpm]
pnpm run dev
```
```sh [npm]
npm run dev
```
:::

除了 npm 脚本，还可以直接调用 VitePress：


::: code-group

```sh [npm]
npx vitepress dev docs
```

```sh [pnpm]
pnpm exec vitepress dev docs
```

:::

本地开发服务应该会运行在 `localhost:5173` 上。