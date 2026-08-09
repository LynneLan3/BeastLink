# LaunchWire – BeastLink SEO 实验

一个极简的静态微型站，目标是验证：当游戏在 Steam / 社媒端热度较早出现、但 Google 搜索需求尚未完全形成时，提前建立精确游戏内容，能否在热度上升或 Early Access 前后提前获得收录、impressions 和长尾词。

当前结构：**1 个 Hub + 3 个高置信 SEO 子页面**。

技术方案：纯静态 HTML + CSS，无框架、无数据库、无后台、无 API。可以直接部署到 Vercel。

与前两个实验站的区别：本站主要测试 **Early SEO / 需求尚未充分形成时的提前布局**，而不是堆大量低质量长尾页。

## 目录结构

```
index.html                              首页（直接服务 BeastLink）
beastlink/
  index.html                            Hub 总览页
  release-date/index.html               Early Access / 发布日期 & 平台
  system-requirements/index.html        PC 配置要求
  gameplay/index.html                   玩法 / Beasts / Multiplayer
styles.css                               全站共用样式
favicon.svg
robots.txt
sitemap.xml
vercel.json                              强制 URL 带斜杠(保证 canonical 一致)
```

正式站点：`https://hot-words-beastlink.vercel.app/`

GitHub：`https://github.com/LynneLan3/BeastLink`

---

## 1. 如何本地运行

不需要安装任何依赖。推荐本地起一个静态服务器：

```bash
cd "/Users/lanling/Code/hot_words_websites/BeastLink"
npx serve .
```

终端会给出一个本地地址，通常是：

- 首页：http://localhost:3000/
- Hub：http://localhost:3000/beastlink/
- Release Date：http://localhost:3000/beastlink/release-date/
- System Requirements：http://localhost:3000/beastlink/system-requirements/
- Gameplay：http://localhost:3000/beastlink/gameplay/

---

## 2. 如何部署到 Vercel

**Vercel CLI**

```bash
npm install -g vercel   # 只需安装一次
cd "/Users/lanling/Code/hot_words_websites/BeastLink"
vercel                  # 按提示登录 + 确认项目，选默认选项即可
vercel --prod           # 正式发布到生产环境
```

**或通过 GitHub 连接 Vercel**

1. 推送到 `LynneLan3/BeastLink`
2. 打开 vercel.com → New Project → 选择该仓库 → Deploy（纯静态，无需改构建配置）

---

## 3. 部署后：正式 URL 在哪里替换

> **状态：已完成。** 正式域名是：`https://hot-words-beastlink.vercel.app`

若之后换成自定义域名，在以下文件替换域名（保留路径）：

| 文件 | 需要替换的内容 |
|---|---|
| `index.html` | `<link rel="canonical">` 和 `og:url` |
| `beastlink/**/index.html` | `<link rel="canonical">`、`og:url`、JSON-LD 里的 URL |
| `robots.txt` | `Sitemap:` 那一行 |
| `sitemap.xml` | 全部 `<loc>` |

```bash
grep -rl "旧域名" . --include="*.html" --include="*.xml" --include="*.txt" \
  | xargs sed -i '' "s/旧域名/新域名/g"
```

---

## 4. canonical / sitemap 是否需要替换域名

**需要**（换自定义域名时）。当前 canonical / sitemap / robots 已与正式 Vercel 域名一致。

---

## 5. 如何添加 Google Search Console

1. 打开 [Google Search Console](https://search.google.com/search-console)
2. 选择「网址前缀」类型
3. 输入正式 URL
4. 推荐 **HTML 标签验证**：把验证 meta 加到 `index.html` 的 `<head>`，重新部署后点「验证」

---

## 6. 如何进行 URL Inspection / Request Indexing

对以下 URL 分别做网址检查并请求编入索引：

- `/`
- `/beastlink/`
- `/beastlink/release-date/`
- `/beastlink/system-requirements/`
- `/beastlink/gameplay/`

---

## 7. sitemap 提交路径

Search Console → Sitemaps → 输入：

```
sitemap.xml
```

---

## 8. 上线后应该观察哪些数据

Search Console → Performance，重点看：

- Impressions / Clicks / Average Position
- Queries（关注品牌词与 release date / gameplay / system requirements / early access 相关词）
- Country

数据通常需要 **3–14 天** 才会开始稳定出现。本实验更关注：热度上升或 EA 前后，是否能提前看到收录与 impressions。

---

## 9. SEO Experiment Log（人工记录）

```
### SEO Experiment Log

Date:
Indexed:
Impressions:
Clicks:
Average Position:

Top Queries:
1.
2.
3.
4.
5.

Decision:
- [ ] KEEP
- [ ] EXPAND
- [ ] STOP
```

---

## 验收自查清单

- [x] 本地可以正常启动
- [x] 首页 `/` 正常
- [x] Hub `/beastlink/` 正常
- [x] 3 个子页面正常：release-date / system-requirements / gameplay
- [x] Hub 与子页面内部链接正确
- [x] 每页独立 `<title>` / `meta description` / self-canonical
- [x] `robots.txt` / `sitemap.xml` 可访问
- [x] 无虚构的游戏事实（以官方站 / Steam / 官方新闻稿为准）
- [x] 未引入框架 / CMS / 数据库
- [x] 未修改 Agefield High / Mortal Shell II 实验站
