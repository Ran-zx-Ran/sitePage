<template>
  <div class="page-products">
    <h1>{{ t("products.index.heading") }}</h1>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

useHead(() => ({
  title: t("products.index.pageTitle"),
}));
</script>

<style scoped>
.page-products {
  padding: 1.5rem;
}
</style>
