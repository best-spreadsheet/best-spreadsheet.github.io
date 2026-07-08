import { defineConfig } from 'vitepress'

const hostname = 'https://best-spreadsheet.github.io'

export default defineConfig({
  title: 'Best Spreadsheet',
  description: 'Compare prices and find deals across 10+ shopping platforms with weekly updated spreadsheets',
  lang: 'en-US',

  head: [
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-SWE7QE0650' }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-SWE7QE0650');
    `],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Best Spreadsheet - Compare Prices Across Platforms' }],
    ['meta', { property: 'og:description', content: 'Compare prices and find deals across 10+ shopping platforms with weekly updated spreadsheets' }],
    ['meta', { property: 'og:image', content: '/favicon.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Best Spreadsheet - Compare Prices Across Platforms' }],
    ['meta', { name: 'twitter:description', content: 'Compare prices and find deals across 10+ shopping platforms with weekly updated spreadsheets' }],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Best Spreadsheet',
      url: hostname,
      description: 'Compare prices and find deals across 10+ shopping platforms with weekly updated spreadsheets',
    })],
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],

    footer: {
      message: 'Best Spreadsheet - All Platforms. One Dashboard.',
      copyright: 'Copyright © ' + new Date().getFullYear(),
    },
  },

  sitemap: {
    hostname,
  },
})
