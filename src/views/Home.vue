<template>
  <div class="home">
    <p class="test">test fontSize</p>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {}
}
</script>
<style lang="scss" scoped>
@import '@css/style.scss';
.test {
  font-size: px2rem(16);
}
</style>
