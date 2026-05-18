<!--
  产品分类：喷漆钣金 / 钣金结构件
  路由：/products/sheet-metal（app/pages/products/[slug].vue）
-->
<template>
  <div class="product-category-page">
    <ProductPageHero
      :hero-desc3="hero.heroDesc3"
      :footnote-text="hero.footnoteText"
      :bg-src="heroBg"
      :title-line1="hero.heroTitle1"
      :title-line2="hero.heroTitle2"
      :bullets="hero.heroBullets"
    />
    <section class="product-category-page__body" :aria-label="t(`${p}.bodyAria`)">
      <pubTop :caseList="caseList" :customCases="customCases" :facility="facility" :imgCustomCase="imgCustomCase"></pubTop>
      <pubFooter></pubFooter>
    </section>
  </div>
</template>

<script setup lang="ts">
import ProductPageHero from "./ProductPageHero.vue";
import heroBg from "~/assets/img/products/ai/1.png";
import pubFooter from "./pubFooter.vue";
import pubTop from "./pubTop.vue";
import { ref } from "vue";

import caseImg1 from "~/assets/img/products/Shaft/6.png";
import caseImg2 from "~/assets/img/products/Shaft/7.png";
import caseImg3 from "~/assets/img/products/Shaft/8.png";
import caseImg4 from "~/assets/img/products/Shaft/9.png";
import anli from "~/assets/img/products/ai/3.png";
const { t, tm, rt } = useI18n();
const p = "products.aiAutomation" as const;

const imgCustomCase = ref({
  src: anli,
});

const facility = computed(() => ({
  turning: {
    title: t(`${p}.facility.turning.title`),
    desc: t(`${p}.facility.turning.desc`),
    imgAlt: t(`${p}.facility.turning.imgAlt`),
  },
  processing: {
    title: t(`${p}.facility.processing.title`),
    desc: t(`${p}.facility.processing.desc`),
    imgAlt: t(`${p}.facility.processing.imgAlt`),
  },
}));

const caseImagePairs = [
  [caseImg1, caseImg2],
  [caseImg3, caseImg4],
] as const;

const caseList = computed(() =>
  (tm(`${p}.cases`) as Array<{ title: string; desc: string }>).map((item, index) => ({
    title: rt(item.title),
    desc: rt(item.desc),
    leftImg: caseImagePairs[index][0],
    rightImg: caseImagePairs[index][1],
  })),
);

const customCases = computed(() => ({
  ariaLabel: t(`${p}.customCases.ariaLabel`),
  title: t(`${p}.customCases.title`),
  subtitle: t(`${p}.customCases.subtitle`),
  imgAlt: t(`${p}.customCases.imgAlt`),
}));

const hero = computed(() => ({
  heroTitle1: t(`${p}.hero.titleLine1`),
  heroTitle2: t(`${p}.hero.titleLine2`),
  heroBullets: (tm(`${p}.hero.bullets`) as string[]).map((item) => rt(item)),
  heroDesc3: t(`${p}.hero.detailLine`),
  footnoteText: t(`${p}.hero.footnoteText`),
}));
</script>

<style scoped lang="scss">
.product-category-page {
  background: #ebebec;
}
.product-category-page__body {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem 80px;
}
.product-category-page__lead {
  margin: 0;
  font-size: 18px;
  line-height: 1.7;
  color: #000028;
  text-align: center;
}
</style>
