下面这个方案是按照**欧美用户（美国、德国、法国、英国、意大利、西班牙、波兰等）**的浏览习惯设计的，参考了 **Reddit（r/SEO、r/ecommerce、r/webdesign）**、SaaS Landing Page、Affiliate Hub、Price Comparison 网站的布局。

重点目标不是"漂亮"，而是：

* **提高信任度（Trust）**
* **提高点击平台按钮CTR**
* **提高页面停留时间**
* **提升SEO（增加内容长度）**
* **方便后续扩展到20+平台**

下面这份 Prompt 可以直接发给 AI（Claude、Cursor、GPT Codex 等）进行开发。

---

# AI 开发 Prompt

---

You are an expert UX designer, VitePress developer, SEO specialist, and CRO (Conversion Rate Optimization) consultant.

Redesign my VitePress homepage into a modern affiliate comparison hub for shopping agents.

Target users:

* United States
* Germany
* France
* Italy
* Spain
* Poland
* Netherlands
* United Kingdom
* Sweden
* Other European countries

Default language: English.

The design should look similar to a premium SaaS dashboard instead of a blog.

Primary color:

```
#e53935
```

The page must be extremely fast, mobile-friendly, SEO-friendly, and easy to maintain.

Do NOT use heavy JavaScript libraries.

Avoid build errors.

Prefer CSS animation over JS.

---

# Overall Layout

Build the homepage in the following order:

```
Top Announcement Bar

↓

Hero Section

↓

Platform Quick Buttons

↓

Platform Cards

↓

Trending Categories

↓

Why Choose Us

↓

Latest Updates

↓

Statistics

↓

User Reviews

↓

FAQ

↓

Footer
```

Every section should have enough spacing.

Use rounded cards.

Soft shadow.

Modern gradient backgrounds.

Hover animation.

Responsive grid.

---

# 1 Top Sticky Announcement Bar

Create a fixed announcement bar.

Height:

40px

Dark background.

White text.

Infinite scrolling animation.

Speed:

slow

Example messages:

🇩🇪 Germany • Michael placed an order

🇫🇷 France • Alex found Nike Shoes

🇮🇹 Italy • Luca added Jordan 4

🇺🇸 USA • Emily viewed Essentials Hoodie

🇪🇸 Spain • Carlos saved a spreadsheet

🇵🇱 Poland • Adam purchased a jersey

🇳🇱 Netherlands • Emma opened Kakobuy

🇬🇧 United Kingdom • Oliver found the best deal

These are only placeholder texts.

Later I will replace them with dynamic data.

Animation must never affect page performance.

---

# 2 Hero Section

Large modern hero.

Left:

Headline:

All Platforms.
One Dashboard.

Subheadline:

Compare shopping agents,
discover the best spreadsheets,
and save money across every platform.

Description:

Weekly updated spreadsheets

Price comparison

Best sellers

Trusted by thousands of buyers

CTA Buttons:

Explore Platforms

Weekly Best Deals

Secondary CTA:

Join Discord

Right side:

Modern dashboard illustration

Floating cards

Shopping analytics

Charts

Platform icons

Subtle animation.

---

# 3 Hero Trust Badges

Directly below Hero.

Display six badges.

✓ Updated Daily

✓ Free Access

✓ QC Photos

✓ Multi-platform

✓ Fast Loading

✓ No Registration

---

# 4 Platform Quick Access

Horizontal button list.

Each button contains

Logo

Platform Name

Hover animation

Platforms:

Mulebuy

Superbuy

USFans

GTBuy

Litbuy

Kakobuy

Weidian

Taobao

1688

CSS only.

No JS.

---

# 5 Platform Grid

Responsive card grid.

Desktop:

3 columns

Tablet:

2 columns

Mobile:

1 column

Each card includes

Platform Logo

Platform Name

Short description

Supported Categories

Visit Platform button

Placeholder URL

Example:

Mulebuy

Daily updated spreadsheet

Shoes

Clothing

Accessories

Visit →

Later I will replace URLs manually.

---

# 6 Trending Categories

Modern cards.

Examples:

🔥 Sneakers

👕

Clothing

🧥 Jackets

⌚ Accessories

⚽ Jerseys

🎒 Bags

Each category displays

image

product count

weekly updates

Explore button

---

# 7 Why Choose Us

Six feature cards.

Daily Updates

Real QC Photos

Multiple Platforms

Fast Search

Price Comparison

Trusted Community

Minimal icon.

Short description.

---

# 8 Latest Spreadsheet Updates

Timeline layout.

Example:

Today

Added 45 Nike products

Updated Mulebuy spreadsheet

Yesterday

Added Adidas category

Updated Superbuy spreadsheet

2 days ago

Added Jerseys

Updated GTBuy spreadsheet

Placeholder data only.

---

# 9 Statistics Section

Large counters.

58,000+

Monthly Users

520,000+

Spreadsheet Visits

12,000+

Products

18+

Supported Platforms

160+

Countries

Updated Every Day

Counters should animate on scroll.

Lightweight implementation.

---

# 10 User Reviews

Three testimonial cards.

★★★★★

Found everything in minutes.

Germany

★★★★★

Best spreadsheet website.

France

★★★★★

Much better than searching Reddit.

USA

Cards should look premium.

---

# 11 FAQ

Accordion style.

Questions:

What is a spreadsheet?

Which shopping agent is best?

How often is it updated?

Is it free?

Which countries are supported?

How do I compare prices?

SEO friendly.

---

# 12 Footer

Include

Navigation

Platforms

Categories

Resources

Discord

Privacy Policy

Terms

Copyright

Social icons

---

# Visual Style

Modern SaaS

Linear

Stripe

Framer

Notion

Apple

Large whitespace

Rounded corners

Soft shadows

Light gradients

Hover lift

Glassmorphism only where appropriate

No heavy animations

---

# SEO

Maintain all existing:

GA4

JSON-LD

OpenGraph

Twitter Card

Sitemap

Add semantic HTML.

Use H2 for every section.

Add internal anchor links.

Use descriptive alt text.

Lazy load images.

---

# Performance

PageSpeed >95

Avoid layout shift.

CSS animation only.

No unnecessary JS.

Optimize for Lighthouse.

---

# Code Quality

Use reusable Vue/VitePress components.

Separate sections into components.

No duplicated code.

No build warnings.

No TypeScript errors.

Easy to edit.

Platform URLs should be stored in one configuration file so I can replace them later.

---

## 我额外建议增加的 5 个模块（非常推荐）

相比目前的框架，我建议再增加以下几个模块，转化率会更高：

### ① Popular This Week（放在平台卡片下面）

```
🔥 Popular This Week

Nike Shoes

Jordan 4

Essentials Hoodie

Arc'teryx

Carhartt

Stüssy
```

作用：

* 增加页面点击率
* 提升内部链接数量
* 有利于 SEO

---

### ② Recently Updated（非常推荐）

```
Updated 3 minutes ago

✔ Kakobuy Spreadsheet

Updated 15 minutes ago

✔ Mulebuy Spreadsheet

Updated Today

✔ Superbuy Spreadsheet
```

用户会感觉网站一直有人维护。

---

### ③ 全球访问热力（推荐）

```
Users from

🇺🇸 USA

🇩🇪 Germany

🇫🇷 France

🇮🇹 Italy

🇪🇸 Spain

🇵🇱 Poland

visited today
```

比"XX下单了"更自然，也更符合隐私预期。

---

### ④ Compare Platforms（推荐）

做一个对比表：

| Platform | Shipping | Spreadsheet | QC Photos | Best For      |
| -------- | -------- | ----------- | --------- | ------------- |
| Mulebuy  | ✅        | ✅           | ✅         | Beginners     |
| Superbuy | ✅        | ✅           | ✅         | Fast Shipping |
| GTBuy    | ✅        | ✅           | ✅         | Budget        |
| USFans   | ✅        | ✅           | ✅         | Premium       |

这是非常有利于 SEO 的内容，也方便用户做决策。

---

### ⑤ Bottom CTA（页面最后）

在 FAQ 后增加一个强 CTA：

```
Ready to Find the Best Deals?

Compare all shopping platforms in one place.

[ Explore Platforms ]

No registration required.
Updated every day.
Free forever.
```

这是许多高转化 SaaS 和导航站的经典收尾设计。

---

**整体布局建议：**

```
Sticky Announcement
        ↓
Hero
        ↓
Trust Badges
        ↓
Quick Platform Buttons
        ↓
Platform Grid
        ↓
Popular This Week
        ↓
Trending Categories
        ↓
Platform Comparison Table
        ↓
Why Choose Us
        ↓
Latest Updates
        ↓
Statistics
        ↓
Testimonials
        ↓
FAQ
        ↓
Final CTA
        ↓
Footer
```

这套结构兼顾了**SEO（丰富可索引内容）**、**用户体验（信息层级清晰）**和**联盟站转化（平台入口突出）**，后续只需维护平台链接、分类和统计数据即可持续扩展。
