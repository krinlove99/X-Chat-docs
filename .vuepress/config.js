import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    bundler: viteBundler(),
    title: 'X-Chat 使用文档',
    base: '/',
    home:'/README.md',
    head: [['link', { rel: 'icon', href: '/images/lan1.png' }]],
    footer: 'Copyright © 2024-BASETEC',
    theme: defaultTheme({
        docsBranch:'main',
        lastUpdated: false,
        contributors: false,
        prevLink:true,
        logo:'/images/lan1.png',
        navbar: [
            { text: '文档首页', link: '/README.md' },
            { text: 'X-Chat智能助理😍', link: 'https://xchat.rntec.top' },
            { text: 'X-Chat官网', link: 'https://rntec.top' },
            { text: '历史更新', link: 'https://rntec.top/loginfo.aspx' },
        ],
        sidebar: [
            {
                text: 'BASETEC X-Chat 使用文档',
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
                            text: '获取令牌',
                            link: '/docs/2/获取令牌.md'
                        },
                        {
                            text: '客户端配置',
                            link: '/docs/2/客户端配置.md'
                        }
                        ],
                    },
                    {
                        text: '其他配置', children: [{
                            text: '查询额度使用日志',
                            link: '/docs/3/查询额度使用日志.md'
                        },
                        {
                            text: '查看剩余额度及兑换额度',
                            link: '/docs/3/查看剩余额度及兑换额度.md'
                        }
                        ],
                    },
                    {
                        text: '进阶功能', children: [
                            {
                                text: '✨ 模型多模态功能',
                                link: '/docs/4/模型多模态功能.md'
                            },
                            {
                                text: '✨ 语音识别与合成',
                                link: '/docs/4/语音合成.md'
                            },
                            {
                                text: '✨ AI即时翻译服务',
                                link: '/docs/4/AI即时翻译服务.md'
                            },
                            
                            {
                                text: 'X-Chat聊天记录云同步',
                                link: '/docs/4/X-Chat聊天记录云同步.md'
                            },
                            {
                                text: '免登录“快速聊天”',
                                link: '/docs/4/免登录“快速聊天”.md'
                            },
                        ],
                        
                    },
                    {
                        text: '模型介绍',
                        children:[
                            {
                                text: '💦 模型倍率公示',
                                link: '/docs/5/模型倍率公示.md',
                                
                            }
                        ]
                    },
                    {
                        text: '其他问题',
                        children:[
                            {
                                text: '账号问题',
                                link: '/docs/6/账号问题.md',
                                
                            },
                            {
                                text: '活动福利、系统赠送额度',
                                link: '/docs/6/活动福利、系统赠送额度.md',
                                
                            },
                            {
                                text: '错误故障汇总',
                                link: '/docs/6/故障解决方案.md',
                                
                            },
                        ]
                    },
                    {
                        text: '开发者支持',
                        children:[
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
