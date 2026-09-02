# 李嘉其 Jiaqi Li — AI Product Manager Portfolio

个人作品集网站源码，纯静态 HTML/CSS/JS，无需构建，可直接部署到任意静态托管平台。

## 文件结构

```
portfolio/
├── index.html              # 主页面
├── styles/
│   └── main.css            # 全部样式
├── js/
│   └── main.js             # 交互脚本
├── assets/
│   ├── photo.jpg           # Hero 个人照片
│   ├── jobfit.png          # JobFit AI 产品截图
│   ├── dressing-1.png      # 衣渐佳 - 首页截图
│   ├── dressing-2.png      # 衣渐佳 - 搭配结果页
│   ├── dressing-3.png      # 衣渐佳 - 风格档案页
│   └── resume.pdf          # 简历 PDF
├── package.json
└── README.md
```

## 本地预览

直接用浏览器打开 `index.html` 即可，或用本地服务器：

```bash
# Python
python3 -m http.server 8080

# Node
npx serve .
```

然后访问 http://localhost:8080

## 部署到 GitHub Pages

### 方法一：网页端操作（最简单）

1. 登录 GitHub，点击右上角 **+** → **New repository**
2. 仓库名填 `portfolio`（或任意名字），设为 **Public**，点击 Create
3. 在仓库页面点击 **Add file** → **Upload files**
4. 把整个 portfolio 文件夹里的所有文件（保持目录结构）拖进去
5. 底部点击 **Commit changes**
6. 进入仓库 **Settings** → 左侧 **Pages**
7. Source 选 **Deploy from a branch**，Branch 选 `main` / `(root)`，Save
8. 等 1-2 分钟，页面会显示 `Your site is live at https://你的用户名.github.io/portfolio/`

### 方法二：命令行操作

```bash
# 1. 初始化 Git
cd portfolio
git init
git add .
git commit -m "Initial commit: personal portfolio"

# 2. 在 GitHub 创建仓库后，关联并推送
git branch -M main
git remote add origin https://github.com/你的用户名/portfolio.git
git push -u origin main

# 3. 开启 GitHub Pages（Settings → Pages）
```

## 其他部署选项

| 平台 | 费用 | 国内访问 | 备注 |
|------|------|---------|------|
| GitHub Pages | 免费 | 较慢/偶尔不稳定 | 需 GitHub 账号 |
| Vercel | 免费 | 中等 | 支持自定义域名，国内需优化 |
| Netlify | 免费 | 中等 | 拖拽部署，最简单 |
| 腾讯云 CloudBase | 免费额度 | 快 | 国内节点，无需备案 |
| 阿里云 OSS + CDN | ~¥2-5/月 | 快 | 需 ICP 备案 |

## 修改内容

- **文字内容**：编辑 `index.html`
- **样式/颜色/布局**：编辑 `styles/main.css`
- **交互逻辑**：编辑 `js/main.js`
- **替换图片**：把新图片放入 `assets/` 并更新 `index.html` 中的引用路径

## 技术说明

- 纯静态，无后端依赖
- 字体通过 Google Fonts 镜像加载（miaoda.feishu.cn）
- 响应式适配：Desktop / Tablet / Mobile 三档
- 所有资源均为相对路径，迁移到任意域名无需修改
