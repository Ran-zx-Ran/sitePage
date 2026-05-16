<template>
  <div class="nav flex items-center">
    <div class="nav-content flex items-center justify-between">
      <img class="logo" src="@/assets/img/logo.png" alt="" />
      <nav class="flex items-center gap-8" aria-label="主导航">
        <NuxtLink :to="localePath('/')" class="nav-link" :class="{ 'nav-link--active': isExact('/') }"> 首页 </NuxtLink>
        <div class="nav-dropdown">
          <NuxtLink :to="localePath('/products/shaft')" class="nav-link" :class="{ 'nav-link--active': isUnder('/products') }"> 产品 </NuxtLink>
          <div class="dropdown-panel" role="menu">
            <NuxtLink v-for="item in productItems" :key="item.to" :to="localePath(item.to)" class="dropdown-item" role="menuitem">
              {{ item.label }}
            </NuxtLink>
          </div>
        </div>

        <NuxtLink :to="localePath('/developmentHistory')" class="nav-link" :class="{ 'nav-link--active': isExact('/developmentHistory') }"> 发展历程 </NuxtLink>
        <NuxtLink :to="localePath('/industryApplication')" class="nav-link" :class="{ 'nav-link--active': isExact('/industryApplication') }">
          行业应用
        </NuxtLink>
        <NuxtLink :to="localePath('/contactUs')" class="nav-link" :class="{ 'nav-link--active': isExact('/contactUs') }"> 联系我们 </NuxtLink>
        <img class="languageIcon" src="@/assets/img/language.png" alt="" />
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
// 直接使用 vue-router 当前路由的响应式 ref，
// 避免头部作为布局常驻组件时，激活态在页面切换后出现更新慢一拍的问题。
const router = useRouter();
// 国际化路径
const localePath = useLocalePath();
// 当前页面的标准化路径。
// 这里使用 computed 包一层，确保顶部菜单激活态始终跟随最新路由立即刷新。
const currentPath = computed(() => normalizePath(router.currentRoute.value.path));
// 产品列表
const productItems = [
  { label: "轴类产品", to: "/products/shaft" },
  { label: "法兰类产品", to: "/products/flange" },
  { label: "阀组类产品", to: "/products/valve" },
  { label: "喷漆钣金零件", to: "/products/sheet-metal" },
  { label: "AI自动化产品", to: "/products/ai-automation" },
] as const;
// 标准化路径
function normalizePath(p: string) {
  if (!p || p === "/") return "/";
  return p.replace(/\/$/, "") || "/";
}
// 判断是否是精确路径
function isExact(path: string) {
  return currentPath.value === normalizePath(localePath(path));
}
// 判断是否在路径下
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
  margin-left: auto;
  width: 28px;
  height: 28px;
  cursor: pointer;
  margin-top: -2px;
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
