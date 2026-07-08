# 横幅滚动动画 - 需求分析与实现方案

---

## 一、需求分析

### 1.1 功能描述

在页面顶部固定显示一个**无限滚动的横幅动画**，展示用户下单信息（如"XX国家用户已下单"），营造热销氛围，增强用户信任感。

### 1.2 视觉效果

| 属性 | 值 | 说明 |
|------|-----|------|
| 位置 | 页面顶部固定 | `position: fixed; top: 0` |
| 背景色 | 红色渐变 | `linear-gradient(90deg, #e53935, #c62828, #e53935)` |
| 文字颜色 | 白色 | `color: white` |
| 滚动方向 | 从右向左 | `translateX(0) → translateX(-50%)` |
| 滚动速度 | 90秒一圈 | `animation: 90s linear infinite` |
| 悬停效果 | 暂停滚动 | `animation-play-state: paused` |
| 边缘渐变 | 左右两侧淡出 | 伪元素实现遮罩 |
| 层级 | 最高层 | `z-index: 100` |

### 1.3 交互行为

- 鼠标悬停时暂停滚动
- 鼠标离开后继续滚动
- 不影响页面其他元素的交互

---

## 二、技术实现

### 2.1 文件结构

```
.vitepress/
├── theme/
│   ├── index.js      # Vue 组件逻辑（数据 + 渲染）
│   └── custom.css    # 样式定义（动画 + 布局）
```

### 2.2 数据层（index.js）

```javascript
// 滚动数据源 - 可自定义内容
const marqueeData = [
  { text: 'European users have placed their orders' },
  { text: 'American users have placed their orders' },
  { text: 'British users have placed their orders' },
  // ... 更多条目
]

// 生成滚动内容（复制两份实现无缝循环）
function createMarqueeContent() {
  const items = []
  marqueeData.forEach((item, index) => {
    items.push(h('div', { class: 'marquee-item' }, [
      h('span', { class: 'text' }, item.text)
    ]))
    items.push(h('span', { class: 'marquee-separator' }, ''))
  })
  return items
}

// 在 Layout 的 layout-top 插槽中渲染
Layout() {
  const fullMarqueeContent = [
    ...createMarqueeContent(),
    ...createMarqueeContent()  // 复制一份实现无缝滚动
  ]
  return h(DefaultTheme.Layout, null, {
    'layout-top': () => h('div', { class: 'marquee-container' }, [
      h('div', { class: 'marquee-track' }, fullMarqueeContent)
    ])
  })
}
```

### 2.3 样式层（custom.css）

```css
/* 容器 - 固定顶部 */
.marquee-container {
  width: 100%;
  overflow: hidden;
  background: linear-gradient(90deg, #e53935 0%, #c62828 50%, #e53935 100%);
  padding: 0.54rem 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}

/* 左右边缘渐变遮罩 */
.marquee-container::before {
  content: '';
  position: absolute;
  top: 0; bottom: 0;
  left: 0;
  width: 100px;
  background: linear-gradient(90deg, #e53935 0%, transparent 100%);
  z-index: 2;
  pointer-events: none;
}

.marquee-container::after {
  content: '';
  position: absolute;
  top: 0; bottom: 0;
  right: 0;
  width: 100px;
  background: linear-gradient(270deg, #e53935 0%, transparent 100%);
  z-index: 2;
  pointer-events: none;
}

/* 滚动轨道 */
.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee-scroll 90s linear infinite;
  will-change: transform;
}

.marquee-track:hover {
  animation-play-state: paused;
}

/* 滚动动画 */
@keyframes marquee-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* 单个条目 */
.marquee-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 2rem;
  white-space: nowrap;
  color: white;
  font-weight: 500;
  font-size: 1rem;
}

/* 分隔符 */
.marquee-separator {
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.2rem;
  padding: 0 0.5rem;
}
```

### 2.4 布局适配

由于横幅固定占用顶部空间，需要调整导航栏和内容区的偏移：

```css
/* 导航栏下移 */
.VPNav {
  top: 3.36rem !important;
  z-index: 200 !important;
}

/* 侧边栏下移 */
.VPSidebar {
  top: 3.36rem !important;
  z-index: 200 !important;
}

/* 内容区顶部留白 */
.VPContent {
  padding-top: 24rem;
}

@media (max-width: 768px) {
  .VPContent {
    padding-top: 9.6rem;
  }
}
```

---

## 三、复刻步骤

### 3.1 复制文件

将以下文件复制到新项目：

```
.vitepress/theme/index.js   → 包含 marqueeData 和 Layout 渲染逻辑
.vitepress/theme/custom.css → 包含 .marquee-* 相关样式
```

### 3.2 自定义内容

**修改滚动文案**（index.js 中的 `marqueeData`）：

```javascript
const marqueeData = [
  { text: '【你的文案1】' },
  { text: '【你的文案2】' },
  { text: '【你的文案3】' },
  // 建议 15-25 条，确保滚动流畅
]
```

**修改主题色**（custom.css 中的颜色值）：

```css
/* 将 #e53935 和 #c62828 替换为你的品牌色 */
background: linear-gradient(90deg, 【主色】 0%, 【深色】 50%, 【主色】 100%);
```

**修改滚动速度**：

```css
/* 90s 改为你想要的秒数，数值越大越慢 */
animation: marquee-scroll 【秒数】s linear infinite;
```

### 3.3 注意事项

1. **数据量**：`marqueeData` 建议 15-25 条，太少会导致滚动不流畅
2. **无缝循环**：必须复制两份内容（`[...items, ...items]`），否则会出现断层
3. **z-index 层级**：横幅 `z-index: 100`，导航栏 `z-index: 200`，确保导航在横幅上方
4. **响应式**：移动端 `padding-top` 需要单独调整（见 2.4 节）
5. **性能优化**：使用 `will-change: transform` 启用 GPU 加速

---

## 四、扩展功能（可选）

### 4.1 添加国旗图标

```javascript
const marqueeData = [
  { text: 'European users have placed their orders', flag: '🇺' },
  { text: 'American users have placed their orders', flag: '🇺🇸' },
]

// 渲染时添加国旗
h('span', { class: 'flag' }, item.flag)
```

```css
.marquee-item .flag {
  font-size: 1.2rem;
}
```

### 4.2 添加实时时间

```javascript
function getCurrentTime() {
  return new Date().toLocaleTimeString('en-US', { hour12: false })
}

// 在文案中加入时间
{ text: `Users placed orders at ${getCurrentTime()}` }
```

### 4.3 多行滚动

```css
/* 改为纵向滚动 */
.marquee-track {
  flex-direction: column;
  animation: marquee-scroll-vertical 60s linear infinite;
}

@keyframes marquee-scroll-vertical {
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
}
```

---

## 五、完整代码清单

### index.js（横幅部分）

```javascript
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './custom.css'

const marqueeData = [
  { text: '【文案1】' },
  { text: '【文案2】' },
  { text: '【文案3】' },
  // 添加更多...
]

function createMarqueeContent() {
  const items = []
  marqueeData.forEach((item, index) => {
    items.push(
      h('div', { class: 'marquee-item', key: `item-${index}` }, [
        h('span', { class: 'text' }, item.text)
      ])
    )
    items.push(
      h('span', { class: 'marquee-separator', key: `sep-${index}` }, '✦')
    )
  })
  return items
}

export default {
  ...DefaultTheme,
  Layout() {
    const fullMarqueeContent = [...createMarqueeContent(), ...createMarqueeContent()]
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h('div', { class: 'marquee-container' }, [
        h('div', { class: 'marquee-track' }, fullMarqueeContent)
      ])
    })
  },
}
```

### custom.css（横幅部分）

```css
.marquee-container {
  width: 100%;
  overflow: hidden;
  background: linear-gradient(90deg, #e53935 0%, #c62828 50%, #e53935 100%);
  padding: 0.54rem 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}

.VPNav { top: 3.36rem !important; z-index: 200 !important; }
.VPSidebar { top: 3.36rem !important; z-index: 200 !important; }
.VPContent { padding-top: 24rem; }

@media (max-width: 768px) {
  .VPContent { padding-top: 9.6rem; }
}

.marquee-container::before,
.marquee-container::after {
  content: '';
  position: absolute;
  top: 0; bottom: 0;
  width: 100px;
  z-index: 2;
  pointer-events: none;
}
.marquee-container::before {
  left: 0;
  background: linear-gradient(90deg, #e53935 0%, transparent 100%);
}
.marquee-container::after {
  right: 0;
  background: linear-gradient(270deg, #e53935 0%, transparent 100%);
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee-scroll 90s linear infinite;
  will-change: transform;
}
.marquee-track:hover { animation-play-state: paused; }

@keyframes marquee-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.marquee-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 2rem;
  white-space: nowrap;
  color: white;
  font-weight: 500;
  font-size: 1rem;
}

.marquee-item .text {
  font-size: 0.95rem;
  letter-spacing: 0.02em;
}

.marquee-separator {
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.2rem;
  padding: 0 0.5rem;
}
```


