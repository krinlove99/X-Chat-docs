import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BASETEC AI 使用文档",
  description: "BASETEC AI 使用文档",
  head: [['link', { rel: 'icon', href: '/images/lan1.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/lan3.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '快速使用', link: '/快速使用/注册账户' }
    ],

    sidebar: [
      {
        text: '快速使用',
        items: [
          { text: '注册账户', link: '/快速使用/注册账户' },
          { text: 'X-Chat V2 聊天助手', link: '/快速使用/X-Chat V2 聊天助手' },
          { text: '⚡X-Chat V3 聊天助手', link: '/快速使用/X-Chat V3 聊天助手' },
          { text: '⚡AI实验室', link: '/快速使用/AI实验室' },
        ],
      },
      {
        text: 'X-Chat V2',
        items: [
          { text: 'V2 客户端功能', link: '/V2/V2 客户端功能' },
          { text: 'V2 模型介绍', link: '/V2/V2 模型介绍' },
          { text: 'V2 模型进阶功能', link: '/V2/V2 模型进阶功能' },
          { text: 'V2 错误故障汇总', link: '/V2/V2 错误故障汇总' },
        ],
      },
      {
        text: 'X-Chat V3',
        items: [
          { text: 'V3 客户端功能', link: '/V3/V3 客户端功能' },
          { text: 'V3 模型介绍', link: '/V3/V3 模型介绍' },
        ],
      },
      {
        text: 'AI实验室',
        items: [
          { text: '图片创作服务', link: '/AI实验室/sd' },
          { text: 'X-搜索(AI搜索)', link: '/AI实验室/X-搜索' },
          { text: 'AI即时翻译服务', link: '/AI实验室/AI即时翻译服务' },
        ],
      },
      {
        text: '其他问题',
        items: [
          { text: '活动福利、系统赠送额度', link: '/other/活动福利' },
        
        ],
      },
      {
        text: '开发者支持',
        items: [
          { text: '搭建你的AI客户端', link: '/develop/AI客户端搭建' },
          { text: '端点调用', link: '/develop/point' },
        ],
      },
    ],
    footer: {

      copyright: 'Copyright © 2019-2024 BASETEC. All rights reserved'
    }

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
