<template>
  <!-- 首页 -->
  <div class="home_page">
    <section class="hero">
      <img class="hero__bg" src="~/assets/img/home/3.png" alt="" />
      <div class="hero__overlay" />
      <h1 class="hero__title">诚信铸就品质</h1>
      <h1 class="hero__title">创新引领未来</h1>
      <div class="line"></div>
      <div class="sub_title">涉及机械加工与钣金焊接业务</div>
      <div class="sub_title">与《财富》500强企业深度合作</div>
      <div class="img_box">
        <img src="~/assets/img/home/1.png" alt="" />
        <img src="~/assets/img/home/2.png" alt="" />
      </div>
    </section>
    <!-- 内容 -->
    <section>
      <div class="public_title">工厂视频介绍</div>
      <div class="video_box">
        <div class="video_item" v-for="item in videoCards" :key="item.title">
          <img :src="item.img" alt="" />
        </div>
      </div>
      <div class="product_panel">
        <div class="public_title">产品类型</div>
        <div class="product_box">
          <article class="product_item" v-for="(item, idx) in productCards" :key="idx">
            <div class="product_item__media">
              <img class="product_item__img" :src="item.img" :alt="item.title" />
            </div>
            <div class="product_item__body">
              <h3 class="product_item__title">{{ item.title }}</h3>
              <ul class="product_item__list">
                <li v-for="(line, i) in item.desc" :key="i">{{ line }}</li>
              </ul>
              <span class="product_item__arrow">
                <img src="~/assets/img/home/4.png" alt="" />
              </span>
            </div>
          </article>
        </div>
      </div>

      <div class="why_panel">
        <div class="public_title why_panel__title_main">为什么选择我们</div>
        <p class="why_panel__subtitle">
          {{ whySubtitle }}
        </p>
        <div class="why_grid">
          <article v-for="(item, idx) in whyCards" :key="idx" class="why_card">
            <span class="why_card__num">{{ String(idx + 1).padStart(2, "0") }}</span>
            <h3 class="why_card__ttl">{{ item.title }}</h3>
            <div class="why_card__divider" aria-hidden="true" />
            <p class="why_card__desc">{{ item.desc }}</p>
          </article>
        </div>
      </div>
      <!-- 关于我们 -->
      <section class="about_strip" aria-labelledby="about-strip-heading">
        <h2 id="about-strip-heading" class="about_strip__title">关于我们</h2>
        <div class="about_strip__inner">
          <div class="about_strip__media">
            <img class="about_strip__photo" src="~/assets/img/home/10.png" alt="公司厂房与环境" loading="lazy" />
          </div>
          <div class="about_strip__content">
            <p class="about_strip__text">{{ aboutIntroP1 }}</p>
            <p class="about_strip__text">{{ aboutIntroP2 }}</p>
            <NuxtLink :to="localePath('/about')" class="about_strip__cta">查看更多</NuxtLink>
          </div>
        </div>
      </section>
      <!-- 认证证书 -->
      <section class="cert_panel" aria-labelledby="cert-panel-heading">
        <div class="cert_panel__inner">
          <div class="cert_panel__intro">
            <h2 id="cert-panel-heading" class="cert_panel__title">认证证书</h2>
            <p class="cert_panel__subtitle">品质认证</p>
            <p class="cert_panel__subtitle">权威认可</p>
            <NuxtLink :to="localePath('/contactUs')" class="cert_panel__cta">立即咨询</NuxtLink>
          </div>
          <div class="cert_panel__gallery">
            <article v-for="item in certItems" :key="item.label" class="cert_card">
              <div class="cert_card__frame">
                <img :src="item.img" :alt="item.label + ' 认证证书'" loading="lazy" width="180" height="260" />
              </div>
              <span class="cert_card__label">{{ item.label }}</span>
            </article>
          </div>
        </div>
      </section>
      <!-- 国际贸易 -->
      <section class="trade_panel" aria-labelledby="trade-heading">
        <div class="trade_panel__inner">
          <div class="trade_collage">
            <div class="trade_collage__cell trade_collage__main">
              <img :src="tradeImg15" alt="智能仓储与国际物流" loading="lazy" />
            </div>
            <div class="trade_collage__cell trade_collage__top">
              <img :src="tradeImg16" alt="出口包装与运输" loading="lazy" />
            </div>
            <div class="trade_collage__cell trade_collage__bottom">
              <img :src="tradeImg17" alt="全球贸易网络" loading="lazy" />
            </div>
          </div>
          <div class="trade_panel__content">
            <h2 id="trade-heading" class="trade_panel__title">国际贸易</h2>
            <p class="trade_panel__lead">{{ tradeIntro }}</p>
            <p class="trade_panel__lead">{{ tradeIntro2 }}</p>
            <ul class="trade_panel__list">
              <li v-for="(line, i) in tradeBullets" :key="i">{{ line }}</li>
            </ul>
            <NuxtLink :to="localePath('/contactUs')" class="trade_panel__cta">立即咨询</NuxtLink>
          </div>
        </div>
      </section>
      <!-- 非标定制一站式合作服务流程 -->
      <section class="service_flow" aria-labelledby="service-flow-heading">
        <h2 id="service-flow-heading" class="public_title service_flow__heading">非标定制一站式合作服务流程</h2>

        <div class="service_flow__zigzag">
          <div class="service_flow__grid">
            <template v-for="(step, i) in serviceFlowRow1" :key="'r1-' + i">
              <article class="service_flow__step" :style="{ gridRow: 1, gridColumn: 2 * i + 1 }">
                <div class="service_flow__iconBox">
                  <img class="service_flow__icon" :src="step.icon" :alt="step.label" loading="lazy" />
                </div>
                <div class="service_flow__label">{{ step.label }}</div>
              </article>
              <div
                v-if="i < serviceFlowRow1.length - 1"
                class="service_flow__arrow service_flow__arrow--right"
                :style="{ gridRow: 1, gridColumn: 2 * i + 2 }"
                aria-hidden="true"
              >
                <img :src="serviceFlowArrowRight" alt="" />
              </div>
            </template>

            <div class="service_flow__down service_flow__down--major" :style="{ gridRow: 2, gridColumn: 7 }" aria-hidden="true">
              <img :src="serviceFlowArrowDown" alt="" />
            </div>

            <template v-for="(step, i) in serviceFlowRow2" :key="'r2-' + i">
              <article class="service_flow__step" :style="{ gridRow: 3, gridColumn: 2 * i + 1 }">
                <div class="service_flow__iconBox">
                  <img class="service_flow__icon" :src="step.icon" :alt="step.label" loading="lazy" />
                </div>
                <div class="service_flow__label">{{ step.label }}</div>
              </article>
              <div
                v-if="i < serviceFlowRow2.length - 1"
                class="service_flow__arrow service_flow__arrow--left"
                :style="{ gridRow: 3, gridColumn: 2 * i + 2 }"
                aria-hidden="true"
              >
                <img :src="serviceFlowArrowLeft" alt="" />
              </div>
            </template>

            <div class="service_flow__down service_flow__down--major" :style="{ gridRow: 4, gridColumn: 1 }" aria-hidden="true">
              <img :src="serviceFlowArrowDown" alt="" />
            </div>

            <template v-for="(step, i) in serviceFlowRow3" :key="'r3-' + i">
              <article class="service_flow__step" :style="{ gridRow: 5, gridColumn: 2 * i + 1 }">
                <div class="service_flow__iconBox">
                  <img class="service_flow__icon" :src="step.icon" :alt="step.label" loading="lazy" />
                </div>
                <div class="service_flow__label">{{ step.label }}</div>
              </article>
              <div
                v-if="i < serviceFlowRow3.length - 1"
                class="service_flow__arrow service_flow__arrow--right"
                :style="{ gridRow: 5, gridColumn: 2 * i + 2 }"
                aria-hidden="true"
              >
                <img :src="serviceFlowArrowRight" alt="" />
              </div>
            </template>
          </div>
        </div>

        <ol class="service_flow__stack" :aria-label="'非标定制一站式合作服务流程'">
          <template v-for="(step, i) in serviceFlowSteps" :key="'stack-' + i">
            <li class="service_flow__stackItem">
              <article class="service_flow__step service_flow__step--stack">
                <div class="service_flow__iconBox">
                  <img class="service_flow__icon" :src="step.icon" :alt="step.label" loading="lazy" />
                </div>
                <div class="service_flow__label">{{ step.label }}</div>
              </article>
            </li>
            <li v-if="i < serviceFlowSteps.length - 1" class="service_flow__stackArrow" aria-hidden="true">
              <img :src="serviceFlowArrowDown" alt="" />
            </li>
          </template>
        </ol>
      </section>

      <!-- 标准运输流程（蛇形四行，7 列网格，移动端纵列） -->
      <section class="shipping_flow" aria-labelledby="shipping-flow-heading">
        <h2 id="shipping-flow-heading" class="public_title shipping_flow__heading">标准运输流程</h2>

        <div class="shipping_flow__zigzag">
          <div class="shipping_flow__grid">
            <template v-for="(step, i) in shippingFlowRow1" :key="'sh-r1-' + i">
              <article class="shipping_flow__step" :style="{ gridRow: 1, gridColumn: 2 * i + 1 }">
                <div class="shipping_flow__photo">
                  <img class="shipping_flow__img" :src="step.img" :alt="step.label" loading="lazy" />
                </div>
                <div class="shipping_flow__label">{{ step.label }}</div>
              </article>
              <div
                v-if="i < shippingFlowRow1.length - 1"
                class="shipping_flow__arrow shipping_flow__arrow--right"
                :style="{ gridRow: 1, gridColumn: 2 * i + 2 }"
                aria-hidden="true"
              >
                <img :src="serviceFlowArrowRight" alt="" />
              </div>
            </template>

            <div class="shipping_flow__down shipping_flow__down--major" :style="{ gridRow: 2, gridColumn: 7 }" aria-hidden="true">
              <img :src="serviceFlowArrowDown" alt="" />
            </div>

            <template v-for="(step, i) in shippingFlowRow2" :key="'sh-r2-' + i">
              <article class="shipping_flow__step" :style="{ gridRow: 3, gridColumn: 2 * i + 1 }">
                <div class="shipping_flow__photo">
                  <img class="shipping_flow__img" :src="step.img" :alt="step.label" loading="lazy" />
                </div>
                <div class="shipping_flow__label">{{ step.label }}</div>
              </article>
              <div
                v-if="i < shippingFlowRow2.length - 1"
                class="shipping_flow__arrow shipping_flow__arrow--left"
                :style="{ gridRow: 3, gridColumn: 2 * i + 2 }"
                aria-hidden="true"
              >
                <img :src="serviceFlowArrowLeft" alt="" />
              </div>
            </template>

            <div class="shipping_flow__down shipping_flow__down--major" :style="{ gridRow: 4, gridColumn: 1 }" aria-hidden="true">
              <img :src="serviceFlowArrowDown" alt="" />
            </div>

            <template v-for="(step, i) in shippingFlowRow3" :key="'sh-r3-' + i">
              <article class="shipping_flow__step" :style="{ gridRow: 5, gridColumn: 2 * i + 1 }">
                <div class="shipping_flow__photo">
                  <img class="shipping_flow__img" :src="step.img" :alt="step.label" loading="lazy" />
                </div>
                <div class="shipping_flow__label">{{ step.label }}</div>
              </article>
              <div
                v-if="i < shippingFlowRow3.length - 1"
                class="shipping_flow__arrow shipping_flow__arrow--right"
                :style="{ gridRow: 5, gridColumn: 2 * i + 2 }"
                aria-hidden="true"
              >
                <img :src="serviceFlowArrowRight" alt="" />
              </div>
            </template>

            <div class="shipping_flow__down shipping_flow__down--major" :style="{ gridRow: 6, gridColumn: 7 }" aria-hidden="true">
              <img :src="serviceFlowArrowDown" alt="" />
            </div>

            <template v-for="(step, i) in shippingFlowRow4" :key="'sh-r4-' + i">
              <article class="shipping_flow__step" :style="{ gridRow: 7, gridColumn: 2 * i + 1 }">
                <div class="shipping_flow__photo">
                  <img class="shipping_flow__img" :src="step.img" :alt="step.label" loading="lazy" />
                </div>
                <div class="shipping_flow__label">{{ step.label }}</div>
              </article>
              <div
                v-if="i < shippingFlowRow4.length - 1"
                class="shipping_flow__arrow shipping_flow__arrow--left"
                :style="{ gridRow: 7, gridColumn: 2 * i + 2 }"
                aria-hidden="true"
              >
                <img :src="serviceFlowArrowLeft" alt="" />
              </div>
            </template>
          </div>
        </div>

        <ol class="shipping_flow__stack" aria-label="标准运输流程">
          <template v-for="(step, i) in shippingFlowStepsOrdered" :key="'sh-stack-' + i">
            <li class="shipping_flow__stackItem">
              <article class="shipping_flow__step shipping_flow__step--stack">
                <div class="shipping_flow__photo">
                  <img class="shipping_flow__img" :src="step.img" :alt="step.label" loading="lazy" />
                </div>
                <div class="shipping_flow__label">{{ step.label }}</div>
              </article>
            </li>
            <li v-if="i < shippingFlowStepsOrdered.length - 1" class="shipping_flow__stackArrow" aria-hidden="true">
              <img :src="serviceFlowArrowDown" alt="" />
            </li>
          </template>
        </ol>

        <!-- 合作伙伴展示（两列相册网格） -->
        <h2 id="partner-showcase-heading" class="public_title partner_showcase__heading">合作伙伴展示</h2>
        <ul class="partner_showcase" aria-labelledby="partner-showcase-heading">
          <li v-for="(item, i) in partnerShowcasePhotos" :key="'partner-' + i" class="partner_showcase__item">
            <div class="partner_showcase__frame">
              <img class="partner_showcase__img" :src="item.src" :alt="item.alt" loading="lazy" />
            </div>
          </li>
        </ul>
      </section>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import videoImg from "~/assets/img/home/video.png";
import productImg1 from "~/assets/img/home/5.png";
import productImg2 from "~/assets/img/home/6.png";
import productImg3 from "~/assets/img/home/7.png";
import productImg4 from "~/assets/img/home/8.png";
import productImg5 from "~/assets/img/home/9.png";
import certImg11 from "~/assets/img/home/11.png";
import certImg12 from "~/assets/img/home/12.png";
import certImg13 from "~/assets/img/home/13.png";
import certImg14 from "~/assets/img/home/14.png";
import tradeImg15 from "~/assets/img/home/15.png";
import tradeImg16 from "~/assets/img/home/16.png";
import tradeImg17 from "~/assets/img/home/17.png";
import flowIcon18 from "~/assets/img/home/18.png";
import flowIcon19 from "~/assets/img/home/19.png";
import flowIcon20 from "~/assets/img/home/20.png";
import flowIcon21 from "~/assets/img/home/21.png";
import flowIcon22 from "~/assets/img/home/22.png";
import flowIcon23 from "~/assets/img/home/23.png";
import flowIcon24 from "~/assets/img/home/24.png";
import flowIcon25 from "~/assets/img/home/25.png";
import flowIcon26 from "~/assets/img/home/26.png";
import flowIcon27 from "~/assets/img/home/27.png";
import serviceFlowArrowDown from "~/assets/img/home/29.png";
import serviceFlowArrowRight from "~/assets/img/home/30.png";
import serviceFlowArrowLeft from "~/assets/img/home/31.png";
import shipImg32 from "~/assets/img/home/32.png";
import shipImg33 from "~/assets/img/home/33.png";
import shipImg34 from "~/assets/img/home/34.png";
import shipImg35 from "~/assets/img/home/35.png";
import shipImg36 from "~/assets/img/home/36.png";
import shipImg37 from "~/assets/img/home/37.png";
import shipImg38 from "~/assets/img/home/38.png";
import shipImg39 from "~/assets/img/home/39.png";
import shipImg40 from "~/assets/img/home/40.png";
import shipImg41 from "~/assets/img/home/41.png";
import shipImg42 from "~/assets/img/home/42.png";
import shipImg43 from "~/assets/img/home/43.png";
import shipImg44 from "~/assets/img/home/44.png";
import shipImg45 from "~/assets/img/home/45.png";
import shipImg46 from "~/assets/img/home/46.png";
import partnerImg47 from "~/assets/img/home/47.png";
import partnerImg48 from "~/assets/img/home/48.png";
import partnerImg49 from "~/assets/img/home/49.png";
import partnerImg50 from "~/assets/img/home/50.png";
import partnerImg51 from "~/assets/img/home/51.png";
import partnerImg52 from "~/assets/img/home/52.png";
import partnerImg53 from "~/assets/img/home/53.png";
import partnerImg54 from "~/assets/img/home/54.png";
import partnerImg55 from "~/assets/img/home/55.png";

const { locale, t } = useI18n();
const localePath = useLocalePath();
usePageSeo("home");

const aboutIntroP1 =
  "我们的能力涵盖机械加工、钣金制造与焊接工艺，并为风电能源领域提供自动化解决方案。我们严格遵循IS09001质量管理体系与ISO3834焊接质量国际标准，确保全流程的卓越品质。";

const aboutIntroP2 =
  "秉承“质量为先，客户至上”的原则，我们已与多家《财富》500强企业建立了深度合作，包括久益全球(JoyGlobal)、弗兰德(Flender)、西门子(Siemens)、威能极(Winergy)和戴纳帕克(Dynapac)。";

const whySubtitle = "500 强长期合作 全体系国际认证 全周期无忧售后";

const whyCards = ref([
  {
    title: "世界500强\n长期合作伙伴",
    desc: "深耕精密机械加工领域，是西门子、弗兰德、维斯塔斯等世界500强企业的长期合格供应商，产品品质与交付能力经国际标杆客户严苛验证。",
  },
  {
    title: "全体系国际\n权威认证加持",
    desc: "已通过ISO9001质量管理、ISO3834焊接质量、ISO45001职业健康安全、ISO14001环境管理四大国际权威认证，全流程标准化管控，筑牢品质与合规双底线。",
  },
  {
    title: "全周期一站式\n售后服务",
    desc: "专业的售后技术服务团队，可快速响应客户需求，提供安装调试、现场技术指导、故障维修、维保升级等全流程服务，全程护航客户生产无忧。",
  },
]);
const productCards = ref([
  {
    title: "非标轴类",
    img: productImg1,
    desc: ["内螺纹与外螺纹加工", "台阶车削 / 阶梯车削", "键槽铣削", "其他工艺"],
  },
  {
    title: "CNC精密钣金喷涂",
    img: productImg2,
    desc: ["激光切割", "数控折弯", "定制焊接 / 非标焊接", "数控龙门加工"],
  },
  {
    title: "液压阀块",
    img: productImg3,
    desc: ["使用寿命长", "耐用且持久", "品质有保障", "安全可靠"],
  },
  {
    title: "非标法兰",
    img: productImg4,
    desc: ["多种规格", "精确尺寸", "优质材料", "精细工艺"],
  },
  {
    title: "自动化智能元件",
    img: productImg5,
    desc: ["激光切割", "数控折弯", "定制焊接", "数控龙门加工"],
  },
]);
const certItems = [
  { label: "ISO3834", img: certImg11 },
  { label: "ISO9001", img: certImg12 },
  { label: "ISO14001", img: certImg13 },
  { label: "ISO45001", img: certImg14 },
];

const tradeIntro = "拥有超过10年的国际贸易经验。";
const tradeIntro2 = "我们为全球超过30个国家的客户提供服务，对国际市场需求有着深刻的理解。我们致力于将全球信赖的国际品质，同样可靠地带到您的面前。";

const tradeBullets = ["包装完整安全。", "拥有独立的进出口权。", "业务覆盖全球超过30个国家。", "公司超50%销售业绩源于海外订单。"];

const serviceFlowSteps = [
  { label: "客户咨询", icon: flowIcon18 },
  { label: "客户服务", icon: flowIcon19 },
  { label: "拜访客户", icon: flowIcon20 },
  { label: "解决方案", icon: flowIcon21 },
  { label: "下订单", icon: flowIcon22 },
  { label: "面对面沟通", icon: flowIcon23 },
  { label: "制造（生产）", icon: flowIcon24 },
  { label: "工厂验收测试", icon: flowIcon25 },
  { label: "现场安装", icon: flowIcon26 },
  { label: "售后服务", icon: flowIcon27 },
] as const;

const serviceFlowRow1 = computed(() => serviceFlowSteps.slice(0, 4));
const serviceFlowRow2 = computed(() => [...serviceFlowSteps.slice(4, 8)].reverse());
const serviceFlowRow3 = computed(() => serviceFlowSteps.slice(8, 10));

/** 标准运输流程：配图 32.png–46.png（15 张），第 16 步暂与同序列最后一张共用，若有 47.png 可再拆分 */
const shippingFlowImages = [
  shipImg32,
  shipImg33,
  shipImg34,
  shipImg35,
  shipImg36,
  shipImg37,
  shipImg38,
  shipImg39,
  shipImg40,
  shipImg41,
  shipImg42,
  shipImg43,
  shipImg44,
  shipImg45,
  shipImg46,
] as const;

const shippingFlowLabels = [
  "生产完成",
  "最终检验及测试报告出具",
  "客户订单跟进确认",
  "激光打标/雕刻",
  "去毛刺、清洁与干燥",
  "防锈处理",
  "内包装密封与贴标",
  "缓冲与防护",
  "捆扎与固定",
  "码垛（或托盘化）",
  "粘贴运输标识与警示标签",
  "物流抵达港口",
  "集装箱装货",
  "发送清关文件",
  "目的港清关",
  "送货至客户工厂",
] as const;

const shippingFlowSteps = computed(() =>
  shippingFlowLabels.map((label, i) => ({
    label,
    img: shippingFlowImages[i] ?? shippingFlowImages[shippingFlowImages.length - 1],
  })),
);

const shippingFlowRow1 = computed(() => shippingFlowSteps.value.slice(0, 4));
const shippingFlowRow2 = computed(() => [...shippingFlowSteps.value.slice(4, 8)].reverse());
const shippingFlowRow3 = computed(() => shippingFlowSteps.value.slice(8, 12));
const shippingFlowRow4 = computed(() => [...shippingFlowSteps.value.slice(12, 16)].reverse());

const shippingFlowStepsOrdered = computed(() => [...shippingFlowSteps.value]);

const partnerShowcasePhotos = [
  { src: partnerImg47, alt: "合作伙伴展示：厂区交流与合影 1" },
  { src: partnerImg48, alt: "合作伙伴展示：厂区交流与合影 2" },
  { src: partnerImg49, alt: "合作伙伴展示：厂区交流与合影 3" },
  { src: partnerImg50, alt: "合作伙伴展示：厂区交流与合影 4" },
  { src: partnerImg51, alt: "合作伙伴展示：厂区交流与合影 5" },
  { src: partnerImg52, alt: "合作伙伴展示：厂区交流与合影 6" },
  { src: partnerImg53, alt: "合作伙伴展示：厂区交流与合影 7" },
  { src: partnerImg54, alt: "合作伙伴展示：厂区交流与合影 8" },
  { src: partnerImg55, alt: "合作伙伴展示：厂区交流与合影 9" },
];

const videoCards = ref([
  {
    title: "工厂视频介绍",
    img: videoImg,
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "工厂视频介绍3",
    img: videoImg,
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "工厂视频介绍4",
    img: videoImg,
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "工厂视频介绍5",
    img: videoImg,
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
]);
</script>

<style scoped lang="scss">
.home_page {
  background: #ebebec;
}
/* ============================================
   Hero 横幅区
   全幅背景图 + 渐变遮罩 + 居中白色标题
   ============================================ */
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
  height: 100%;
  object-fit: cover;
}

/*
 * 深色渐变叠加层：
 * 从顶部的浓深藏蓝降至中部半透明再加深至底部，
 * 形成"暗角"效果，让中央白色标题在任何背景图上都清晰可辨。
 */
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
.line {
  width: 43px;
  height: 4px;
  background: #6be7d6;
  position: relative;
  z-index: 1;
  margin: 30px auto 48px;
}
.sub_title {
  font-weight: 500;
  font-size: 24px;
  color: #ffffff;
  position: relative;
  z-index: 1;
  text-align: center;
  margin-bottom: 20px;
}
.img_box {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  img {
    width: 63px;
    height: 63px;
    object-fit: cover;
    margin-right: 16px;
  }
}
.video_box {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 26px;
  padding: 0 52px;
  .video_item {
    width: calc(100% - 52px);
    height: 312px;
    object-fit: cover;
  }
}
.public_title {
  display: table;
  margin-left: auto;
  margin-right: auto;
  font-weight: bold;
  font-size: 40px;
  color: #000028;
  text-align: center;
  position: relative;
  z-index: 1;
  padding: 0 10px;
  margin-bottom: 60px;
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 20px;
    background: #6be7d6;
    position: absolute;
    bottom: 5px;
    left: 0;
    z-index: -1;
  }
}

/* ============================================
   产品类型（三列网格 + 深色信息区）
   ============================================ */
.product_panel {
  background: #f0f0f0;
  margin-top: 80px;
  padding: 0 clamp(20px, 4vw, 52px) 100px;

  .public_title {
    padding-top: 72px;
  }
}

.product_box {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(18px, 2vw, 28px);
  max-width: 1440px;
  margin: 0 auto;
}

.product_item {
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
  background: #0a1931;
  box-shadow: 0 10px 32px rgba(10, 25, 49, 0.18);
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    .product_item__img {
      transform: scale(1.05);
    }
    .product_item__arrow {
      transform: translateX(7px);
    }
  }
}

.product_item__media {
  position: relative;
  flex-shrink: 0;
  aspect-ratio: 4 / 2.65;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.4);
}

.product_item__img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: all 0.7s ease;
}

.product_item__body {
  position: relative;
  padding: 22px 24px 12px;
  flex: 1;
  background: #0a1931;
}

.product_item__title {
  margin: 0 0 14px;
  font-size: clamp(1.05rem, 1.35vw, 1.35rem);
  font-weight: 700;
  color: #ffffff;
  line-height: 1.35;
  letter-spacing: 0.02em;
}

.product_item__list {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.95);
  max-width: 158px;
  min-height: 144px;
}

.product_item__list li {
  position: relative;
  padding-left: 14px;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.68em;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
  }
}

.product_item__arrow {
  position: absolute;
  right: 18px;
  bottom: 18px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00f5ff;
  box-sizing: border-box;
  pointer-events: none;
  transition: all 0.5s ease;
}

@media (max-width: 1024px) {
  .product_box {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .product_item__list {
    min-height: 0;
  }
}

@media (max-width: 640px) {
  .product_panel {
    padding-bottom: 72px;

    .public_title {
      padding-top: 48px;
    }
  }

  .product_box {
    grid-template-columns: 1fr;
  }

  .product_item__media {
    aspect-ratio: 16 / 10;
  }
}

/* ============================================
   为什么选择我们
   ============================================ */
$cyan-accent: #6be7d6;
$navy-deep: #0a1931;
$navy-heading: #000028;

.why_panel {
  background: #f0f0f0;
  padding: 72px clamp(20px, 4vw, 52px) 100px;
}

.why_panel__title_main {
  margin-bottom: 20px;
}

.why_panel__subtitle {
  margin: -12px auto 52px;
  max-width: 960px;
  text-align: center;
  font-size: clamp(15px, 1.55vw, 18px);
  font-weight: 500;
  line-height: 1.65;
  color: #4d4d4f;
}

.why_grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(18px, 2.5vw, 28px);
  max-width: 1440px;
  margin: 0 auto;
}

.why_card {
  position: relative;
  min-height: 280px;
  padding: clamp(26px, 3vw, 36px);
  padding-top: clamp(78px, 8vw, 96px);
  background: $navy-deep;
  cursor: default;
  transition:
    background 0.32s ease,
    box-shadow 0.32s ease;
}

.why_card__num {
  position: absolute;
  top: clamp(22px, 2.8vw, 30px);
  right: clamp(22px, 2.8vw, 28px);
  font-size: clamp(2rem, 3.8vw, 2.85rem);
  font-weight: 800;
  line-height: 1;
  color: $cyan-accent;
  transition: color 0.32s ease;
}

.why_card__ttl {
  margin: 0 0 16px;
  max-width: 11em;
  font-size: clamp(1.2rem, 1.85vw, 1.65rem);
  font-weight: 700;
  line-height: 1.38;
  color: #ffffff;
  white-space: pre-line;
  transition: color 0.32s ease;
}

.why_card__divider {
  width: 40px;
  height: 2px;
  margin-bottom: 16px;
  background: $cyan-accent;
  transition: background 0.32s ease;
}

.why_card__desc {
  margin: 0;
  font-size: clamp(13px, 1.35vw, 15px);
  line-height: 1.72;
  color: rgba(255, 255, 255, 0.95);
  transition: color 0.32s ease;
}

.why_card:hover {
  background: #ffffff;
  box-shadow: 0 16px 40px rgba(10, 25, 49, 0.12);

  .why_card__num {
    color: $navy-deep;
  }

  .why_card__ttl {
    color: $navy-heading;
  }

  .why_card__divider {
    background: $navy-deep;
  }

  .why_card__desc {
    color: #333;
  }
}

@media (max-width: 900px) {
  .why_grid {
    grid-template-columns: 1fr;
  }

  .why_card {
    min-height: 0;
    padding-top: clamp(72px, 14vw, 88px);
  }
}

/* ============================================
   关于我们（深底双色栏）
   ============================================ */
.about_strip {
  background: #020426;
  color: #ffffff;
  padding: clamp(48px, 8vw, 88px) clamp(20px, 4vw, 52px) clamp(56px, 9vw, 96px);
  margin-top: 0;
}

.about_strip__title {
  margin: 0 auto clamp(36px, 5vw, 48px);
  text-align: center;
  font-size: clamp(1.65rem, 3vw, 2.25rem);
  font-weight: 700;
  line-height: 1.25;
  color: #ffffff;
}

.about_strip__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(28px, 4vw, 48px);
  max-width: 1200px;
  margin: 0 auto;
  align-items: start;
}

.about_strip__photo {
  width: 100%;
  height: auto;
  display: block;
  vertical-align: top;
}

.about_strip__text {
  margin: 0 0 18px;
  font-size: clamp(14px, 1.45vw, 16px);
  line-height: 1.82;
  color: rgba(255, 255, 255, 0.96);
}

.about_strip__text:last-of-type {
  margin-bottom: 28px;
}

.about_strip__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
  padding: 12px 32px;
  background: #00c2b3;
  border: none;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-decoration: none;
  cursor: pointer;
  margin-top: 100px;
  margin-left: 20px;
  transition:
    filter 0.22s ease,
    transform 0.22s ease;
}

.about_strip__cta:hover {
  filter: brightness(1.06);
}

@media (max-width: 768px) {
  .about_strip__inner {
    grid-template-columns: 1fr;
  }

  .about_strip__cta {
    width: fit-content;
  }
}

/* ============================================
   认证证书（左文案 + 右证书展示）
   ============================================ */
.cert_panel {
  margin: 0;
  padding: 70px 0;
}

.cert_panel__inner {
  display: grid;
  grid-template-columns: minmax(220px, 1fr) minmax(0, 2.85fr);
  max-width: 1440px;
  margin: 0 auto;
  min-height: 0;
}

.cert_panel__intro {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: clamp(40px, 6vw, 80px) clamp(24px, 4vw, 52px);
}

.cert_panel__title {
  margin: 0 0 20px;
  font-size: clamp(1.65rem, 3.2vw, 2.5rem);
  font-weight: 700;
  line-height: 1.2;
  color: #000028;
}

.cert_panel__subtitle {
  margin: 0;
  font-size: clamp(15px, 1.5vw, 18px);
  font-weight: 500;
  line-height: 1.55;
  color: #6b6b6e;

  & + & {
    margin-top: 6px;
  }
}

.cert_panel__cta {
  align-self: center;
  margin-top: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 36px;
  background: #00cccc;
  border: none;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-decoration: none;
  cursor: pointer;
  transition:
    filter 0.22s ease,
    transform 0.22s ease;
}

.cert_panel__cta:hover {
  filter: brightness(1.06);
}

.cert_panel__gallery {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: clamp(14px, 2.2vw, 28px);
  padding: clamp(32px, 5vw, 56px) clamp(16px, 3vw, 40px);
  background: #00cccc;
}

.cert_card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex: 1 1 120px;
  min-width: 0;
  max-width: 200px;
}

.cert_card__frame {
  width: 100%;
  background: #ffffff;
  padding: 8px;
  box-shadow:
    0 6px 24px rgba(0, 0, 0, 0.12),
    0 0 0 1px rgba(255, 255, 255, 0.35) inset;
}

.cert_card__frame img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
}

.cert_card__label {
  font-size: clamp(14px, 1.25vw, 16px);
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.02em;
}

@media (max-width: 900px) {
  .cert_panel__inner {
    grid-template-columns: 1fr;
  }

  .cert_panel__intro {
    align-items: center;
    text-align: center;
  }

  .cert_card {
    flex: 1 1 calc(50% - 20px);
    max-width: 220px;
  }
}

@media (max-width: 480px) {
  .cert_card {
    flex: 1 1 100%;
    max-width: 280px;
  }
}

/* ============================================
   国际贸易（左图拼贴 + 右文案）
   ============================================ */
.trade_panel {
  padding: clamp(56px, 8vw, 88px) clamp(20px, 4vw, 52px);
  background: #f2f2f2;
}

.trade_panel__inner {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(0, 1fr);
  gap: clamp(28px, 4vw, 48px);
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
}

.trade_collage {
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(0, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: clamp(10px, 1.5vw, 16px);
  min-height: clamp(280px, 36vw, 400px);
}

.trade_collage__cell {
  overflow: hidden;
  background: #e8e8ea;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
}

.trade_collage__main {
  grid-column: 1;
  grid-row: 1 / -1;
  min-height: 0;
}

.trade_collage__top {
  grid-column: 2;
  grid-row: 1;
  min-height: 0;
}

.trade_collage__bottom {
  grid-column: 2;
  grid-row: 2;
  min-height: 0;
}

.trade_panel__content {
  min-width: 0;
}

.trade_panel__title {
  margin: 0 0 20px;
  font-size: clamp(1.65rem, 3vw, 2.35rem);
  font-weight: 700;
  line-height: 1.2;
  color: #000028;
}

.trade_panel__lead {
  margin: 0 0 22px;
  font-size: clamp(14px, 1.45vw, 16px);
  line-height: 1.82;
  color: #333;
}

.trade_panel__list {
  margin: 0 0 28px;
  padding: 0;
  list-style: none;
}

.trade_panel__list li {
  position: relative;
  margin-bottom: 10px;
  padding-left: 1.1em;
  font-size: clamp(14px, 1.4vw, 16px);
  line-height: 1.65;
  color: #333;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.65em;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #00cccc;
  }
}

.trade_panel__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 36px;
  background: #00cccc;
  border: none;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-decoration: none;
  cursor: pointer;
  transition:
    filter 0.22s ease,
    transform 0.22s ease;
}

.trade_panel__cta:hover {
  filter: brightness(1.06);
}

@media (max-width: 900px) {
  .trade_panel__inner {
    grid-template-columns: 1fr;
  }

  .trade_collage {
    max-width: 560px;
    margin: 0 auto;
    min-height: clamp(260px, 52vw, 360px);
  }
}

/* ============================================
   非标定制一站式合作服务流程（蛇形三行，7 列网格对齐）
   ============================================ */
.service_flow {
  padding: 0 clamp(16px, 4vw, 52px) clamp(72px, 10vw, 100px);
  background: #ebebec;
}

.service_flow__heading {
  margin-bottom: clamp(36px, 5vw, 52px);
}

.service_flow__zigzag {
  display: flex;
  justify-content: center;
  overflow-x: auto;
  padding-bottom: 4px;
}

.service_flow__grid {
  display: grid;
  grid-template-columns: repeat(7, max-content);
  column-gap: clamp(6px, 1.2vw, 14px);
  row-gap: 0;
  justify-content: center;
  align-items: start;
  min-width: min-content;
}

/* row3 与 row1 同样占用第 1～3 列，由模板 gridColumn 控制 */
.service_flow__step {
  width: 170px;
  text-align: center;
}

.service_flow__iconBox {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: clamp(10px, 1.5vw, 14px);
  aspect-ratio: 1;
  max-width: clamp(72px, 9vw, 96px);
  border-radius: 8px;
  box-sizing: border-box;
}

.service_flow__icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.service_flow__label {
  margin-top: 12px;
  padding: 10px 8px 12px;
  min-height: 2.85em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0a1931;
  color: #ffffff;
  font-size: 20px;
  font-weight: 550;
}

.service_flow__arrow {
  display: flex;
  align-items: center;
  align-self: center;
  padding: 0 2px;
  margin-top: -60px;
  img {
    display: block;
    width: 100px;
    height: auto;
    flex-shrink: 0;
  }
}

.service_flow__down {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(6px, 0.8vw, 10px) 0;
  justify-self: center;
}

/* 竖箭头略大于横箭头，避免对比过强 */
.service_flow__down--major img {
  display: block;
  width: 50px;
  height: auto;
  flex-shrink: 0;
}

.service_flow__stack {
  display: none;
  margin: 0;
  padding: 0;
  list-style: none;
  flex-direction: column;
  align-items: center;
  gap: 0;
}

.service_flow__stackItem {
  list-style: none;
  margin: 0;
  padding: 0;
}

.service_flow__stackArrow {
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 8px 0;

  img {
    display: block;
    width: clamp(28px, 6vw, 40px);
    height: auto;
  }
}

.service_flow__step--stack {
  width: min(280px, 100%);
}

.service_flow__step--stack .service_flow__iconBox {
  max-width: 88px;
}

@media (max-width: 960px) {
  .service_flow__zigzag {
    display: none;
  }

  .service_flow__stack {
    display: flex;
  }
}

/* ============================================
   标准运输流程（蛇形四行，参考非标服务流程网格）
   ============================================ */
.shipping_flow {
  padding: 0 clamp(16px, 4vw, 52px) clamp(72px, 10vw, 100px);
  background: #f2f2f2;
}

.shipping_flow__heading {
  margin-bottom: clamp(36px, 5vw, 52px);
}

.shipping_flow__zigzag {
  display: flex;
  justify-content: center;
  overflow-x: auto;
  padding-bottom: 4px;
}

.shipping_flow__grid {
  display: grid;
  grid-template-columns: repeat(7, max-content);
  column-gap: clamp(6px, 1.2vw, 14px);
  row-gap: 0;
  justify-content: center;
  align-items: start;
  min-width: min-content;
}

.shipping_flow__step {
  width: clamp(152px, 13vw, 200px);
  text-align: center;
}

.shipping_flow__photo {
  margin: 0 auto;
  padding: clamp(6px, 1vw, 10px);
  box-sizing: border-box;
  border: 1px dashed #a8a8a8;
  background: #fafafa;
}

.shipping_flow__img {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.shipping_flow__label {
  margin-top: 10px;
  padding: 10px 6px 12px;
  min-height: 3.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #000033;
  color: #ffffff;
  font-size: clamp(13px, 1.35vw, 16px);
  font-weight: 550;
  line-height: 1.35;
}

.shipping_flow__arrow {
  display: flex;
  align-items: center;
  align-self: center;
  padding: 0 2px;
  margin-top: -72px;

  img {
    display: block;
    width: clamp(72px, 8vw, 100px);
    height: auto;
    flex-shrink: 0;
  }
}

.shipping_flow__down {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(6px, 0.8vw, 10px) 0;
  justify-self: center;
}

.shipping_flow__down--major img {
  display: block;
  width: 50px;
  height: auto;
  flex-shrink: 0;
}

.shipping_flow__stack {
  display: none;
  margin: 0;
  padding: 0;
  list-style: none;
  flex-direction: column;
  align-items: center;
  gap: 0;
}

.shipping_flow__stackItem {
  list-style: none;
  margin: 0;
  padding: 0;
}

.shipping_flow__stackArrow {
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 8px 0;

  img {
    display: block;
    width: clamp(28px, 6vw, 40px);
    height: auto;
  }
}

.shipping_flow__step--stack {
  width: min(320px, 100%);
}

@media (max-width: 960px) {
  .shipping_flow__zigzag {
    display: none;
  }

  .shipping_flow__stack {
    display: flex;
  }
}

/* 合作伙伴展示（两列网格，依次排列） */
.partner_showcase__heading {
  margin-top: clamp(48px, 8vw, 72px);
  margin-bottom: clamp(28px, 4vw, 40px);
}

.partner_showcase {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(8px, 1.2vw, 14px);
  max-width: min(1100px, 100%);
  margin: 0 auto;
  padding: 0 0 clamp(48px, 8vw, 72px);
  list-style: none;
}

.partner_showcase__item {
  margin: 0;
  padding: 0;
}

.partner_showcase__frame {
  padding: clamp(6px, 1vw, 10px);
  box-sizing: border-box;
}

.partner_showcase__img {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.05);
  }
}

@media (max-width: 520px) {
  .partner_showcase {
    grid-template-columns: 1fr;
  }
}
</style>
