<template>
  <div class="page-legal">
    <h1>{{ t("cookies.heading") }}</h1>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

useHead(() => ({
  title: t("cookies.pageTitle"),
}));
</script>

<style scoped>
.page-legal {
  padding: 1.5rem;
}
</style>
