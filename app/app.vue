<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage :page-key="route.fullPath" />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>
