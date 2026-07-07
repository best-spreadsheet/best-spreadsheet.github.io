import { defineConfig } from 'vitepress'

const hostname = 'https://best-spreadsheet.github.io'

export default defineConfig({
  title: 'Best Spreadsheet',
  description: 'Best Spreadsheet - 产品入口选择页面',
  lang: 'zh-CN',

  head: [
    // GA4 追踪代码 - 请替换为你的 GA4 ID
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-SWE7QE0650' }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-SWE7QE0650');
    `],
    // 网站图标
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    // SEO: Open Graph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Best Spreadsheet' }],
    ['meta', { property: 'og:description', content: 'Best Spreadsheet - 产品入口选择页面' }],
    ['meta', { property: 'og:image', content: '/favicon.png' }],
    // SEO: Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Best Spreadsheet' }],
    ['meta', { name: 'twitter:description', content: 'Best Spreadsheet - 产品入口选择页面' }],
    // SEO: JSON-LD 结构化数据
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Best Spreadsheet',
      url: hostname,
      description: 'Best Spreadsheet - 产品入口选择页面',
    })],
  ],

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '平台选择', link: '/platforms' },
    ],

    footer: {
      message: '广告落地页模板',
      copyright: 'Copyright © ' + new Date().getFullYear(),
    },
  },

  sitemap: {
    hostname,
  },
})
