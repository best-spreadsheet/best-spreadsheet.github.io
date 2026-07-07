# 静态资源目录

请将网站图标放置在此目录：

- `favicon.png` - 网站图标（建议尺寸：32x32 或 64x64）

## 引用方式

在 Markdown 或配置文件中引用时，使用绝对路径：

```markdown
![图标](/favicon.png)
```

或在 config.mjs 中：

```javascript
['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }]
```
