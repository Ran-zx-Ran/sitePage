# 国际化键名映射说明

本文档记录本次新增到 `i18n/locales/zh.json` 的主要文案键名、所属模块、组件路径、业务引用文件与使用场景，供后续同步 `en.json`、联调和回归核对使用。

## 头部与页脚

| 键名 | 页面模块 | 组件路径 | 业务引用文件 | 使用场景 |
| --- | --- | --- | --- | --- |
| `layout.header.aria.mainNav` | 站点头部 | `app/components/SiteHeader.vue` | `app/layouts/default.vue` | 顶部导航 `aria-label` |
| `layout.header.nav.home` | 站点头部 | `app/components/SiteHeader.vue` | `app/layouts/default.vue` | 首页导航文案 |
| `layout.header.nav.products` | 站点头部 | `app/components/SiteHeader.vue` | `app/layouts/default.vue` | 产品导航主入口文案 |
| `layout.header.nav.developmentHistory` | 站点头部 | `app/components/SiteHeader.vue` | `app/layouts/default.vue` | 发展历程导航文案 |
| `layout.header.nav.industryApplication` | 站点头部 | `app/components/SiteHeader.vue` | `app/layouts/default.vue` | 行业应用导航文案 |
| `layout.header.nav.contactUs` | 站点头部 | `app/components/SiteHeader.vue` | `app/layouts/default.vue` | 联系我们导航文案 |
| `layout.header.productMenu.shaft` | 站点头部 | `app/components/SiteHeader.vue` | `app/layouts/default.vue` | 产品下拉菜单中的轴类产品项 |
| `layout.header.productMenu.flange` | 站点头部 | `app/components/SiteHeader.vue` | `app/layouts/default.vue` | 产品下拉菜单中的法兰类产品项 |
| `layout.header.productMenu.valve` | 站点头部 | `app/components/SiteHeader.vue` | `app/layouts/default.vue` | 产品下拉菜单中的阀组类产品项 |
| `layout.header.productMenu.sheetMetal` | 站点头部 | `app/components/SiteHeader.vue` | `app/layouts/default.vue` | 产品下拉菜单中的喷漆钣金零件项 |
| `layout.header.productMenu.aiAutomation` | 站点头部 | `app/components/SiteHeader.vue` | `app/layouts/default.vue` | 产品下拉菜单中的 AI 自动化产品项 |
| `layout.header.languageIconAlt` | 站点头部 | `app/components/SiteHeader.vue` | `app/layouts/default.vue` | 语言图标替代文本 |
| `layout.footer.contact.email` | 站点页脚 | `app/components/SiteFooter.vue` | `app/layouts/default.vue` | 页脚邮箱信息 |
| `layout.footer.contact.phone` | 站点页脚 | `app/components/SiteFooter.vue` | `app/layouts/default.vue` | 页脚电话信息 |
| `layout.footer.contact.service` | 站点页脚 | `app/components/SiteFooter.vue` | `app/layouts/default.vue` | 页脚服务承诺文案 |
| `layout.footer.aria.links` | 站点页脚 | `app/components/SiteFooter.vue` | `app/layouts/default.vue` | 页脚链接 `aria-label` |
| `layout.footer.links.companyInfo` | 站点页脚 | `app/components/SiteFooter.vue` | `app/layouts/default.vue` | 页脚公司信息入口文案 |

## 首页

| 键名 | 页面模块 | 组件路径 | 业务引用文件 | 使用场景 |
| --- | --- | --- | --- | --- |
| `home.hero.titleLine1` / `home.hero.titleLine2` | 首页首屏 | `app/pages/index.vue` | `app/pages/index.vue` | Hero 主标题两行文案 |
| `home.hero.subtitleLine1` / `home.hero.subtitleLine2` | 首页首屏 | `app/pages/index.vue` | `app/pages/index.vue` | Hero 副标题两行文案 |
| `home.factory.sectionTitle` | 首页工厂视频 | `app/pages/index.vue` | `app/pages/index.vue` | 工厂视频模块标题 |
| `home.products.sectionTitle` | 首页产品类型 | `app/pages/index.vue` | `app/pages/index.vue` | 产品类型模块标题 |
| `home.products.cards[0-4].title` | 首页产品类型 | `app/pages/index.vue` | `app/pages/index.vue` | 五张产品卡片标题 |
| `home.products.cards[0-4].desc[0-3]` | 首页产品类型 | `app/pages/index.vue` | `app/pages/index.vue` | 各产品卡片卖点列表 |
| `home.why.sectionTitle` | 首页为什么选择我们 | `app/pages/index.vue` | `app/pages/index.vue` | 模块标题 |
| `home.why.subtitle` | 首页为什么选择我们 | `app/pages/index.vue` | `app/pages/index.vue` | 模块副标题 |
| `home.why.cards[0-2].title` / `home.why.cards[0-2].desc` | 首页为什么选择我们 | `app/pages/index.vue` | `app/pages/index.vue` | 三张优势卡片标题与说明 |
| `home.about.sectionTitle` | 首页关于我们 | `app/pages/index.vue` | `app/pages/index.vue` | 关于我们模块标题 |
| `home.about.imageAlt` | 首页关于我们 | `app/pages/index.vue` | `app/pages/index.vue` | 关于我们配图替代文本 |
| `home.about.introParagraph1` / `home.about.introParagraph2` | 首页关于我们 | `app/pages/index.vue` | `app/pages/index.vue` | 关于我们正文两段介绍 |
| `home.about.ctaText` | 首页关于我们 | `app/pages/index.vue` | `app/pages/index.vue` | 查看更多按钮文案 |
| `home.cert.sectionTitle` | 首页认证证书 | `app/pages/index.vue` | `app/pages/index.vue` | 认证证书模块标题 |
| `home.cert.subtitlePrimary` / `home.cert.subtitleSecondary` | 首页认证证书 | `app/pages/index.vue` | `app/pages/index.vue` | 左侧两行辅助说明 |
| `home.cert.ctaText` | 首页认证证书 | `app/pages/index.vue` | `app/pages/index.vue` | 立即咨询按钮文案 |
| `home.cert.certificateAltSuffix` | 首页认证证书 | `app/pages/index.vue` | `app/pages/index.vue` | 证书图片 Alt 后缀 |
| `home.trade.sectionTitle` | 首页国际贸易 | `app/pages/index.vue` | `app/pages/index.vue` | 国际贸易模块标题 |
| `home.trade.imageAltMain` / `home.trade.imageAltTop` / `home.trade.imageAltBottom` | 首页国际贸易 | `app/pages/index.vue` | `app/pages/index.vue` | 三张贸易拼图替代文本 |
| `home.trade.lead1` / `home.trade.lead2` | 首页国际贸易 | `app/pages/index.vue` | `app/pages/index.vue` | 国际贸易说明段落 |
| `home.trade.bullets[0-3]` | 首页国际贸易 | `app/pages/index.vue` | `app/pages/index.vue` | 国际贸易优势列表 |
| `home.trade.ctaText` | 首页国际贸易 | `app/pages/index.vue` | `app/pages/index.vue` | 立即咨询按钮文案 |
| `home.serviceFlow.sectionTitle` / `home.serviceFlow.ariaLabel` | 首页服务流程 | `app/pages/index.vue` | `app/pages/index.vue` | 非标定制合作服务流程标题与可访问文本 |
| `home.serviceFlow.steps[0-9]` | 首页服务流程 | `app/pages/index.vue` | `app/pages/index.vue` | 十个服务流程节点文案 |
| `home.shippingFlow.sectionTitle` / `home.shippingFlow.ariaLabel` | 首页运输流程 | `app/pages/index.vue` | `app/pages/index.vue` | 标准运输流程标题与可访问文本 |
| `home.shippingFlow.steps[0-15]` | 首页运输流程 | `app/pages/index.vue` | `app/pages/index.vue` | 十六个运输流程节点文案 |
| `home.partners.sectionTitle` | 首页合作伙伴展示 | `app/pages/index.vue` | `app/pages/index.vue` | 合作伙伴模块标题 |
| `home.partners.photoAlts[0-8]` | 首页合作伙伴展示 | `app/pages/index.vue` | `app/pages/index.vue` | 九张合作伙伴照片 Alt 文案 |

## 联系我们

| 键名 | 页面模块 | 组件路径 | 业务引用文件 | 使用场景 |
| --- | --- | --- | --- | --- |
| `contactUs.heroTitle` | 联系我们页首屏 | `app/pages/contactUs.vue` | `app/pages/contactUs.vue` | Hero 标题 |
| `contactUs.cards[0-4]` | 联系我们信息列表 | `app/pages/contactUs.vue` | `app/pages/contactUs.vue` | 电话、联系人、邮箱、地址等联系信息 |

## 行业应用

| 键名 | 页面模块 | 组件路径 | 业务引用文件 | 使用场景 |
| --- | --- | --- | --- | --- |
| `industryApplication.heroTitle` | 行业应用首屏 | `app/pages/industryApplication.vue` | `app/pages/industryApplication.vue` | Hero 标题 |
| `industryApplication.aria.content` | 行业应用内容区 | `app/pages/industryApplication.vue` | `app/pages/industryApplication.vue` | 内容区 `aria-label` |
| `industryApplication.cards[0].title` / `description` | 行业应用新能源 | `app/pages/industryApplication.vue` | `app/pages/industryApplication.vue` | 新能源行业卡片标题与正文 |
| `industryApplication.cards[1].title` / `description` | 行业应用医疗健康 | `app/pages/industryApplication.vue` | `app/pages/industryApplication.vue` | 医疗健康行业卡片标题与正文 |
| `industryApplication.cards[2].title` / `description` / `description2` | 行业应用造船 | `app/pages/industryApplication.vue` | `app/pages/industryApplication.vue` | 造船行业卡片标题与两段正文 |
| `industryApplication.cards[3].title` / `description` / `description2` | 行业应用 AI 自动化 | `app/pages/industryApplication.vue` | `app/pages/industryApplication.vue` | AI 自动化行业卡片标题与两段正文 |

## 发展历程

| 键名 | 页面模块 | 组件路径 | 业务引用文件 | 使用场景 |
| --- | --- | --- | --- | --- |
| `developmentHistory.heroTitle` | 发展历程首屏 | `app/pages/developmentHistory.vue` | `app/pages/developmentHistory.vue` | Hero 标题 |
| `developmentHistory.aria.timeline` | 发展历程时间轴 | `app/pages/developmentHistory.vue` | `app/pages/developmentHistory.vue` | 时间轴 `aria-label` |
| `developmentHistory.timeline[0-6].year` / `desc` | 发展历程时间轴 | `app/pages/developmentHistory.vue` | `app/pages/developmentHistory.vue` | 七个年份节点与对应发展描述 |

## 产品公共组件

| 键名 | 页面模块 | 组件路径 | 业务引用文件 | 使用场景 |
| --- | --- | --- | --- | --- |
| `products.common.hero.badge` | 产品详情页通用 Hero | `app/components/products/ProductPageHero.vue` | `ProductShaft.vue`、`ProductFlange.vue`、`ProductValve.vue`、`ProductSheetMetal.vue`、`ProductAiAutomation.vue` | 顶部 Hero 徽章文案 |
| `products.common.hero.defaultFootnote` | 产品详情页通用 Hero | `app/components/products/ProductPageHero.vue` | 同上 | Hero 默认脚注文案 |
| `products.common.top.caseSectionTitle` | 产品详情页案例区 | `app/components/products/pubTop.vue` | 同上 | 公共案例展示模块标题 |
| `products.common.top.paintBoothCapacityTag` | 产品详情页案例区 | `app/components/products/pubTop.vue` | `ProductSheetMetal.vue` | 喷漆室产能标签 |
| `products.common.footer.materials.sectionTitle` / `sectionAria` / `lead` / `items[0-5]` | 产品详情页公共底部 | `app/components/products/pubFooter.vue` | 所有产品页组件 | 材质模块标题、描述与六项材质名称 |
| `products.common.footer.applications.sectionTitle` / `sectionAria` / `lead` / `items[0-5]` | 产品详情页公共底部 | `app/components/products/pubFooter.vue` | 所有产品页组件 | 应用场景模块标题、描述与六项行业名称 |
| `products.common.footer.quality.sectionTitle` / `sectionAria` / `lead` / `items[0-8]` | 产品详情页公共底部 | `app/components/products/pubFooter.vue` | 所有产品页组件 | 质量控制模块标题、描述与九项检测能力名称 |
| `products.common.footer.paintPartners.sectionTitle` / `lead` | 产品详情页公共底部 | `app/components/products/pubFooter.vue` | 所有产品页组件 | 油漆合作商模块标题与说明 |
| `products.common.footer.technology.sectionTitle` / `subTitle` / `highlight` / `lead` | 产品详情页公共底部 | `app/components/products/pubFooter.vue` | 所有产品页组件 | 工艺技术模块标题、辅助标题、亮点与说明 |
| `products.common.footer.tracking.sectionTitle` / `subTitle` / `highlight` | 产品详情页公共底部 | `app/components/products/pubFooter.vue` | 所有产品页组件 | 物料追踪模块标题、辅助标题与说明 |

## 各产品详情页

| 键名 | 页面模块 | 组件路径 | 业务引用文件 | 使用场景 |
| --- | --- | --- | --- | --- |
| `products.shaft.bodyAria` / `hero.*` / `facility.*` / `cases[*].*` / `customCases.*` | 轴类产品页 | `app/components/products/ProductShaft.vue` | `app/pages/products/[slug].vue` | 轴类详情页 Hero、产线介绍、案例卡片、自定义案例大图说明 |
| `products.flange.bodyAria` / `hero.*` / `facility.*` / `cases[*].*` / `customCases.*` | 法兰类产品页 | `app/components/products/ProductFlange.vue` | `app/pages/products/[slug].vue` | 法兰详情页 Hero、车削/加工区、案例展示、自定义案例说明 |
| `products.valve.bodyAria` / `hero.*` / `facility.*` / `cases[*].*` / `customCases.*` | 阀组类产品页 | `app/components/products/ProductValve.vue` | `app/pages/products/[slug].vue` | 阀块详情页 Hero、脚注、产线说明、案例展示、自定义案例说明 |
| `products.sheetMetal.bodyAria` / `hero.*` / `facility.*` / `cases[*].*` / `customCases.*` | 喷漆钣金页 | `app/components/products/ProductSheetMetal.vue` | `app/pages/products/[slug].vue` | 钣金详情页 Hero、喷漆室说明、案例展示、自定义案例说明 |
| `products.aiAutomation.bodyAria` / `hero.*` / `facility.*` / `cases[*].*` / `customCases.*` | AI 自动化页 | `app/components/products/ProductAiAutomation.vue` | `app/pages/products/[slug].vue` | AI 自动化详情页 Hero、工艺说明、案例展示、自定义案例说明 |

## 其他页面

| 键名 | 页面模块 | 组件路径 | 业务引用文件 | 使用场景 |
| --- | --- | --- | --- | --- |
| `products.index.pageTitle` / `heading` | 产品列表占位页 | `app/pages/products/index.vue` | `app/pages/products/index.vue` | 页面标题与 H1 文案 |
| `cookies.pageTitle` / `heading` | Cookie 声明页 | `app/pages/cookies.vue` | `app/pages/cookies.vue` | 页面标题与 H1 文案 |
