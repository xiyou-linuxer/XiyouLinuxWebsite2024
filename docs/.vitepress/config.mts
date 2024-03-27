import { defineConfig, type DefaultTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  title: '西邮 Linux 兴趣小组',
  description: '',
  lastUpdated: true,
  // cleanUrls: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon.ico',

    nav: nav(),

    sidebar: {
      // 指定路径侧边栏
      '/manual': manualSidebar(),

      // 默认侧边栏
      '/': dafaultSidebar(),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xiyou-linuxer' },
    ],

    externalLinkIcon: true,
    langMenuLabel: '切换语言',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    outline: { level: [2, 3], label: '目录' },
    returnToTopLabel: '返回顶部',
    editLink: {
      pattern: 'https://github.com/xiyou-linuxer/XiyouLinuxWebsite2024/blame/main/docs/:path',
      text: '源代码'
    },
    lastUpdated: {
      text: '更新于',
      formatOptions: { dateStyle: 'short', timeStyle: 'medium' }
    },
    docFooter: { prev: '上一篇', next: '下一篇' },

    footer: {
      message: '<a href="http://beian.miit.gov.cn" target="_blank"><i class="fa-solid fa-shield-halved"></i>陕ICP备2023007680号-1</a> · <a href="/manual/"><i class="fa-solid fa-book"></i>维护手册</a> · <a href="https://github.com/xiyou-linuxer/XiyouLinuxWebsite2024" target="_blank"><i class="fa-brands fa-github"></i>官网仓库</a>',
      copyright: `© 2006-${new Date().getFullYear()} 西邮 Linux 兴趣小组`
    },
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // ['link', { rel: 'stylesheet', href: '//s1.hdslb.com/bfs/static/jinkela/long/font/regular.css', media: 'none', onload: 'media="all"' }],
    // ['link', { rel: 'stylesheet', href: '//s1.hdslb.com/bfs/static/jinkela/long/font/medium.css', media: 'none', onload: 'media="all"' }],
    ['link', { rel: 'stylesheet', href: '//lib.baomitu.com/font-awesome/6.5.1/css/all.min.css', media: 'none', onload: 'media="all"' }],
  ],
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: '群博Blog', link: '//blog.xiyoulinux.com' },
    { text: '培养Plan', link: '//plan.xiyoulinux.com' },
    { text: '成员', link: '/info/member' },
    { text: '活动', link: '/event/' },
    {
      text: '链接', items: [
        { text: '联系方式', link: '/info/contact' },
        { text: '加入我们', link: '/info/join' },
        {
          items: [
            { text: 'GitHub', link: 'https://github.com/xiyou-linuxer' },
            { text: '邮件列表', link: 'https://groups.google.com/g/xiyoulinux' },
            { text: '公众号', link: '/contact#mp' },
            { text: '哔哩哔哩', link: 'https://space.bilibili.com/432976868/' },
            { text: '微博', link: 'https://www.weibo.com/n/西邮Linux兴趣小组' },
          ]
        },
        { text: '友情链接', link: '/link' },
      ]
    },
  ]
}

function dafaultSidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '<i class="fa-solid fa-sitemap"></i> 信息', items: [
        { text: '小组介绍', link: '/info/' },
        { text: '成员', link: '/info/member' },
        { text: '友情链接', link: '/link' },
      ]
    },
    {
      text: '<i class="fa-solid fa-calendar-days"></i> 活动', items: [
        { text: '主要活动', link: '/event/' },
        { text: '小型知识分享', link: '/event/weekly' },
      ]
    },
    {
      text: '<i class="fa-solid fa-address-book"></i> 联系', items: [
        { text: '联系方式', link: '/info/contact' },
        { text: '加入我们', link: '/info/join' },
      ]
    },
  ]
}

function manualSidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '<i class="fa-solid fa-book"></i> 官网维护手册', items: [
        { text: '概览', link: '/manual/' },
        { text: '安装', link: '/manual/setup' },
        { text: '配置', link: '/manual/config' },
        { text: '写作', link: '/manual/write' },
        {
          text: '组件', items: [
            { text: '图标', link: '/manual/component/icon' },
            { text: '成员列表', link: '/manual/component/member-list' },
          ]
        },
        { text: '推送部署', link: '/manual/deploy' },
      ]
    },
    { text: '维护日志', link: '/manual/log' },
  ]
}