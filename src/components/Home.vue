<template>
  <div class="home">
    <!-- swiper -->
    <my-swiper :swiperImgs="swiperData" :height="swiperHeight"></my-swiper>
  </div>
</template>
<script>
import MySwiper from '@c/swiper/MySwiper.vue'
export default {
  components: {
    MySwiper
  },
  data() {
    return {
      swiperData: [],
      swiperHeight: '184px'
    }
  },
  created() {
    this.initData()
  },
  methods: {
    // 获取数据
    initData() {
      this.$http.get('/swiper').then(data => {
        this.swiperData = data.list.map(item => item.icon)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  &-content {
    height: 100%;
  }
}
</style>
