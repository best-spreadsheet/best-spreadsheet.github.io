---
layout: home
hero:
  name: "Best Spreadsheet"
  text: "快速创建产品入口页面"
  tagline: "基于 VitePress + GitHub Pages 的轻量级解决方案"
  actions:
    - theme: brand
      text: 选择平台
      link: /platforms
    - theme: alt
      text: 查看文档
      link: https://vitepress.dev
---

<div class="features">
  <div class="feature">
    <h2>🚀 快速部署</h2>
    <p>基于 GitHub Actions 自动构建部署，推送即上线</p>
  </div>
  <div class="feature">
    <h2>📱 响应式设计</h2>
    <p>完美适配桌面和移动设备，用户体验优秀</p>
  </div>
  <div class="feature">
    <h2>🔍 SEO 优化</h2>
    <p>内置 Open Graph、JSON-LD 结构化数据、Sitemap</p>
  </div>
  <div class="feature">
    <h2>📊 数据分析</h2>
    <p>集成 GA4 追踪代码，轻松监控访问数据</p>
  </div>
</div>

<style>
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature {
  padding: 1.5rem;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  transition: transform 0.2s;
}

.feature:hover {
  transform: translateY(-4px);
}

.feature h2 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--vp-c-brand-1);
}

.feature p {
  color: var(--vp-c-text-2);
  line-height: 1.6;
}
</style>
