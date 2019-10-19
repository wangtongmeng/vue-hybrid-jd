<template>
  <div class="tool-bar">
    <div class="tool-bar-item" v-for="(item, index) in toolBarData" :key="index" @click="onChangeFragment(item, index)">
      <!-- 当当前 img 标签的 index === 选中tab的index 的时候，就让 img 显示高亮图片 -->
      <img class="tool-bar-item-img" :src="index === selectItemIndex ? item.hIcon : item.nIcon" alt="">
      <!-- 当当前 p 标签的 index === 选中tab的index 的时候，就让 p 添加高亮状态的类  tool-bar-item-name-h -->
      <p class="tool-bar-item-name" :class="{'tool-bar-item-name-h': index === selectItemIndex}">{{ item.name }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // tab 按钮数据源
      toolBarData: [
        {
          // 默认状态下的图片
          nIcon: require('@img/home-n.svg'),
          // 高亮状态下的图片
          hIcon: require('@img/home-h.svg'),
          // 名称
          name: '首页',
          // 组件名称
          componentName: 'home'
        },
        {
          // 默认状态下的图片
          nIcon: require('@img/shopping-n.svg'),
          // 高亮状态下的图片
          hIcon: require('@img/shopping-h.svg'),
          // 名称
          name: '购物车',
          // 组件名称
          componentName: 'shopping'
        },
        {
          // 默认状态下的图片
          nIcon: require('@img/my-n.svg'),
          // 高亮状态下的图片
          hIcon: require('@img/my-h.svg'),
          // 名称
          name: '我的',
          // 组件名称
          componentName: 'my'
        }
      ],
      // 选中的 tab 按钮
      selectItemIndex: 0
    }
  },
  methods: {
    onChangeFragment(item, index) {
      this.selectItemIndex = index
      this.$emit('onChangeFragment', item.componentName)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@css/style.scss';
.tool-bar {
  width: 100%;
  height: px2rem(46);
  display: flex;
  justify-content: space-around;
  background: white;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.2);
  border-top: 1px solide $lineColor;
  &-item {
    text-align: center;
    padding: px2rem(4) 1px2rem (12);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &-img {
      width: px2rem(22);
      height: px2rem(22);
    }

    &-name {
      font-size: $infoSize;
      margin: px2rem(4);

      &-h {
        color: $mainColor;
      }
    }
  }
}
</style>
