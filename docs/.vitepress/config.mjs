import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Arcnix AI 使用文档",
  description: "Arcnix AI 使用文档",
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
          { text: '⚡AI实验室', link: '/快速使用/AI实验室' },
          { text: '⚡X-Chat AI聊天助手', link: '/快速使用/X-Chat V3 聊天助手' },
          { text: '会员订阅', link: '/快速使用/price' },
          { text: 'ArcnixAI Cloud', link: '/快速使用/企业合作' },
        ],
      },
      {
        text: 'AI实验室：AI对话',
        items: [
          { text: '客户端简介', link: '/V3/V3 客户端功能' },
          { text: '模型介绍', link: '/V3/V3 模型介绍' },
          { text: '特色功能', link: '/V3/特色功能' },
        ],
      },
      {
        text: 'AI实验室',
        items: [
          { text: '图片创作服务', link: '/AI实验室/sd' },
          { text: '视频创作服务', link: '/AI实验室/video' },
          { text: '音乐创作服务', link: '/AI实验室/music' },
          { text: '语音创作服务', link: '/AI实验室/voice' },
          { text: 'X-搜索(AI搜索)', link: '/AI实验室/X-搜索' },
          { text: 'AI即时翻译服务', link: '/AI实验室/AI即时翻译服务' },
          { text: 'AI智能语音助手', link: '/AI实验室/aihelper' },
        ],
      },
      {
        text: 'ArcnixAI Cloud',
        items: [
          { text: 'API开放平台', link: '/V2/enterprise' },
          { text: 'API调用支持模型', link: '/V2/model' },
          { text: '进阶功能', link: '/V2/V2 模型进阶功能' },
          { text: '错误故障汇总', link: '/V2/V2 错误故障汇总' },
        ],
      },
      {
        text: '合作与服务',
        items: [
          { text: '服务介绍', link: '/bussiness/enterprise' },
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
          { text: '端点调用', link: '/develop/point' },
        ],
      },
    ],
    footer: {

      copyright: 'Copyright © 2019-2024 Arcnix 智弧互联科技. All rights reserved'
    }

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
