import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "熊猫脚本",
  base:"/xmweb/",
  description: "熊猫脚本",
  themeConfig: {
    logo: '/public/xm.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页',
        items:[
        // { text: '首页', link: '/markdown-examples' },
        // { text: '首页2', link: '/markdown-examples' }
      ] 
      },

      ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: '咨询', link: '/markdown-examples' },
          { text: 'API接口', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      // { icon: 'youtube', link: '' },
      // { icon: 'telegram', link: '' },
      // { icon: 'whatsapp', link: '' },
      // { icon: 'instagram', link: '' },
    ],
    footer:{
      copyright: "Copyright@2010-2025"
    }
  }
})
