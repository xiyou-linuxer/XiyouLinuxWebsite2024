import { defineConfig, type DefaultTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  title: '西邮 Linux 兴趣小组',
  description: '',
  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon.ico',
    nav: nav(),
    sidebar: sidebar(),
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
    // editLink: {
    //   pattern: 'https://github.com/L33Z22L11/ZhiluSite/edit/main/docs/:path',
    //   text: '在 GitHub 上编辑此页面'
    // },
    lastUpdated: {
      text: '更新于',
      formatOptions: { dateStyle: 'short', timeStyle: 'medium' }
    },
    docFooter: { prev: '上一篇', next: '下一篇' },

    footer: {
      message: '<a href="http://beian.miit.gov.cn">陕ICP备2023007680号-1</a>',
      copyright: `© 2006-${new Date().getFullYear()} 西邮Linux兴趣小组`
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

function sidebar(): DefaultTheme.Sidebar {
  return [
    {
      text: '信息', items: [
        { text: '小组介绍', link: '/info/' },
        { text: '成员', link: '/info/member' },
        { text: '友情链接', link: '/link' },
      ]
    },
    {
      text: '活动', items: [
        { text: '主要活动', link: '/event/' },
        { text: '小型知识分享', link: '/event/weekly' },
      ]
    },
    {
      text: '联系我们', items: [
        { text: '联系方式', link: '/info/contact' },
        { text: '加入我们', link: '/info/join' },
      ]
    },
  ]
}