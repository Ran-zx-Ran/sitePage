<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-top">
        <span class="footer-top-item">{{ t("layout.footer.contact.email") }}</span>
        <span class="footer-top-item">{{ t("layout.footer.contact.phone") }}</span>
        <span class="footer-top-item">{{ t("layout.footer.contact.service") }}</span>
      </div>
      <div class="footer-rule" role="presentation" />
      <nav class="footer-bottom" :aria-label="t('layout.footer.aria.links')">
        <!-- <NuxtLink :to="localePath('/contactUs')" class="footer-link">{{ t("layout.footer.links.companyInfo") }}</NuxtLink> -->
        <NuxtLink class="footer-link">{{ t("cookies.mianze") }}</NuxtLink>
        <!-- <NuxtLink :to="localePath('/privacy')" class="footer-link">隐私声明</NuxtLink>
        <NuxtLink :to="localePath('/cookies')" class="footer-link">Cookie声明</NuxtLink> -->
      </nav>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
</script>

<style scoped>
.footer {
  height: 180px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  background-color: #051739;
  color: #fff;
  font-size: 22px;
  font-weight: 500;
}

.footer-inner {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.75rem;
}

.footer-top {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.footer-top-item {
  color: #fff;
}

.footer-rule {
  height: 1px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.22);
}

.footer-bottom {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
}

.footer-link {
  color: #fff;
  padding-bottom: 8px;
  transition: opacity 0.15s ease;
  font-size: 12px;
  margin-top: -14px;
}

.footer-link:hover {
  opacity: 0.85;
}
</style>
