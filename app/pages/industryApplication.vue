<template>
  <!-- 行业应用 -->
  <div class="development-page">
    <section class="hero" aria-labelledby="development-hero-title">
      <img class="hero__bg" src="~/assets/img/industryApplication/1.png" alt="" />
      <div class="hero__overlay" />
      <h1 id="development-hero-title" class="hero__title">
        {{ t("industryApplication.heroTitle") }}
      </h1>
    </section>

    <section class="content" :aria-label="t('industryApplication.aria.content')">
      <div class="content__inner">
        <article
          v-for="(item, index) in contentItems"
          :key="item.title"
          class="industry-card"
        >
          <div class="industry-card__main">
            <header class="industry-card__head">
              <div class="industry-card__title-block">
                <h2 class="industry-card__title">{{ item.title }}</h2>
                <span class="industry-card__underline" aria-hidden="true" />
              </div>
              <span class="industry-card__arrow" aria-hidden="true">
                <img
                  class="industry-card__arrow-img"
                  :src="industryArrowImg"
                  alt=""
                  width="20"
                  height="20"
                />
              </span>
              <img class="industry-card__icon" :src="item.subImg" alt="" />
            </header>
            <div class="industry-card__body">
              <p>{{ item.description }}</p>
              <p v-if="item.description2">{{ item.description2 }}</p>
            </div>
          </div>
          <div
            class="industry-card__gallery"
            :class="{ 'industry-card__gallery--stacked': index === 2 }"
          >
            <figure
              v-for="(img, i) in item.imgList"
              :key="i"
              class="industry-card__figure"
            >
              <img :src="img" alt="" loading="lazy" />
            </figure>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import industryApplicationImg2 from "~/assets/img/industryApplication/2.png";
import industryApplicationImg3 from "~/assets/img/industryApplication/3.png";
import industryApplicationImg4 from "~/assets/img/industryApplication/4.png";
import industryApplicationImg5 from "~/assets/img/industryApplication/5.png";
import industryApplicationImg6 from "~/assets/img/industryApplication/6.png";
import industryApplicationImg7 from "~/assets/img/industryApplication/7.png";
import industryApplicationImg8 from "~/assets/img/industryApplication/8.png";
import industryApplicationImg9 from "~/assets/img/industryApplication/9.png";
import industryApplicationImg10 from "~/assets/img/industryApplication/10.png";
import industryApplicationImg11 from "~/assets/img/industryApplication/11.png";
import industryApplicationImg12 from "~/assets/img/industryApplication/12.png";
import industryApplicationImg13 from "~/assets/img/industryApplication/13.png";
import industryArrowImg from "~/assets/img/industryApplication/jiantou.png";

const { t, tm, rt } = useI18n();
usePageSeo("industryApplication");

interface IndustryItem {
  title: string;
  description: string;
  description2?: string;
  subImg: string;
  imgList: string[];
}

const cardMedia = [
  {
    subImg: industryApplicationImg4,
    imgList: [industryApplicationImg2, industryApplicationImg3],
  },
  {
    subImg: industryApplicationImg5,
    imgList: [industryApplicationImg6, industryApplicationImg7],
  },
  {
    subImg: industryApplicationImg8,
    imgList: [industryApplicationImg9, industryApplicationImg10],
  },
  {
    subImg: industryApplicationImg11,
    imgList: [industryApplicationImg12, industryApplicationImg13],
  },
] as const;

const contentItems = computed<IndustryItem[]>(() =>
  (tm("industryApplication.cards") as Array<Omit<IndustryItem, "subImg" | "imgList">>).map((item, index) => ({
    title: rt(item.title),
    description: rt(item.description),
    description2: item.description2 ? rt(item.description2) : undefined,
    subImg: cardMedia[index].subImg,
    imgList: [...cardMedia[index].imgList],
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
  padding: 0 24px 80px;
}

.content__inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.industry-card {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(260px, 0.85fr);
  gap: 40px;
  align-items: stretch;
  padding: 40px 40px 40px 44px;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 8px 32px rgba(7, 29, 71, 0.08);
  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease;
}

.industry-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 48px rgba(7, 29, 71, 0.14);
}

.industry-card__main {
  min-width: 0;
}

.industry-card__head {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 16px 20px;
  margin-bottom: 22px;
}

.industry-card__title-block {
  flex: 1 1 180px;
  min-width: 0;
}

.industry-card__title {
  margin: 0;
  font-size: clamp(22px, 2.2vw, 30px);
  font-weight: 800;
  color: #111;
  line-height: 1.25;
  letter-spacing: 0.02em;
}

.industry-card__underline {
  display: block;
  width: 56px;
  height: 4px;
  margin-top: 12px;
  border-radius: 2px;
  background: var(--teal);
  transition: width 0.4s ease;
}

.industry-card:hover .industry-card__underline {
  width: 100%;
  max-width: 100%;
}

.industry-card__arrow {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  transition:
    background 0.3s ease,
    transform 0.3s ease;
}

.industry-card__arrow-img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit:contain ;
  transition: transform 0.3s ease;
}

.industry-card:hover .industry-card__arrow-img {
  transform: translateX(4px);
}

.industry-card__icon {
  flex-shrink: 0;
  width: auto;
  height: 52px;
  object-fit: contain;
  margin-left: auto;
  transition: transform 0.35s ease;
}

.industry-card:hover .industry-card__icon {
  transform: scale(1.06);
}

.industry-card__body {
  color: #333;
  font-size: 15px;
  line-height: 1.85;
  text-align: justify;
}

.industry-card__body p {
  margin: 0 0 1em;
}

.industry-card__body p:last-child {
  margin-bottom: 0;
}

.industry-card__gallery {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  min-height: 200px;
}

.industry-card__gallery--stacked {
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  min-height: 0;
  align-content: start;
}

.industry-card__figure {
  margin: 0;
  overflow: hidden;
  border-radius: 10px;
  // background: #f0f2f5;
}

.industry-card__figure img {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 160px;
  object-fit: contain;
  transition: transform 0.55s ease;
}

.industry-card:hover .industry-card__figure img {
  transform: scale(1.06);
}

.industry-card__gallery--stacked .industry-card__figure img {
  min-height: 0;
  height: 220px;
  max-height:220px;
  object-fit: cover;
}

@media (max-width: 960px) {
  .industry-card {
    grid-template-columns: 1fr;
    padding: 32px 28px;
    gap: 28px;
  }

  .industry-card__gallery {
    order: -1;
    min-height: 0;
  }

  .industry-card__icon {
    margin-left: 0;
  }

}
</style>
