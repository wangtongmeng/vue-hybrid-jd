<template>
  <div class="seconds">
    <div class="seconds-wrap">
      <p class="seconds-wrap-title">京东秒杀</p>
      <!-- 倒计时模块组件 -->
      <count-down :endHours="16"></count-down>
    </div>
    <div class="seconds-content">
      <div class="seconds-content-item" v-for="(item, index) in dataSource" :key="index">
        <img :src="item.icon" alt="" class="seconds-content-item-icon">
        <p class="seconds-content-item-price">￥{{item.price | priceValue}}</p>
        <p class="seconds-content-item-old-price">￥{{item.oldPrice | priceValue}}</p>
      </div>
    </div>

  </div>
</template>
<script>
import CountDown from '@c/seconds/CountDown.vue'
export default {
  components: {
    CountDown
  },
  props: {
    dataSource: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@css/style.scss';
.seconds {
  background-color: white;
  border-radius: $radiusSize;
  margin: $marginSize;

  &-wrap {
    display: flex;
    padding: $marginSize;

    &-title {
      font-size: $titleSize;
      display: inline-block;
    }
  }

  &-content {
    padding: $marginSize 0;
    display: flex;
    overflow: hidden;
    overflow-x: scroll;

    &-item {
      padding: 0 px2rem(12);
      text-align: center;

      &-icon {
        width: px2rem(66);
        height: px2rem(66);
      }

      &-price {
        color: $mainColor;
        font-size: $titleSize;
        margin-top: px2rem(4);
      }

      &-old-price {
        color: $hintColor;
        font-size: $infoSize;
        margin-top: $marginSize;
        text-decoration: line-through;
      }
    }
  }
}
</style>
