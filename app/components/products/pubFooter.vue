<template>
  <div>
    <section class="shaft-material-section" :aria-label="t('products.common.footer.materials.sectionAria')">
      <div class="public_panel">
        <div class="public_line">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="public_title">{{ t("products.common.footer.materials.sectionTitle") }}</div>
      </div>
      <div class="public_desc">{{ t("products.common.footer.materials.lead") }}</div>
      <div class="shaft-material-grid" role="list">
        <article v-for="(item, materialIndex) in materialList" :key="`shaft-material-${materialIndex}`" class="shaft-material-card" role="listitem">
          <figure class="shaft-material-card__figure">
            <img class="shaft-material-card__img" :src="item.img" :alt="item.title" width="480" height="480" loading="lazy" decoding="async" />
          </figure>
          <div class="shaft-material-card__label">{{ item.title }}</div>
        </article>
      </div>
    </section>
    <section class="shaft-application-section" :aria-label="t('products.common.footer.applications.sectionAria')">
      <div class="public_panel">
        <div class="public_line">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="public_title">{{ t("products.common.footer.applications.sectionTitle") }}</div>
      </div>
      <div class="public_desc">{{ t("products.common.footer.applications.lead") }}</div>
      <div class="shaft-application-grid" role="list">
        <article v-for="(item, applicationIndex) in applicationList" :key="`shaft-application-${applicationIndex}`" class="shaft-application-card" role="listitem">
          <figure class="shaft-application-card__figure">
            <img class="shaft-application-card__img" :src="item.img" :alt="item.title" width="640" height="400" loading="lazy" decoding="async" />
          </figure>
          <p class="shaft-application-card__caption">{{ item.title }}</p>
        </article>
      </div>
    </section>
    <section class="shaft-quality-section mb-20" :aria-label="t('products.common.footer.quality.sectionAria')">
      <div class="public_panel">
        <div class="public_line">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="public_title">{{ t("products.common.footer.quality.sectionTitle") }}</div>
      </div>
      <div class="public_desc shaft-quality-section__lead">{{ t("products.common.footer.quality.lead") }}</div>
      <div class="shaft-quality-grid" role="list">
        <article v-for="(item, qualityIndex) in qualityList" :key="`shaft-quality-${qualityIndex}`" class="shaft-quality-card" role="listitem">
          <figure class="shaft-quality-card__figure">
            <img class="shaft-quality-card__img" :src="item.img" :alt="item.title" width="480" height="360" loading="lazy" decoding="async" />
          </figure>
          <p class="shaft-quality-card__caption">{{ item.title }}</p>
        </article>
      </div>
    </section>
    <section>
      <div class="public_panel">
        <div class="public_line">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="public_title">{{ t("products.common.footer.paintPartners.sectionTitle") }}</div>
      </div>
      <div class="public_desc">{{ t("products.common.footer.paintPartners.lead") }}</div>
      <div class="img_box mt-20 mb-20">
        <img class="left_img" src="~/assets/img/products/Shaft/34.png" alt="" />
        <img class="right_img" src="~/assets/img/products/Shaft/35.png" alt="" />
      </div>
    </section>
    <section>
      <div class="public_panel">
        <div class="public_line">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="public_title">{{ t("products.common.footer.technology.sectionTitle") }}</div>
        <div class="public_title2">{{ t("products.common.footer.technology.subTitle") }}</div>
        <div class="public_title3">{{ t("products.common.footer.technology.highlight") }}</div>
        <div class="public_desc2">{{ t("products.common.footer.technology.lead") }}</div>
      </div>
      <div class="gy-content">
        <img src="~/assets/img/products/Shaft/36.png" alt="" />
        <img src="~/assets/img/products/Shaft/37.png" alt="" />
        <img src="~/assets/img/products/Shaft/38.png" alt="" />
      </div>
    </section>
    <section>
      <div class="public_panel">
        <div class="public_line">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="public_title">{{ t("products.common.footer.tracking.sectionTitle") }}</div>
        <div class="public_title2">{{ t("products.common.footer.tracking.subTitle") }}</div>
        <div class="public_title3">{{ t("products.common.footer.tracking.highlight") }}</div>
      </div>
      <div class="gy-content">
        <img src="~/assets/img/products/Shaft/39.png" alt="" />
        <img src="~/assets/img/products/Shaft/40.png" alt="" />
        <img src="~/assets/img/products/Shaft/41.png" alt="" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import materialImg1 from "~/assets/img/products/Shaft/13.png";
import materialImg2 from "~/assets/img/products/Shaft/14.png";
import materialImg3 from "~/assets/img/products/Shaft/15.png";
import materialImg4 from "~/assets/img/products/Shaft/16.png";
import materialImg5 from "~/assets/img/products/Shaft/17.png";
import materialImg6 from "~/assets/img/products/Shaft/18.png";
import applicationImg1 from "~/assets/img/products/Shaft/19.png";
import applicationImg2 from "~/assets/img/products/Shaft/20.png";
import applicationImg3 from "~/assets/img/products/Shaft/21.png";
import applicationImg4 from "~/assets/img/products/Shaft/22.png";
import applicationImg5 from "~/assets/img/products/Shaft/23.png";
import applicationImg6 from "~/assets/img/products/Shaft/24.png";

import qualityImg1 from "~/assets/img/products/Shaft/25.png";
import qualityImg2 from "~/assets/img/products/Shaft/26.png";
import qualityImg3 from "~/assets/img/products/Shaft/27.png";
import qualityImg4 from "~/assets/img/products/Shaft/28.png";
import qualityImg5 from "~/assets/img/products/Shaft/29.png";
import qualityImg6 from "~/assets/img/products/Shaft/30.png";
import qualityImg7 from "~/assets/img/products/Shaft/31.png";
import qualityImg8 from "~/assets/img/products/Shaft/32.png";
import qualityImg9 from "~/assets/img/products/Shaft/33.png";
const { t, tm, rt } = useI18n();

// 公共产品底部模块统一从国际化资源读取文案，再与固定图片资源做映射。
const qualityImages = [qualityImg1, qualityImg2, qualityImg3, qualityImg4, qualityImg5, qualityImg6, qualityImg7, qualityImg8, qualityImg9];
const applicationImages = [applicationImg1, applicationImg2, applicationImg3, applicationImg4, applicationImg5, applicationImg6];
const materialImages = [materialImg1, materialImg2, materialImg3, materialImg4, materialImg5, materialImg6];

const qualityList = computed(() =>
  (tm("products.common.footer.quality.items") as string[]).map((title, index) => ({
    title: rt(title),
    img: qualityImages[index],
  })),
);

const applicationList = computed(() =>
  (tm("products.common.footer.applications.items") as string[]).map((title, index) => ({
    title: rt(title),
    img: applicationImages[index],
  })),
);

const materialList = computed(() =>
  (tm("products.common.footer.materials.items") as string[]).map((title, index) => ({
    title: rt(title),
    img: materialImages[index],
  })),
);
</script>

<style scoped lang="scss">
.gy-content {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 60px;
  img {
    border: radius 12px;
    overflow: hidden;
  }
}

/* ---------- 材质无限制：浅灰衬底 + 三列网格 + 方形图 + 深蓝标签条 ---------- */
/* 标签条背景：与设计稿深色 Navy 一致 */
$shaft-material-label-bg: #050a24;
/* 栅格外围浅灰，与案例区 inner 灰接近，衬托白底图块 */

.shaft-material-section {
  margin-top: clamp(2rem, 4vw, 3rem);
}

.shaft-material-grid {
  display: grid;
  /* 桌面端 3 列均分，与稿面 3×2 一致 */
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(0.45rem, 1.2vw, 0.65rem);
  margin-top: clamp(1.25rem, 3vw, 2rem);
  padding: clamp(1rem, 2.5vw, 1.5rem);
  border-radius: 8px;
  box-sizing: border-box;
}

.shaft-material-card {
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
  border-radius: 4px;
  background: #fff;
}

.shaft-material-card__figure {
  margin: 0;
  /* 统一为正方形展示区域，避免各图比例不一导致栅格高低不齐 */
  aspect-ratio: 1 / 1;
  width: 100%;
  overflow: hidden;
}

.shaft-material-card__img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.shaft-material-card__label {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  padding: 0.5rem 0.75rem;
  box-sizing: border-box;
  background: $shaft-material-label-bg;
  color: #fff;
  font-size: clamp(0.95rem, 1.8vw, 1.125rem);
  font-weight: 500;
  text-align: center;
  line-height: 1.35;
}

@media (max-width: 768px) {
  .shaft-material-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 480px) {
  .shaft-material-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}

/* ---------- 应用场景：横图 + 顶角圆角 + 深色标题（模块容器与栅格均无背景色） ---------- */
.shaft-application-section {
  margin-top: clamp(2rem, 4vw, 3rem);
}

.shaft-application-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(0.75rem, 2vw, 1.25rem);
  margin-top: clamp(1.25rem, 3vw, 2rem);
  box-sizing: border-box;
}

.shaft-application-card {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.shaft-application-card__figure {
  margin: 0;
  width: 100%;
  /* 横版占位比例，与设计稿 landscape 主视觉一致 */
  aspect-ratio: 16 / 10;
  overflow: hidden;
  /* 仅上侧圆角，底边与标题区衔接为直线 */
  border-radius: 8px 8px 0 0;
}

.shaft-application-card__img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.shaft-application-card__caption {
  margin: 0;
  padding: clamp(0.65rem, 1.5vw, 0.85rem) 0.25rem 0;
  text-align: center;
  font-size: clamp(0.95rem, 1.6vw, 1.05rem);
  font-weight: 500;
  line-height: 1.45;
  color: #07183c;
}

@media (max-width: 768px) {
  .shaft-application-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 480px) {
  .shaft-application-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}

/* ---------- 质量控制：双行标题 + 描述 + 3×3 图集（无背景，字色 #07183C） ---------- */
$shaft-quality-text: #07183c;

.shaft-quality-section {
  margin-top: clamp(2rem, 4vw, 3rem);
  color: $shaft-quality-text;

  /* 覆盖全局 public_title 默认色，与设计指定正文深蓝一致 */
  .public_title {
    color: $shaft-quality-text;
  }

  .shaft-quality-section__lead {
    color: $shaft-quality-text;
  }
}

/* 双行标题：第二行与第一行留出纵向间距（替代原模板中多个 br） */
.shaft-quality-section__heading-line {
  display: block;
}

.shaft-quality-section__heading-line--secondary {
  margin-top: clamp(0.75rem, 2vw, 1.25rem);
}

.shaft-quality-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(0.65rem, 1.8vw, 1rem);
  margin-top: clamp(1.25rem, 3vw, 2rem);
  box-sizing: border-box;
}

.shaft-quality-card {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.shaft-quality-card__figure {
  margin: 0;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 8px;
}

.shaft-quality-card__img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.shaft-quality-card__caption {
  margin: 0;
  padding: clamp(0.5rem, 1.2vw, 0.65rem) 0.2rem 0;
  text-align: center;
  font-size: clamp(0.88rem, 1.5vw, 1rem);
  font-weight: 500;
  line-height: 1.45;
  color: $shaft-quality-text;
}

@media (max-width: 768px) {
  .shaft-quality-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 480px) {
  .shaft-quality-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}

/* 中部：左轴照片 / 中箭头 / 右装配效果图，水平均分对齐 */
.img_box {
  grid-column: 1;
  grid-row: 2;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: clamp(0.35rem, 1.5vw, 0.75rem);
  width: 100%;
  padding: clamp(0.25rem, 1.5vw, 0.65rem) clamp(0.5rem, 2.5vw, 1.25rem);
  box-sizing: border-box;
}
.img_box .left_img,
.img_box .right_img {
  flex: 0 1 36%;
  max-width: 38%;
  height: auto;
  max-height: clamp(130px, 22vw, 220px);
  object-fit: contain;
}
</style>
