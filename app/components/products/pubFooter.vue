<template>
  <div>
    <!-- 材质无限制：公共标题区 + 描述 + 六宫格卡片（图 + 深蓝底白字名称） -->
    <section class="shaft-material-section" aria-label="材质无限制">
      <div class="public_panel">
        <div class="public_line">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="public_title">材质无限制</div>
      </div>
      <div class="public_desc">我们专注于全系列金属材料的定制加工，覆盖所有材料类别。</div>
      <!-- role="list"：多块并列材质卡片，便于读屏识别为一组 -->
      <div class="shaft-material-grid" role="list">
        <article v-for="(item, materialIndex) in materialList" :key="`shaft-material-${materialIndex}`" class="shaft-material-card" role="listitem">
          <!-- 上图：固定 1:1 裁剪区，不同原始比例统一为封面填充 -->
          <figure class="shaft-material-card__figure">
            <img class="shaft-material-card__img" :src="item.img" :alt="item.title" width="480" height="480" loading="lazy" decoding="async" />
          </figure>
          <!-- 下条：稿面深蓝底 + 材质中文名居中 -->
          <div class="shaft-material-card__label">{{ item.title }}</div>
        </article>
      </div>
    </section>
    <!-- 应用场景：横版配图 + 仅图上侧圆角 + 标题在图下（栅格区域 intentionally 不设背景色） -->
    <section class="shaft-application-section" aria-label="应用场景">
      <div class="public_panel">
        <div class="public_line">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="public_title">应用场景</div>
      </div>
      <div class="public_desc">我们的产品广泛应用于各个行业，包括新能源、医疗、造船和工程机械领域。</div>
      <div class="shaft-application-grid" role="list">
        <article v-for="(item, applicationIndex) in applicationList" :key="`shaft-application-${applicationIndex}`" class="shaft-application-card" role="listitem">
          <figure class="shaft-application-card__figure">
            <img class="shaft-application-card__img" :src="item.img" :alt="item.title" width="640" height="400" loading="lazy" decoding="async" />
          </figure>
          <!-- 行业名称：稿面为深色正文、相对图片居中 -->
          <p class="shaft-application-card__caption">{{ item.title }}</p>
        </article>
      </div>
    </section>
    <!-- 卓越与精准 / 严格的质量控制：质检能力九宫格（无模块背景色，正文色 #07183C） -->
    <section class="shaft-quality-section mb-20" aria-label="卓越与精准与严格的质量控制">
      <div class="public_panel">
        <div class="public_line">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="public_title">卓越与精准&nbsp;&nbsp;&nbsp; 严格的质量控制</div>
      </div>
      <div class="public_desc shaft-quality-section__lead">先进的检测设备与专业的技术人员确保产品符合GB、DIN、ANSI、BS、JIS等相关标准。</div>
      <div class="shaft-quality-grid" role="list">
        <article v-for="(item, qualityIndex) in qualityList" :key="`shaft-quality-${qualityIndex}`" class="shaft-quality-card" role="listitem">
          <figure class="shaft-quality-card__figure">
            <img class="shaft-quality-card__img" :src="item.img" :alt="item.title" width="480" height="360" loading="lazy" decoding="async" />
          </figure>
          <p class="shaft-quality-card__caption">{{ item.title }}</p>
        </article>
      </div>
    </section>
    <!-- 检测设备及油漆合作商 -->
    <section>
      <div class="public_panel">
        <div class="public_line">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="public_title">检测设备及油漆合作商检测设备及油漆合作商</div>
      </div>
      <div class="public_desc">我们所用的油漆涂料，均为国际一线品牌大厂如阿克苏诺贝尔、海虹老人、PPG大师漆、佩特、佐敦等</div>
      <div class="img_box mt-20 mb-20">
        <img class="left_img" src="~/assets/img/products/Shaft/34.png" alt="" />
        <img class="right_img" src="~/assets/img/products/Shaft/35.png" alt="" />
      </div>
    </section>
    <!-- 工艺技术 -->
    <section>
      <div class="public_panel">
        <div class="public_line">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="public_title">工艺技术</div>
        <div class="public_title2">【资深工艺技术工程师团队】</div>
        <div class="public_title3">8小时极速报价·24小时单件快样</div>
        <div class="public_desc2">资深工艺技术工程师团队坐镇，全程精细化设计严控工序精度， 科学控制成本，为您提供定制化最优解决方案。</div>
      </div>
      <div class="gy-content">
        <img src="~/assets/img/products/Shaft/36.png" alt="" />
        <img src="~/assets/img/products/Shaft/37.png" alt="" />
        <img src="~/assets/img/products/Shaft/38.png" alt="" />
      </div>
    </section>
    <!-- 物料追踪 -->
    <section>
      <div class="public_panel">
        <div class="public_line">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="public_title">物料追踪</div>
        <div class="public_title2">【STS智能订单物料跟踪管理系统】</div>
        <div class="public_title3">智能化、数字化管理，每一步都有迹可循</div>
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
/**
 * 「质量控制」展示区数据：设备/人员实景图 + 简要说明 title（多项文案重复为现有业务数据，列表 key 用索引）。
 */
const qualityList = [
  {
    title: "专业工具",
    img: qualityImg1,
  },
  {
    title: "专业检验人员",
    img: qualityImg2,
  },
  {
    title: "大型三坐标检测仪",
    img: qualityImg3,
  },
  {
    title: "质量看板",
    img: qualityImg4,
  },
  {
    title: "超声波探伤检测",
    img: qualityImg5,
  },
  {
    title: "光谱检测",
    img: qualityImg6,
  },
  {
    title: "热处理试验台",
    img: qualityImg7,
  },
  {
    title: "表面处理检测",
    img: qualityImg8,
  },
  {
    title: "3D扫描",
    img: qualityImg9,
  },
];
/**
 * 「应用场景」栅格数据：title 为下方说明文案，img 为横版场景图（顺序对应设计稿 3×2）。
 * key 使用索引，避免未来标题文案重复时列表渲染冲突。
 */
const applicationList = [
  {
    title: "太阳能与风能(领域)",
    img: applicationImg1,
  },
  {
    title: "医疗行业",
    img: applicationImg2,
  },
  {
    title: "造船行业",
    img: applicationImg3,
  },
  {
    title: "AI机器人行业",
    img: applicationImg4,
  },
  {
    title: "新能源储能行业",
    img: applicationImg5,
  },
  {
    title: "新能源汽车行业",
    img: applicationImg6,
  },
];
/**
 * 「材质无限制」栅格数据源：每项包含展示标题 title 与配图 img（顺序对应设计稿 3×2）。
 * 注意前两处「不锈钢」文案重复属业务数据，列表 key 使用索引区分。
 */
const materialList = [
  {
    title: "不锈钢",
    img: materialImg1,
  },
  {
    title: "铜材",
    img: materialImg2,
  },
  {
    title: "铝合金材料",
    img: materialImg3,
  },
  {
    title: "碳钢",
    img: materialImg4,
  },
  {
    title: "不锈钢",
    img: materialImg5,
  },
  {
    title: "优特钢",
    img: materialImg6,
  },
];




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
