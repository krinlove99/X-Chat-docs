import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    bundler: viteBundler(),
    base: '/X-Chat-docs/',
    home:'/1/X-Chat介绍.md',
    footer: 'Copyright © 2024-BASETEC',
    prevLink:true,
    theme: defaultTheme({
        logo:'/images/lan1.png',
        navbar: [
            { text: '文档首页', link: '/1/X-Chat介绍.md' },
            { text: 'X-Chat智能助理😍', link: 'https://xchat.rntec.top' },
            { text: 'X-Chat官网', link: 'https://rntec.top' },
            { text: '历史更新', link: 'https://rntec.top/loginfo.aspx' },
        ],
        sidebar: [
            {
                text: 'BASETEC X-Chat 使用文档',
                children: [
                    {
                        text: '介绍', 
                        children: [{
                            text: 'X-Chat',
                            link: '/README.md'
                        }
                        ],
                    },
                    {
                        text: '快速使用', children: [{
                            text: '注册账户',
                            link: '/2/注册账户.md'
                        },
                        {
                            text: '获取令牌',
                            link: '/2/获取令牌.md'
                        },
                        {
                            text: '客户端配置',
                            link: '/2/客户端配置.md'
                        }
                        ],
                    },
                    {
                        text: '其他配置', children: [{
                            text: '查询额度使用日志',
                            link: '/3/查询额度使用日志.md'
                        },
                        {
                            text: '查看剩余额度及兑换额度',
                            link: '/3/查看剩余额度及兑换额度.md'
                        }
                        ],
                    },
                    {
                        text: '进阶功能', children: [
                            {
                                text: '免登录“快速聊天”功能介绍（暂时下线）',
                                link: '/4/免登录“快速聊天”功能介绍（暂时下线）.md'
                            },
                            {
                                text: '模型插件市场开放',
                                link: '/4/模型插件市场开放.md'
                            },
                            {
                                text: 'X-Chat聊天记录云同步',
                                link: '/4/X-Chat聊天记录云同步.md'
                            },
                        ],
                        
                    },
                    {
                        text: '模型介绍',
                        children:[
                            {
                                text: '模型倍率公示',
                                link: '/5/模型倍率公示.md',
                                
                            }
                        ]
                    },
                    {
                        text: '其他问题',
                        children:[
                            {
                                text: '账号问题',
                                link: '/6/账号问题.md',
                                
                            },
                            {
                                text: 'Token奖励',
                                link: '/6/活动福利、系统赠送额度.md',
                                
                            },
                        ]
                    },

                ]
            }
        ]
    }),
    lang: 'zh-CN',
    description: 'BASETEC X-Chat',
})
