<template>
  <div>
    <div class="goods-list-page">
      <navigation-bar @onLeftClick="onBackClick" :pageName="'商品列表'"></navigation-bar>

      <div class="goods-list-page-content">
        <goods-options></goods-options>
      </div>
    </div>
  </div>
</template>
<script>
import NavigationBar from '@c/currency/NavigationBar.vue'
import GoodsOptions from '@c/goods/GoodsOptions.vue'
export default {
  components: {
    NavigationBar,
    GoodsOptions
  },
  methods: {
    onBackClick() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "@css/style.scss";

  .good-list-page {
    height: 100%;
    width: 100%;
    background-color: $bgColor;
    display: flex;
    flex-direction: column;

    &-content {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  }

</style>
