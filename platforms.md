---
title: 平台选择
description: 选择您想要访问的平台
---

# 选择平台

<div class="platform-grid">
  <a href="https://example.com/platform1" class="platform-card" target="_blank">
    <div class="platform-icon">🛒</div>
    <h3>平台 1</h3>
    <p>平台 1 的简短描述</p>
    <button class="platform-btn">立即访问</button>
  </a>

  <a href="https://example.com/platform2" class="platform-card" target="_blank">
    <div class="platform-icon">📦</div>
    <h3>平台 2</h3>
    <p>平台 2 的简短描述</p>
    <button class="platform-btn">立即访问</button>
  </a>

  <a href="https://example.com/platform3" class="platform-card" target="_blank">
    <div class="platform-icon">🎁</div>
    <h3>平台 3</h3>
    <p>平台 3 的简短描述</p>
    <button class="platform-btn">立即访问</button>
  </a>
</div>

<style>
.platform-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.platform-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  text-decoration: none;
  color: inherit;
  transition: all 0.3s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.platform-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  background: var(--vp-c-bg);
}

.platform-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.platform-card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--vp-c-brand-1);
}

.platform-card p {
  color: var(--vp-c-text-2);
  margin-bottom: 1.5rem;
  text-align: center;
  line-height: 1.6;
}

.platform-btn {
  padding: 0.75rem 2rem;
  border-radius: 6px;
  background: var(--vp-c-brand-1);
  color: white;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.platform-card:hover .platform-btn {
  background: var(--vp-c-brand-2);
}
</style>
