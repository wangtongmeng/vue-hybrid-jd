<template>
  <!-- 只是提供了一个空间，用来存放活动的一个内容。不关心内容 -->
  <div class="activty">
    <!-- 插槽，展示活动内容 -->
    <slot></slot>
  </div>
</template>
<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@css/style.scss';

.activty {
  max-height: px2rem(160);
  position: relative;
  z-index: 2;
}
</style>
