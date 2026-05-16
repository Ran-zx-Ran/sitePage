<!--
  产品分类：中大型非标轴类 / 轴类零部件
  路由：/products/shaft（app/pages/products/[slug].vue）
-->
<template>
  <div class="product-category-page">
    <ProductPageHero :bg-src="heroBg" :title-line1="hero.heroTitle1" :title-line2="hero.heroTitle2" :bullets="hero.heroBullets" />
    <section class="product-category-page__body" :aria-label="t(`${p}.bodyAria`)">
      <pubTop :caseList="caseList" :customCases="customCases" :facility="facility" :imgCustomCase="imgCustomCase" />
      <pubFooter />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ProductPageHero from "./ProductPageHero.vue";
import heroBg from "~/assets/img/products/Shaft/1.png";
import pubFooter from "./pubFooter.vue";
import pubTop from "./pubTop.vue";
import caseImg1 from "~/assets/img/products/Shaft/6.png";
import caseImg2 from "~/assets/img/products/Shaft/7.png";
import caseImg3 from "~/assets/img/products/Shaft/8.png";
import caseImg4 from "~/assets/img/products/Shaft/9.png";
import caseImg5 from "~/assets/img/products/Shaft/10.png";
import caseImg6 from "~/assets/img/products/Shaft/11.png";
import anli from "~/assets/img/products/Shaft/12.png";
const imgCustomCase = ref({
  src: anli,
});
/** 中文 Hero 文案（后续可迁入 zh.json）；英文走 en.json productPage.shaft */
const hero = ref({
  heroTitle1: "中大型非标轴类",
  heroTitle2: "高级定制加工",
  heroBullets: ["· 内螺纹与外螺纹加工", "· 台阶车削 / 阶梯车削", "· 键槽铣削", "· 其他工艺"],
});
const { t, tm, locale } = useI18n();
const p = "productPage.shaft" as const;

const caseList = ref([
  {
    title: "发电机轴",
    desc: "其表面极为坚硬，内芯则兼具韧性与 延展性，从而具有卓越的抗冲击和耐磨损性能。",
    leftImg: caseImg1,
    rightImg: caseImg2,
  },
  {
    title: "中间轴",
    desc: "其晶粒细腻、组织致密，具有高抗疲劳特性， 确保了出色的断裂韧性与稳定可靠的无故障运行性能。",
    leftImg: caseImg3,
    rightImg: caseImg4,
  },
  {
    title: "船用轴/船舶轴",
    desc: "它具有优异的耐腐蚀性和长使用寿命， 同时在高负荷应用场景下具备出色的承载能力。",
    leftImg: caseImg5,
    rightImg: caseImg6,
  },
]);
const facility = ref({
  turning: {
    title: "车削区",
    desc: "设备先进齐全\n精度高，规格全。",
    imgAlt: "车削区数控车床设备",
  },
  processing: {
    title: "加工区",
    desc: "我们配备了全面的设备，包括加工中心、数控车床、多种型号的铣床、磨床以及线切割电火花机。",
    imgAlt: "加工区车间与机加工设备",
  },
});
const customCases = ref({
  ariaLabel: "非标轴类产品定制案例展示",
  title: "定制案例展示:非标轴类产品",
  subtitle: "凭借30年的行业经验，我们已为众多领域的客户提供了专业服务。",
  /** 单张案例展示图（12.png）的替代文本 */
  imgAlt: "非标轴类产品定制案例展示",
});
</script>

<style scoped lang="scss">
.product-category-page {
  background: #ebebec;
  // background: #fff;
}
.product-category-page__body {
  max-width: 1400px;
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
