<!--
  产品分类：液压阀块 / 阀组（流体控制集成件）
  路由：/products/valve（app/pages/products/[slug].vue）
-->
<template>
  <div class="product-category-page">
    <ProductPageHero :bg-src="heroBg" :title-line1="hero.heroTitle1" :title-line2="hero.heroTitle2" :bullets="hero.heroBullets" footnoteText="多种规格  &nbsp &nbsp  运转高效 &nbsp &nbsp   经久耐用" />
    <section class="product-category-page__body" :aria-label="t(`${p}.bodyAria`)">
      <pubTop :caseList="caseList" :customCases="customCases" :facility="facility" :imgCustomCase="imgCustomCase" :imgTurning="defImgTurning"></pubTop>
      <pubFooter></pubFooter>
    </section>
  </div>
</template>

<script setup lang="ts">
import ProductPageHero from "./ProductPageHero.vue";
import heroBg from "~/assets/img/products/Value/1.png";
import pubFooter from "./pubFooter.vue";
import pubTop from "./pubTop.vue";
import { ref } from "vue";
import caseImg1 from "~/assets/img/products/Shaft/6.png";
import caseImg2 from "~/assets/img/products/Shaft/7.png";
import caseImg3 from "~/assets/img/products/Shaft/8.png";
import caseImg4 from "~/assets/img/products/Shaft/9.png";
import anli from "~/assets/img/products/Value/3.png";
import defImgTurning from "~/assets/img/products/Value/2.png";
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
    title: "气动阀块",
    desc: "用于自动化设备、机器人、专机、夹具",
    leftImg: caseImg1,
    rightImg: caseImg2,
  },
  {
    title: "液压阀块",
    desc: "风电、冶金、工程机械、机床适用",
    leftImg: caseImg3,
    rightImg: caseImg4,
  },
]);
const customCases = ref({
  ariaLabel: "定制案例展示-阀块展示",
  title: "定制案例展示-阀块展示",
  subtitle: "30年间服务多个行业多个领域客户",
  imgAlt: "定制案例展示-阀块展示",
});

/** 中文 Hero 文案（后续可迁入 zh.json）；英文走 en.json productPage.valve */
const hero = ref({
  heroTitle1: "非标定制 ",
  heroTitle2: "阀块/油路块",
  heroBullets: ["· 使用寿命长", "· 持久耐用", "· 质量保证", "· 安全可靠"],
});

const { t, tm, locale } = useI18n();
const p = "productPage.valve" as const;
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
