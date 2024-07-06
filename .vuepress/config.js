import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    bundler: viteBundler(),
    title: 'BASETEC AI 使用文档',
    base: '/',
    home: '/README.md',
    head: [['link', { rel: 'icon', href: '/images/lan1.png' }]],
    footer: 'Copyright © 2024-BASETEC',
    theme: defaultTheme({
        docsBranch: 'main',
        lastUpdated: false,
        contributors: false,
        prevLink: true,
        logo: '/images/lan1.png',
        navbar: [
            { text: '文档首页', link: '/README.md' },
            { text: 'X-Chat V2😍', link: 'https://basetec.top/xchat' },
            { text: 'X-Chat V3😍', link: 'https://AGENT.BASETEC.TOP' },
            { text: 'BASETEC官网', link: 'https://basetec.top' },
            // { text: '历史更新', link: 'https://rntec.top/loginfo.aspx' },
        ],
        sidebar: [
            {
                text: '使用文档',
                children: [
                    {
                        text: '🌐介绍',
                        children: [{
                            text: 'X-Chat',
                            link: '/README.md'
                        }
                        ],
                    },
                    {
                        text: '快速使用', children: [{
                            text: '注册账户',
                            link: '/docs/2/注册账户.md'
                        },
                        {
                            text: 'X-Chat V2 聊天助手',
                            link: '/docs/2/获取令牌.md'
                        },
                        {
                            text: '⚡X-Chat V3 聊天助手',
                            link: '/docs/2/xchatv3.md'
                        },
                        {
                            text: '⚡AI实验室',
                            link: '/docs/2/AIlab.md'
                        }
                        ],
                    },
                    {
                        text: 'X-Chat V2 二次分发系统', children: [{
                            text: '查询账户信息',
                            link: '/docs/3/查询额度使用日志.md'
                        },
                        {
                            text: 'V2 模型介绍',
                            link: '/docs/3/模型倍率公示.md'
                        },
                        {
                            text: 'V2 模型进阶功能',
                            link: '/docs/3/模型多模态功能.md'
                        },
                        {
                            text: 'V3 语音识别与合成',
                            link: '/docs/3/语音合成.md'
                        },
                        {
                            text: 'V2 聊天记录云同步',
                            link: '/docs/3/X-Chat聊天记录云同步.md'
                        },
                        {
                            text: 'V2 错误故障汇总',
                            link: '/docs/2/故障解决方案.md',

                        }
                        ],
                    },
                    {
                        text: 'X-Chat V3 用户端', children: [
                            {
                                text: 'V3 客户端介绍',
                                link: '/docs/v3/V3 客户端介绍.md'
                            },
                            {
                                text: '查询账户信息',
                                link: '/docs/v3/system.md'
                            },
                            {
                                text: 'V3 模型介绍',
                                link: '/docs/v3/模型倍率公示.md'
                            }
                            

                        ],
                    }
                    ,
                    {
                        text: 'AI实验室', children: [
                            {
                                text: 'Stable Diffusion',
                                link: '/docs/AIlab/sd.md'
                            },
                            {
                                text: 'AI搜索',
                                link: '/docs/AIlab/aisearch.md'
                            },
                            {
                                text: 'AI即时翻译服务',
                                link: '/docs/AIlab/AI即时翻译服务.md'
                            }

                        ],
                    },
                    {
                        text: '其他问题',
                        children: [
                            // {
                            //     text: '账号问题',
                            //     link: '/docs/6/账号问题.md',

                            // },
                            {
                                text: '活动福利、系统赠送额度',
                                link: '/docs/6/活动福利、系统赠送额度.md',

                            },
                        ]
                    },
                    {
                        text: '开发者支持',
                        children: [
                            {
                                text: '搭建你的AI客户端',
                                link: '/docs/7/搭建你的AI聊天.md',

                            }
                        ]
                    },

                ]
            }
        ]
    }),
    lang: 'zh-CN',
    description: 'BASETEC X-Chat',
})
