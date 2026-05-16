<!--
  产品分类：法兰类（标准 / 非标法兰）
  路由：/products/flange（app/pages/products/[slug].vue）
-->
<template>
  <div class="product-category-page">
    <ProductPageHero :bg-src="heroBg" :title-line1="hero.heroTitle1" :title-line2="hero.heroTitle2" :bullets="hero.heroBullets" :hero-desc3="hero.heroDesc3" />
    <section class="product-category-page__body" :aria-label="t(`${p}.bodyAria`)">
      <pubTop :caseList="caseList" :customCases="customCases" :facility="facility" :imgCustomCase="imgCustomCase"></pubTop>
      <pubFooter></pubFooter>
    </section>
  </div>
</template>

<script setup lang="ts">
import ProductPageHero from "./ProductPageHero.vue";
import heroBg from "~/assets/img/products/Flang/1.png";
import pubFooter from "./pubFooter.vue";
import pubTop from "./pubTop.vue";

import caseImg1 from "~/assets/img/products/Shaft/6.png";
import caseImg2 from "~/assets/img/products/Shaft/7.png";
import caseImg3 from "~/assets/img/products/Shaft/8.png";
import caseImg4 from "~/assets/img/products/Shaft/9.png";
import anli from "~/assets/img/products/Flang/3.png";
const imgCustomCase = ref({
  src: anli,
});

const facility = ref({
  turning: {
    title: "车削区",
    desc: "多台先进设备\n精度高，规格全。",
    imgAlt: "车削区数控车床设备",
  },
  processing: {
    title: "加工区",
    desc: "有多台加工中心、数控车床、各种型号铣床、 磨床、线切割等，设备丰富。",
    imgAlt: "加工区车间与机加工设备",
  },
});
const caseList = ref([
  {
    title: "船舶法兰",
    desc: "推进轴大型法兰(重载轴系用)",
    leftImg: caseImg1,
    rightImg: caseImg2,
  },
  {
    title: "风电法兰",
    desc: "风电塔筒法兰(带颈重载型)",
    leftImg: caseImg3,
    rightImg: caseImg4,
  },
]);
const customCases = ref({
  ariaLabel: "定制案例展示-法兰展示",
  title: "定制案例展示-法兰展示",
  subtitle: "30年间服务多个行业多个领域客户",
  imgAlt: "定制案例展示-法兰展示",
});
/** 中文 Hero 文案（后续可迁入 zh.json）；英文走 en.json productPage.flange */
const hero = ref({
  heroTitle1: "非标法兰 ",
  heroTitle2: "高级定制加工",
  heroBullets: ["· 规格多样", "· 精准尺寸", "· 优选材质", "· 精工细作"],
  heroDesc3: "最大加工尺寸:直径1.5m",
});
const { t, tm, locale } = useI18n();
const p = "productPage.flange" as const;

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
