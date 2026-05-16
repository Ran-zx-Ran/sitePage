<!--
  产品分类：喷漆钣金 / 钣金结构件
  路由：/products/sheet-metal（app/pages/products/[slug].vue）
-->
<template>
  <div class="product-category-page">
    <ProductPageHero :bg-src="heroBg" :title-line1="hero.heroTitle1" :title-line2="hero.heroTitle2" :bullets="hero.heroBullets" />
    <section class="product-category-page__body" :aria-label="t(`${p}.bodyAria`)">
      <pubTop :caseList="caseList" :customCases="customCases" :facility="facility" :imgCustomCase="imgCustomCase" :imgTurning="defImgTurning"></pubTop>
      <pubFooter></pubFooter>
    </section>
  </div>
</template>

<script setup lang="ts">
import ProductPageHero from "./ProductPageHero.vue";
import heroBg from "~/assets/img/products/Sheet/1.png";
import pubFooter from "./pubFooter.vue";
import pubTop from "./pubTop.vue";
import { ref } from "vue";

import caseImg1 from "~/assets/img/products/Shaft/6.png";
import caseImg2 from "~/assets/img/products/Shaft/7.png";
import caseImg3 from "~/assets/img/products/Shaft/8.png";
import caseImg4 from "~/assets/img/products/Shaft/9.png";
import anli from "~/assets/img/products/Sheet/3.png";
import defImgTurning from "~/assets/img/products/Value/2.png";
const imgCustomCase = ref({
  src: anli,
});

const facility = ref({
  turning: {
    title: "喷漆室",
    desc: "可喷涂最大工件 \n 6米(长)*3米(宽)*2米(高)",
    imgAlt: "喷漆室",
  },
  processing: {
    title: "喷漆室",
    desc: "可喷涂最大工件 \n 6米(长)*3米(宽)*2米(高)",
    imgAlt: "喷漆室",
  },
});
const caseList = ref([
  {
    title: "减速机护罩",
    desc: "尺寸:1070mm*790mm*390mm",
    leftImg: caseImg1,
    rightImg: caseImg2,
  },
  {
    title: "电机壳",
    desc: "尺寸:直径313mm 高度297mm",
    leftImg: caseImg3,
    rightImg: caseImg4,
  },
]);
const customCases = ref({
  ariaLabel: "定制案例展示-钣金展示",
  title: "定制案例展示-钣金展示",
  subtitle: "30年间服务多个行业多个领域客户",
  imgAlt: "定制案例展示-钣金展示",
});

const hero = ref({
  heroTitle1: "CNC精密 ",
  heroTitle2: "钣金喷涂",
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
