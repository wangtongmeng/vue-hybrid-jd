<template>
  <div class="home">
    <div class="home-content">
      <!-- swiper -->
      <my-swiper :swiperImgs="swiperData" :height="swiperHeight"></my-swiper>
      <!-- 520 活动 -->
      <Activity>
        <div class="activity-520">
          <img v-for="(item, index) in activityDatas" :key="index" :src="item.icon" alt="">
        </div>
      </Activity>
      <!-- 功能选项 -->
      <mode-options></mode-options>
      <!-- 秒杀模块 -->
      <seconds :dataSource="secondsDatas"></seconds>
      <!-- 拼购节 -->
      <activity>
        <div class="activity-pin-gou-jie">
          <img src="@img/pinGouJie.gif" />
        </div>
      </activity>
    </div>
  </div>
</template>
<script>
import MySwiper from '@c/swiper/MySwiper.vue'
import Activity from '@c/currency/Activity.vue'
import ModeOptions from '@c/currency/ModeOptions.vue'
import Seconds from '@c/seconds/Seconds.vue'

export default {
  components: {
    MySwiper,
    Activity,
    ModeOptions,
    Seconds
  },
  data() {
    return {
      swiperData: [],
      swiperHeight: '184px',
      activityDatas: [],
      secondsDatas: []
    }
  },
  created() {
    this.initData()
  },
  methods: {
    // 获取数据
    initData() {
      // this.$http.get('/swiper')
      //   .then(data => {
      //     this.swiperData = data.list.map(item => item.icon)
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
      // // 520活动数据
      // this.$http.get('/activitys')
      //   .then(data => {
      //     this.activityDatas = data.list
      //   })

      // axios 同时发送多个请求（并行）
      this.$http
        .all([
          this.$http.get('/swiper'),
          this.$http.get('/activitys'),
          this.$http.get('/seconds')
        ])
        .then(
          this.$http.spread((swiperData, activityData, secondsData) => {
            this.swiperData = swiperData.list.map(item => item.icon)
            this.activityDatas = activityData.list
            console.log(secondsData.list)
            this.secondsDatas = secondsData.list
          })
        )
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@css/style.scss';
.home {
  width: 100%;
  height: 100%;
  background-color: $bgColor;
  overflow: hidden;
  overflow-y: auto;
  &-content {
    height: 100%;

    .activity-520 {
      margin-top: px2rem(-8);
      border-top-left-radius: px2rem(8);
      border-top-right-radius: px2rem(8);

      img {
        display: inline-block;
        width: 33.33%;
      }
    }

    .activity-pin-gou-jie {
      background-color: white;
      margin-top: $marginSize;

      img {
        width: 100%;
      }
    }
  }
}
</style>
