<template>
  <!-- 联系我们 -->
  <div class="development-page">
    <section class="hero" aria-labelledby="development-hero-title">
      <img class="hero__bg" src="~/assets/img/contactUs/1.png" alt="" />
      <div class="hero__overlay" />
      <h1 id="development-hero-title" class="hero__title">
        {{ t("contactUs.heroTitle") }}
      </h1>
    </section>
    <section class="content">
      <div class="content__inner">
        <div class="content__item" v-for="item in contactUsCards" :key="item.text">
          <div class="content__item-img">
            <img :src="item.img" alt="" />
          </div>
          <div class="content__item-text">
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "no-footer",
});

const { t, tm, rt } = useI18n();
usePageSeo("contactUs");
import { ref } from "vue";
import contactUsImg1 from "~/assets/img/contactUs/phone.png";
import contactUsImg2 from "~/assets/img/contactUs/phone2.png";
import contactUsImg3 from "~/assets/img/contactUs/phone2.png";
import contactUsImg4 from "~/assets/img/contactUs/youxiang.png";
import contactUsImg5 from "~/assets/img/contactUs/weizhi.png";

const contactImages = [contactUsImg1, contactUsImg2, contactUsImg3, contactUsImg4, contactUsImg5];

const contactUsCards = computed(() =>
  (tm("contactUs.cards") as string[]).map((text, index) => ({
    text: rt(text),
    img: contactImages[index],
  })),
);
</script>

<style scoped lang="scss">
.development-page {
  --navy: #071d47;
  --teal: #58cbd0;
  --page-bg: #efefef;
  background: var(--page-bg);
}

.hero {
  position: relative;
  min-height: 480px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #030929;
}

.hero__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(2, 8, 39, 0.82) 0%, rgba(2, 8, 39, 0.45) 48%, rgba(2, 8, 39, 0.28) 100%),
    linear-gradient(90deg, rgba(3, 10, 43, 0.2), rgba(3, 10, 43, 0.08));
}

.hero__title {
  position: relative;
  z-index: 1;
  margin: 0;
  padding: 0 1.5rem;
  color: #fff;
  font-size: clamp(2rem, 4vw, 3.25rem);
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1.1;
  text-align: center;
}
.content {
  padding: 0px 0 20px;
  margin-top: -40px;
}
.content__inner {
 width: 1200px;
 margin: 0 auto;
}
.content__item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}
.content__item-img {
  border-radius: 50%;
  border: 4px solid #000128;
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content__item img {
  width: 50%;
  height: 50%;
  object-fit: contain;
}
.content__item p {
  font-weight: bold;
font-size: 24px;
color: #000128;
line-height: 112px;
}
</style>
