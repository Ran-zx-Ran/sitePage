<template>
  <div>
    <div class="shaft-facility mb-20">
      <div class="shaft-facility__col">
        <div>
          <h2 class="shaft-facility__title pl-10">{{ facility.turning.title }}</h2>
          <p class="shaft-facility__desc shaft-facility__desc--preline pl-10">{{ facility.turning.desc }}</p>
        </div>

        <div class="mark" v-if="facility.turning.title == '喷漆室'">最大5吨</div>
        <div class="shaft-facility__figure">
          <img class="shaft-facility__img" :src="imgTurning" :alt="facility.turning.imgAlt" width="1490" height="1166" decoding="async" />
        </div>
      </div>
      <div class="shaft-facility__col">
        <div>
          <h2 class="shaft-facility__title pl-10">{{ facility.processing.title }}</h2>
          <p class="shaft-facility__desc pl-10" :class="{ 'shaft-facility__desc--preline': facility.turning.title == '喷漆室' }">{{ facility.processing.desc }}</p>
        </div>
        <div class="mark" v-if="facility.turning.title == '喷漆室'">最大5吨</div>
        <div class="shaft-facility__figure">
          <img class="shaft-facility__img" :src="imgProcessing" :alt="facility.processing.imgAlt" width="1490" height="1166" decoding="async" />
        </div>
      </div>
    </div>
    <section>
      <!-- 案例展示 -->
      <div class="public_panel">
        <div class="public_line">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="public_title">案例展示</div>
      </div>
      <div class="case_box">
        <div class="case_item" v-for="item in caseList" :key="item.title">
          <img class="bg" src="~/assets/img/products/Shaft/biankuang.png" alt="" />
          <div class="case_title">{{ item.title }}</div>
          <div class="case_desc">{{ item.desc }}</div>
          <div class="img_box">
            <img class="left_img" :src="item.leftImg" alt="" />
            <img class="center_img" src="~/assets/img/products/Shaft/5.png" alt="" />
            <img class="right_img" :src="item.rightImg" alt="" />
          </div>
        </div>
      </div>
    </section>
    <!-- 定制案例展示:非标轴类产品（深蓝底 + 单张案例图 12.png） -->
    <section class="shaft-custom-showcase" :aria-label="customCases.ariaLabel">
      <header class="shaft-custom-showcase__header">
        <h2 class="shaft-custom-showcase__title">{{ customCases.title }}</h2>
        <p class="shaft-custom-showcase__subtitle">{{ customCases.subtitle }}</p>
      </header>
      <figure class="shaft-custom-showcase__figure">
        <img class="shaft-custom-showcase__img" :src="imgCustomCase.src" :alt="customCases.imgAlt" width="1000" height="600" loading="lazy" decoding="async" />
      </figure>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import defImgTurning from "~/assets/img/products/Shaft/2.png";
import imgProcessing from "~/assets/img/products/Shaft/3.png";
/** 非标轴类定制案例：单张合成图（Shaft/12.png） */
import anli from "~/assets/img/products/Shaft/12.png";

const props = defineProps({
  caseList: {
    type: Array as PropType<
      {
        title: string;
        desc: string;
        leftImg: string;
        rightImg: string;
      }[]
    >,
    default: () => [],
  },
  customCases: {
    type: Object,
    default: () => ({}),
  },
  facility: {
    type: Object,
    default: () => ({}),
  },
  imgCustomCase: {
    // 定制案例展示：单张合成图（Shaft/12.png）
    type: Object,
    default: () => ({
      src: anli,
    }),
  },
  imgTurning: {
    // 车削区展示：Shaft/2.png
    type: String,
    default: defImgTurning,
  },
  imgProcessing: {
    // 车削区展示：Shaft/3.png
    type: String,
    default: imgProcessing,
  },
});
</script>

<style scoped lang="scss">
.mark {
  background-color: #00cccc;
  padding: 4px 12px;
  color: #fff;
  width: 100px;
  text-align: center;
  margin-left: 40px;
  margin-top: -20px;
  margin-bottom: 12px;
}
.shaft-facility {
  display: flex;
  gap: clamp(1.5rem, 4vw, 2.5rem);
  margin-top: 2rem;
  border-radius: 12px;
}

.shaft-facility__col {
  width: 50%;
  text-align: left;
}

.shaft-facility__title {
  margin: 0 0 0.625rem;
  font-size: clamp(1.25rem, 2.2vw, 1.75rem);
  font-weight: 700;
  line-height: 1.3;
  color: #000033;
}

.shaft-facility__desc {
  margin: 0 0 1.75rem;
  font-size: 1rem;
  line-height: 1.65;
  color: #111;
  height: 60px;
}

.shaft-facility__desc--preline {
  white-space: pre-line;
}

.shaft-facility__figure {
  margin: 0;
}

.shaft-facility__img {
  display: block;
  width: 100%;
  height: 450px;
  max-height: 450px;
  border-radius: 12px;
  border: 1px dashed #ddd;
  box-sizing: border-box;
}

/* ---------- 案例展示：科技风边框 + 上青下蓝的梯形标题/说明 ---------- */
/* 色板与稿一致：青绿标题条、深藏青底栏、浅灰内容区 */
$shaft-case-cyan: #00ced1;
$shaft-case-navy: #001f3f;
$shaft-case-inner: #f0f0f0;

.case_box {
  /* 单列：每行只展示一个案例，按列表顺序竖向依次排列 */
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: clamp(1rem, 3vw, 1.75rem);
  margin-top: 0;
}

.case_item {
  position: relative;
  box-sizing: border-box;
  /* 与效果图一致：先标题、再主图区、最后说明（DOM 中 bg 在第一，用网格行号覆盖排列） */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto minmax(160px, 1fr) auto;
  align-items: center;
  min-height: clamp(300px, 36vw, 420px);
  /* 边框 PNG 若中部透明，用浅色垫在底层 */
  // background: #fff;
}

/* 整卡底图：四角/侧边 HUD 装饰由 biankuang.png 提供 */
.case_item .bg {
  grid-column: 1;
  grid-row: 1 / -1;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
  pointer-events: none;
  user-select: none;
}

/* 顶部梯形条：上边更宽，中间为产品类型标题 */
.case_title {
  grid-column: 1;
  grid-row: 1;
  z-index: 1;
  justify-self: center;
  width: min(88%, 26rem);
  margin-top: clamp(0.35rem, 1.2vw, 0.65rem);
  padding: 0.55rem 1.25rem 0.65rem;
  box-sizing: border-box;
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.35;
  color: #fff;
  background: $shaft-case-cyan;
  /* 顶宽底窄的梯形 */
  clip-path: polygon(0 0, 100% 0, 92% 100%, 8% 100%);
  text-shadow: 0 1px 0 rgba(0, 20, 40, 0.25);
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

/* 中央箭头素材（5.png），略放大以呼应视觉重心 */
.img_box .center_img {
  flex: 0 0 auto;
  width: clamp(48px, 14vw, 88px);
  height: auto;
  object-fit: contain;
}

/* 底部说明：底边更宽的梯形，白字两行内自动换行 */
.case_desc {
  grid-column: 1;
  grid-row: 3;
  z-index: 1;
  justify-self: center;
  width: min(92%, 28rem);

  padding: 0.25rem clamp(1rem, 3vw, 1.5rem) 0.75rem;
  box-sizing: border-box;
  text-align: center;
  font-size: 17px;
  font-weight: 500;
  line-height: 1.65;
  color: #fff;
}

@media (max-width: 768px) {
  .shaft-facility {
    grid-template-columns: 1fr;
  }

  .case_item {
    min-height: 0;
    grid-template-rows: auto minmax(140px, auto) auto;
  }

  .img_box .left_img,
  .img_box .right_img {
    max-height: 140px;
  }
}

/* ---------- 定制案例展示：深蓝底 + 青色标题 + 单张案例大图 ---------- */
$shaft-custom-bg: #000033;
/* 稿面偏青蓝的亮字色 */
$shaft-custom-text: #a0ffff;
/* 图格外框垫色，与此前九宫格沟槽色一致，衬托白边 */
$shaft-custom-frame: #00044a;

.shaft-custom-showcase {
  margin-top: clamp(2.25rem, 5vw, 3.5rem);
  padding: clamp(2rem, 4.5vw, 3.25rem) clamp(1rem, 3vw, 1.75rem);
  border-radius: 12px;
  background: $shaft-custom-bg;
  box-sizing: border-box;
  margin-bottom: 80px;
}

.shaft-custom-showcase__header {
  max-width: 52rem;
  margin: 0 auto clamp(1.5rem, 3vw, 2.25rem);
  text-align: center;
}

.shaft-custom-showcase__title {
  margin: 0 0 0.65rem;
  font-size: clamp(1.35rem, 2.8vw, 2rem);
  font-weight: 700;
  line-height: 1.35;
  color: $shaft-custom-text;
  letter-spacing: 0.02em;
}

.shaft-custom-showcase__subtitle {
  margin: 0;
  font-size: clamp(0.9rem, 1.6vw, 1.05rem);
  font-weight: 400;
  line-height: 1.65;
  color: $shaft-custom-text;
  opacity: 0.92;
}

.shaft-custom-showcase__figure {
  margin: 0;
  max-width: 100%;
  padding: 6px;
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

.shaft-custom-showcase__img {
  display: block;
  width: 88%;
  height: auto;
  object-fit: contain;
  border: 1px solid rgba(255, 255, 255, 0.28);
  box-sizing: border-box;
  border-radius: 12px;
}
</style>
