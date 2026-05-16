<template>
  <div class="development-page">
    <section class="hero" aria-labelledby="development-hero-title">
      <img class="hero__bg" src="~/assets/img/development/2.png" alt="" />
      <div class="hero__overlay" />
      <h1 id="development-hero-title" class="hero__title">
        {{ t("developmentHistory.heroTitle") }}
      </h1>
    </section>

    <section class="timeline" aria-label="Development timeline">
      <div class="timeline-container">
        <template v-for="(item, index) in list" :key="index">
          <!-- 左右交替的行：偶数索引为左，奇数索引为右 -->
          <div class="timeline-row" :class="index % 2 === 0 ? 'is-left' : 'is-right'">
            <!-- 左半部分，内容靠右对齐以贴合中心轴 -->
            <div class="half left-half">
              <!-- 仅在偶数索引时渲染左侧内容 -->
              <div v-if="index % 2 === 0" class="item-wrap">
                <!-- 包含圆圈、横线和中心点的整体图片 -->
                <img :src="item.img" class="main-img" alt="" />
                <!-- 文字内容区，绝对定位在横线上下 -->
                <div class="text-content">
                  <div class="year">{{ item.title }}</div>
                  <div class="desc">{{ item.desc }}</div>
                </div>
              </div>
            </div>

            <!-- 右半部分，内容靠左对齐以贴合中心轴 -->
            <div class="half right-half">
              <!-- 仅在奇数索引时渲染右侧内容 -->
              <div v-if="index % 2 !== 0" class="item-wrap">
                <img :src="item.img" class="main-img" alt="" />
                <div class="text-content">
                  <div class="year">{{ item.title }}</div>
                  <div class="desc">{{ item.desc }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- 连接下一个节点的垂直箭头 (除了最后一个节点外都显示) -->
          <div v-if="index < list.length - 1" class="timeline-arrow">
            <!-- 偶数索引下方为蓝色箭头(line2)，奇数索引下方为黑色箭头(line1) -->
            <img :src="index % 2 === 0 ? line2 : line1" class="arrow-img" alt="" />
          </div>
        </template>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import img1 from "~/assets/img/development/new/1.png";
import img2 from "~/assets/img/development/new/2.png";
import img3 from "~/assets/img/development/new/3.png";
import img4 from "~/assets/img/development/new/4.png";
import img5 from "~/assets/img/development/new/5.png";
import img6 from "~/assets/img/development/new/6.png";
import img7 from "~/assets/img/development/new/7.png";
import line1 from "~/assets/img/development/9.png";
import line2 from "~/assets/img/development/10.png";

const list = [
  {
    title: "2005",
    desc: "公司成立",
    img: img1,
  },
  {
    title: "2006",
    desc: "我们已与弗兰德(Flender)、西门子(Siemens)、威能极(Winergy)、维斯塔斯(Vestas)等多家全球《财富》500强企业开展合作，专注于环类和套类产品的生产(例如:轴承座圈、齿轮套、联轴器套等)。",
    img: img2,
  },
  {
    title: "2017",
    desc: "我们积极拓展新的业务领域，现已与久益全球(Joy Global)和戴纳帕克(Dynapac)建立合作伙伴关系，为其提供专业工业部件与解决方案。",
    img: img3,
  },
  {
    title: "2020",
    desc: "我们已扩展产品线，现涵盖环类与套类、轴类产品的精密加工以及钣金制造，为工业应用提供更广泛的组件选择。",
    img: img4,
  },
  {
    title: "2022",
    desc: "拓展至新业务领域我们已与国轩高科(GotionHigh-tech)和亿能电力(E-Power Technologies)建立合作伙伴关系，共同开发并供应新能源与电力系统组件。",
    img: img5,
  },
  {
    title: "2025",
    desc: "我们已引进新的检测与 生产设备，并推行自动化 管理，以提升整体制造能力。",
    img: img6,
  },
  {
    title: "2026",
    desc: "我们已新增设备、 扩建厂房并扩充团队， 以支持规模化生产与运营增长。",
    img: img7,
  },
];
const { locale, t } = useI18n();

usePageSeo("developmentHistory");
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
    linear-gradient(180deg, rgba(2, 8, 39, 0.82) 0%, rgba(2, 8, 39, 0.45) 48%, rgba(2, 8, 39, 0.28) 100%), linear-gradient(90deg, rgba(3, 10, 43, 0.2), rgba(3, 10, 43, 0.08));
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

/* 时间轴容器，限制最大宽度并居中 */
.timeline-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 每一行，相对定位且z-index高于箭头，使得节点可以盖在箭头上 */
.timeline-row {
  display: flex;
  width: 100%;
  position: relative;
  z-index: 2;
}

/* 左右各占一半，方便中心点对齐 */
.half {
  width: 50%;
  display: flex;
}

/* 左侧内容靠右对齐，使其右侧中心点贴合页面中轴 */
.left-half {
  justify-content: flex-end;
}

/* 右侧内容靠左对齐，使其左侧中心点贴合页面中轴 */
.right-half {
  justify-content: flex-start;
}

/* 内容包裹层，限制最大宽度以保持比例 */
.item-wrap {
  width: 100%;
  max-width: 480px;
  position: relative;
}

/* 微调左侧图片位置，使其右侧的中心点向右移动，精准对齐中心箭头 */
.is-left .item-wrap {
  margin-right: -12px;
}

/* 微调右侧图片位置，使其左侧的中心点向左移动，精准对齐中心箭头 */
.is-right .item-wrap {
  margin-left: -10px;
}

/* 包含圆圈和横线、中心点的主图 */
.main-img {
  width: 100%;
  height: auto;
  display: block;
}

/* 文字内容区域，绝对定位覆盖在图片上方 */
.text-content {
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
}

/* 左侧节点的文字排版：居右，且避开右侧的中心点(10%)和左侧的圆圈(42%) */
.is-left .text-content {
  right: 10%;
  left: 42%;
  align-items: flex-end;
  text-align: right;
}

/* 右侧节点的文字排版：居左，且避开左侧的中心点(10%)和右侧的圆圈(42%) */
.is-right .text-content {
  left: 10%;
  right: 42%;
  align-items: flex-start;
  text-align: left;
}

/* 年份文字：占据上半部分，底部对齐，刚好贴在图片横线上方 */
.year {
  height: 50%;
  display: flex;
  align-items: flex-end;
  padding-bottom: 8px;
  font-size: 36px;
  font-weight: 700;
  color: #222;
  line-height: 1;
}

/* 描述文字：占据下半部分，顶部对齐，刚好贴在图片横线下方 */
.desc {
  height: 50%;
  padding-top: 15px;
  font-size: 14px; /* 稍微调小一点字体以适应较长文本 */
  color: #444;
  line-height: 1.6;
}

/* 垂直箭头容器 */
.timeline-arrow {
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 1;
  /* 进一步增大负边距，消除图片自带的上下大量留白，拉近节点间距 */
  margin-top: -66px;
  margin-bottom: -85px;
}

/* 箭头图片宽度，需根据实际箭头粗细适当微调 */
.arrow-img {
  width: 22px;
  height: auto;
  display: block;
  margin-bottom: 12px;
}
</style>
