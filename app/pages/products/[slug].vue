<template>
  <div class="page-product-slug">
    <component :is="body" />
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import ProductAiAutomation from '~/components/products/ProductAiAutomation.vue'
import ProductFlange from '~/components/products/ProductFlange.vue'
import ProductShaft from '~/components/products/ProductShaft.vue'
import ProductSheetMetal from '~/components/products/ProductSheetMetal.vue'
import ProductValve from '~/components/products/ProductValve.vue'

const VALID_SLUGS = ['shaft', 'flange', 'valve', 'sheet-metal', 'ai-automation'] as const
type ProductSlug = (typeof VALID_SLUGS)[number]

const SEO_KEY_BY_SLUG: Record<ProductSlug, string> = {
  shaft: 'productsShaft',
  flange: 'productsFlange',
  valve: 'productsValve',
  'sheet-metal': 'productsSheetMetal',
  'ai-automation': 'productsAiAutomation'
}

const BODY_BY_SLUG: Record<ProductSlug, Component> = {
  shaft: ProductShaft,
  flange: ProductFlange,
  valve: ProductValve,
  'sheet-metal': ProductSheetMetal,
  'ai-automation': ProductAiAutomation
}

function isProductSlug(s: string): s is ProductSlug {
  return (VALID_SLUGS as readonly string[]).includes(s)
}

const route = useRoute()
const slug = computed(() => String(route.params.slug))

watch(
  slug,
  (s) => {
    if (!isProductSlug(s)) {
      throw createError({ statusCode: 404, statusMessage: 'Page not found' })
    }
  },
  { immediate: true }
)

const body = computed(() => BODY_BY_SLUG[slug.value as ProductSlug])
usePageSeo(computed(() => SEO_KEY_BY_SLUG[slug.value as ProductSlug]))
</script>
