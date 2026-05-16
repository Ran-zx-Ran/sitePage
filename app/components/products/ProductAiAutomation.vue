<!--
  产品分类：喷漆钣金 / 钣金结构件
  路由：/products/sheet-metal（app/pages/products/[slug].vue）
-->
<template>
  <div class="product-category-page">
    <ProductPageHero
      heroDesc3="腐蚀类别：C5（ISO 12944）"
      footnoteText=" 高强度 · 高精度 · 高硬度 · 高稳定性"
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
const imgCustomCase = ref({
  src: anli,
});

const facility = ref({
  turning: {
    title: "车床区",
    desc: "设备先进,精度高 \n 规格全",
    imgAlt: "车床区",
  },
  processing: {
    title: "加工区",
    desc: "我们的精密制造能力由多元化的设备组合支撑，涵盖加工中心、 数控车床，以及全套铣削、磨削和线切割机床。",
    imgAlt: "加工区",
  },
});
const caseList = ref([
  {
    title: "RV减速机",
    desc: "高刚性和大承载能力，专为腰、臂关节设计",
    leftImg: caseImg1,
    rightImg: caseImg2,
  },
  {
    title: "RV减速机",
    desc: "体积小、精度高，专为前臂、腕关节设计。",
    leftImg: caseImg3,
    rightImg: caseImg4,
  },
]);
const customCases = ref({
  ariaLabel: "定制案例展示-定制组件",
  title: "定制案例展示-定制组件",
  subtitle: "30年间服务多个行业多个领域客户",
  imgAlt: "定制案例展示-定制组件",
});

const hero = ref({
  heroTitle1: "人工智能驱动的  ",
  heroTitle2: "自动化定制组件",
  heroBullets: ["· 激光切割", "· 数控折弯", "· 非标焊接", "· 数控龙门"],
});

const { t, tm, locale } = useI18n();
const p = "productPage.sheetMetal" as const;
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
