# 广告落地页模板 - 使用说明

## 项目概述

这是一个**空白广告落地页模板**，用于快速创建 GitHub Pages 子域名站点。
- 用途：产品入口选择页面（广告落地页）
- 技术栈：VitePress + GitHub Actions
- 部署方式：GitHub Pages（用户站点）

---

## 快速开始

### 1. 复制模板到新目录

```powershell
Copy-Item -Path "D:\git-kakobuy\landing-page-template" -Destination "D:\git-新项目名" -Recurse
```

### 2. 需要修改的内容

| 文件 | 修改项 | 说明 |
|------|--------|------|
| `package.json` | `name` | 改为新项目名 |
| `.vitepress/config.mjs` | `title` | 站点标题 |
| `.vitepress/config.mjs` | `description` | 站点描述 |
| `.vitepress/config.mjs` | `G-XXXXXXXXXX` | GA4 追踪 ID |
| `.vitepress/config.mjs` | `hostname` | GitHub 用户名 |
| `index.md` | 所有内容 | 首页文案和图片 |
| `platforms.md` | 平台信息 | 产品入口链接 |
| `public/` | favicon.png | 网站图标 |

### 3. 初始化 Git 仓库

```bash
cd /d/git-新项目名
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/【用户名】/【用户名】.github.io.git
git branch -M main
git push -u origin main
```

### 4. 配置 GitHub Pages

1. 创建 GitHub 仓库：`【用户名】.github.io`
2. Settings → Pages → Source: GitHub Actions
3. 等待构建完成（约 2 分钟）

---

## 文件结构

```
landing-page-template/
── .github/workflows/
│   ── deploy.yml          # GitHub Actions 部署配置
├── .vitepress/
│   ── config.mjs          # VitePress 核心配置
├── public/
│   └── (放置 favicon.png 等静态资源)
├── index.md                # 首页
├── platforms.md            # 平台选择页
├── package.json            # 依赖配置
└── .gitignore              # Git 忽略文件
```

---

## 自定义样式

在 `.vitepress/theme/` 目录下创建 `custom.css`：

```css
:root {
  --vp-c-brand-1: #e53935;  /* 主题色 */
  --vp-c-brand-2: #c62828;  /* 深色 */
}
```

然后在 `config.mjs` 中引入：

```javascript
export default defineConfig({
  // ...
  themeConfig: {
    // ...
  },
  // 添加自定义 CSS
  head: [
    ['link', { rel: 'stylesheet', href: '/custom.css' }],
  ],
})
```

---

## 注意事项

1. **不要修改原项目** - 此模板独立于 `git-kakobuy` 项目
2. **GA4 ID 必须更新** - 每个站点使用独立的追踪 ID
3. **图片资源** - 放在 `public/` 目录下，引用时用 `/图片名`
4. **SEO 优化** - 修改 `config.mjs` 中的 `title` 和 `description`

---

## 示例：创建 Oopbuy 落地页

```powershell
# 1. 复制模板
Copy-Item -Path "D:\git-kakobuy\landing-page-template" -Destination "D:\git-oopbuy-landing" -Recurse

# 2. 进入新目录
cd D:\git-oopbuy-landing

# 3. 修改配置（使用文本编辑器或 AI 助手）
# - 更新 config.mjs 中的标题、描述、GA4 ID
# - 更新 index.md 和 platforms.md 的内容

# 4. 初始化并推送
git init
git add .
git commit -m "Initial commit: Oopbuy Landing Page"
git remote add origin https://github.com/bestoopbuy/bestoopbuy.github.io.git
git branch -M main
git push -u origin main
```

---

## 技术支持

- VitePress 文档：https://vitepress.dev
- GitHub Pages 文档：https://docs.github.com/pages
- GA4 配置：https://analytics.google.com
