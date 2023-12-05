import {defaultTheme, defineUserConfig} from 'vuepress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'WVP-GB28181-Learning Doc',
    description: 'Learn to develop web video platforms.',
    base: '/wvp-doc/',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'WVP-GB28181-Learning文档',
            description: '学习开发web视频平台'
        }
    },
    head: [
//        ['link', {rel: 'icon', href: '/images/f.png'}],
    ],
    theme: defaultTheme({
//        logo: "/images/logo.png",
//        logoDark: "/images/logo-d.png",
        locales: {
            '/': {
                label: '简体中文',
                selectText: '选择语言',
                selectLanguageName: '简体中文',
                ariaLabel: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                sidebar: {
                    "/guide/": [
                        {
                            text: '指南',
                            children: [
                                '/guide/',
                                '/guide/注册流程'
                            ]
                        }
                    ],
                    "/config/": [
                        {
                            text: '配置',
                            children: [
                                '/config/',
                            ]
                        }
                    ],
                    "/data/": [
                        {
                            text: '资料',
                            children: [
                                '/data/',
                            ]
                        }
                    ]
                },
                navbar: [
                    {
                        text: '指南',
                        link: '/guide/',
                    },
                    {
                        text: '资料',
                        link: '/data/',
                    },
                    {
                        text: '配置',
                        link: '/config/',
                    },
                    {
                        text: '更新日志',
                        link: 'https://github.com/kuweiguge/WVP-GB28181-Learning/releases',
                    }
                ]
            }
        },
        repo: "https://github.com/kuweiguge/WVP-GB28181-Learning"
    })
})