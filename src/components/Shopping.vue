<template>
  <div class="shopping">
    <navigation-bar pageName="购物" :isShowBack="false"></navigation-bar>
    shopping
  </div>
</template>
<script>
import NavigationBar from '@c/currency/NavigationBar.vue'
export default {
  components: {
    NavigationBar
  }
}
</script>
<style lang="scss" scoped>
.shopping {
  width: 100%;
  height: 100%;
  font-size: 32px;
}
</style>
