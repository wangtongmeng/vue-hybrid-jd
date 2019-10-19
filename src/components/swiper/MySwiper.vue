<template>
  <!--
    1. 需要一个 swiper
    2. swiper 里面的滑动模块 swiperSlide
    3. 分页器配置：插槽（slot）配置分页器
   -->
  <swiper :options="swiperOptions">
    <swiper-slide v-for="(item, index) in swiperImgs" :key="index">
      <img class="swiper-slide-img" :style="{ height: height }" :src="item" alt="">
    </swiper-slide>
    <template v-slot:pagination>
      <div class="swiper-pagination"></div>
    </template>
  </swiper>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: {
    // slide 高度
    height: {
      type: String,
      default: 'auto'
    },
    // 数据源
    swiperImgs: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      // swiper 配置
      swiperOptions: {
        // 自动滚动
        autoplay: true,
        // swiper 高度 跟随 slide 高度变化
        autoHeight: true,
        // 分页器设置效果
        pagination: {
          // 分页器对应的 html 元素
          el: '.swiper-pagination',
          // 分页器的样式
          type: 'bullets',
          // 分页器内的元素，添加类名
          bulletClass: 'custom-bullet-class'
        }
      }
    }
  }
}
</script>
<style lang="scss">
@import '@css/style.scss';
// 图片的宽度
.swiper-slide-img {
  width: 100%;
}

// 圆点分页器
.swiper-pagination {
  bottom: px2rem(12);
  .custom-bullet-class {
    box-sizing: border-box;
    border-radius: 100%;
    height: px2rem(6);
    width: px2rem(6);
    border: px2rem(1) solid #fff;
    margin: 0 px2rem(4);
    display: inline-block;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background: white;
  }
}
</style>
