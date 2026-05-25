<template>
  <div class="nav flex items-center">
    <div class="nav-content flex items-center justify-between">
      <img class="logo" src="@/assets/img/logo.png" alt="北翔机械" />
      <nav class="flex items-center gap-8" :aria-label="t('layout.header.aria.mainNav')">
        <NuxtLink :to="localePath('/')" class="nav-link" :class="{ 'nav-link--active': isExact('/') }">
          {{ t("layout.header.nav.home") }}
        </NuxtLink>
        <div class="nav-dropdown">
          <NuxtLink :to="localePath('/products/shaft')" class="nav-link" :class="{ 'nav-link--active': isUnder('/products') }">
            {{ t("layout.header.nav.products") }}
          </NuxtLink>
          <div class="dropdown-panel" role="menu">
            <NuxtLink v-for="item in productItems" :key="item.to" :to="localePath(item.to)" class="dropdown-item" role="menuitem">
              {{ item.label }}
            </NuxtLink>
          </div>
        </div>

        <NuxtLink :to="localePath('/developmentHistory')" class="nav-link" :class="{ 'nav-link--active': isExact('/developmentHistory') }">
          {{ t("layout.header.nav.developmentHistory") }}
        </NuxtLink>
        <NuxtLink :to="localePath('/industryApplication')" class="nav-link" :class="{ 'nav-link--active': isExact('/industryApplication') }">
          {{ t("layout.header.nav.industryApplication") }}
        </NuxtLink>
        <NuxtLink :to="localePath('/contactUs')" class="nav-link" :class="{ 'nav-link--active': isExact('/contactUs') }">
          {{ t("layout.header.nav.contactUs") }}
        </NuxtLink>
        <!--
          语言切换入口：
          1. 使用 Nuxt i18n 提供的 switchLocalePath 生成“当前页面对应的另一种语言地址”；
          2. 这样点击图标后不会固定跳首页，而是停留在当前业务页面完成中英文切换；
          3. 当用户当前为中文时切到英文，当前为英文时切回中文。
        -->
        <NuxtLink :to="switchLanguagePath" class="language-switch" :aria-label="t('layout.header.languageIconAlt')" :title="t('layout.header.languageIconAlt')">
          <img class="languageIcon" src="@/assets/img/language.png" :alt="t('layout.header.languageIconAlt')" />
        </NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const { t, locale } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const currentPath = computed(() => normalizePath(router.currentRoute.value.path));

// 当前站点只有中英文两种语言，这里根据当前语言反推出“目标语言”。
const targetLocale = computed(() => (locale.value === "zh" ? "en" : "zh"));

// 生成当前页面对应的另一语言地址。
// 例如：
// - 当前在 `/contactUs` 时，点击后跳到 `/en/contactUs`
// - 当前在 `/en/products/shaft` 时，点击后跳到 `/products/shaft`
const switchLanguagePath = computed(() => switchLocalePath(targetLocale.value) || localePath("/"));

// 头部产品菜单直接从国际化资源读取，避免下拉项残留硬编码中文。
const productItems = computed(() => [
  { label: t("layout.header.productMenu.shaft"), to: "/products/shaft" },
  { label: t("layout.header.productMenu.flange"), to: "/products/flange" },
  { label: t("layout.header.productMenu.valve"), to: "/products/valve" },
  { label: t("layout.header.productMenu.sheetMetal"), to: "/products/sheet-metal" },
  { label: t("layout.header.productMenu.aiAutomation"), to: "/products/ai-automation" },
]);

function normalizePath(p: string) {
  if (!p || p === "/") return "/";
  return p.replace(/\/$/, "") || "/";
}

function isExact(path: string) {
  return currentPath.value === normalizePath(localePath(path));
}

function isUnder(path: string) {
  const base = normalizePath(localePath(path));
  return currentPath.value === base || currentPath.value.startsWith(`${base}/`);
}
</script>

<style scoped>
.nav {
  height: 160px;
  background-color: #051739;
  color: #fff;
  font-weight: bold;
  font-size: 24px;
  padding-left: 110px;
  padding-right: 90px;
}
.nav-content{
  width: 100%;
}
.languageIcon {
  width: 28px;
  height: 28px;
  cursor: pointer;
  margin-top: -2px;
}

.language-switch {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.nav .logo {
  width: 270px;
  height: 100px;
}

.nav-link {
  display: inline-block;
  position: relative;
  padding-bottom: 0.35rem;
  color: #fff;
  text-decoration: none;
  transition: color 0.15s ease;
}

.nav-link:hover {
  color: #6be7d6;
}

.nav-link--active {
  color: #6be7d6;
}

.nav-link--active::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 3px;
  background-color: #6be7d6;
  border-radius: 1px;
}

.nav-dropdown {
  position: relative;
  display: inline-block;
}

.nav-dropdown::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  height: 12px;
}

.dropdown-panel {
  display: none;
  position: absolute;
  left: 0;
  top: calc(100% + 8px);
  min-width: 220px;
  padding: 0.35rem 0;
  background: #fff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  border-radius: 2px;
  z-index: 50;
}

.nav-dropdown:hover .dropdown-panel,
.nav-dropdown:focus-within .dropdown-panel {
  display: block;
}

.dropdown-item {
  display: block;
  padding: 0.65rem 1.25rem;
  font-size: 18px;
  font-weight: 600;
  color: #0b1324;
  text-decoration: none;
  transition: background-color 0.12s ease;
}

.dropdown-item:hover,
.dropdown-item.router-link-active {
  background-color: rgba(107, 231, 214, 0.2);
}
</style>
