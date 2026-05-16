<!--
  全产品分类共用的「顶部 Hero」布局组件（背景图、标题区、要点列表样式）
  具体分类文案由各 Product*.vue 传入；顶部徽章/脚注的中文兜底在本文件 script 内
-->
<template>
  <section class="hero" :aria-labelledby="headingId">
    <img class="hero__bg" :src="bgSrc" alt="" />
    <div class="hero__content">
      <div class="title1">金属加工 来图来样加工定制</div>
      <h1 :id="headingId" class="title">{{ titleLine1 }}</h1>
      <p class="title title_sub">{{ titleLine2 }}</p>
      <div class="desc">
        <div v-for="(item, i) in bullets" :key="i" class="desc_item">{{ item }}</div>
      </div>
      <div class="desc2">{{ heroDesc3 }}</div>
      <div class="desc2" :class="heroDesc3 ? 'desc3' : ''">{{ footnoteText || "最小精度：0.001 毫米" }}</div>
    </div>
  </section>
</template>

<script setup lang="ts">
function isZhLocale(locale: string) {
  return locale === "zh" || locale.startsWith("zh-");
}

const props = withDefaults(
  defineProps<{
    /** 分类专用背景（由各产品页 import 传入） */
    bgSrc: string;
    titleLine1: string;
    titleLine2: string;
    bullets: string[];
    /** 不传则使用 i18n 中全站统一的脚注文案 */
    footnote?: string;
    headingId?: string;
    heroDesc3?: string;
    footnoteText?: string;
  }>(),
  { headingId: "product-hero-heading" },
);
console.log(props, 111111);

const { t, locale } = useI18n();
</script>

<style scoped lang="scss">
.hero__content {
  padding-left: 120px;
  position: relative;
  z-index: 1;
  padding-top: 60px;
  .desc {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 12px;
    row-gap: 0;
    max-width: 580px;
    .desc_item {
      font-weight: 400;
      font-size: 18px;
      color: #ffffff;
      line-height: 48px;
    }
  }
  .title_sub {
    margin: 0;
  }
  .desc3 {
    margin-top: -30px;
  }
  .desc2 {
    font-weight: 500;
    font-size: 26px;
    color: #e3d537;
    line-height: 76px;
    background: linear-gradient(180deg, #fff6cd 0%, #c08e16 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .title {
    margin: 0;
    font-weight: bold;
    font-size: 30px;
    color: #ffffff;
    line-height: 50px;
  }
  .title1 {
    border-radius: 20px;
    border: 2px solid #6be7d6;
    font-weight: 500;
    font-size: 18px;
    color: #6be7d6;
    width: fit-content;
    padding: 6px 40px;
    margin-bottom: 40px;
  }
}
.hero {
  position: relative;
  min-height: 480px;
  overflow: hidden;
  margin-bottom: 80px;
}

.hero__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 93%;
  object-fit: cover;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(5, 23, 57, 0.75) 0%, rgba(5, 23, 57, 0.35) 45%, rgba(5, 23, 57, 0.55) 100%);
}

.hero__title {
  position: relative;
  z-index: 1;
  margin: 0;
  padding: 0 1.5rem;
  font-size: clamp(2rem, 4vw, 3.25rem);
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.02em;
  text-align: center;
}
</style>
