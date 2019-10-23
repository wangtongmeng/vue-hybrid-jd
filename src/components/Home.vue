<template>
  <div class="home" @scroll="onScrollChange" >
    <navigation-bar :isShowBack="false" :navBarStyle="navBarStyle">
      <!-- 左侧插槽 -->
      <template v-slot:nav-left>
        <img :src="navBarCurrentSlotStyle.leftIcon" alt="">
      </template>
      <!-- 中间插槽 -->
      <template v-slot:nav-center>
        <search
        :bgColor="navBarCurrentSlotStyle.search.bgColor"
        :hintColor="navBarCurrentSlotStyle.search.hintColor"
        :icon="navBarCurrentSlotStyle.search.icon"></search>
      </template>
      <!-- 右侧插槽 -->
      <template v-slot:nav-right>
        <img :src="navBarCurrentSlotStyle.rightIcon" alt="">
      </template>
    </navigation-bar>
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
      <!-- 商品列表 -->
      <goods :layoutType="'3'" :isScroll="false"></goods>
    </div>
  </div>
</template>
<script>
import MySwiper from '@c/swiper/MySwiper.vue'
import Activity from '@c/currency/Activity.vue'
import ModeOptions from '@c/currency/ModeOptions.vue'
import Seconds from '@c/seconds/Seconds.vue'
import Goods from '@c/goods/Goods.vue'
import NavigationBar from '@c/currency/NavigationBar.vue'
import Search from '@c/currency/Search.vue'

export default {
  components: {
    MySwiper,
    Activity,
    ModeOptions,
    Seconds,
    Goods,
    NavigationBar,
    Search
  },
  data() {
    return {
      swiperData: [],
      swiperHeight: '184px',
      activityDatas: [],
      secondsDatas: [],
      // navBar 插槽的样式数据，包含页面未开始滑动的时候插槽的样式 (默认样式)
      // 和 页面滑动到锚定点之后的插槽的样式（高亮样式）
      navBarSlotStyle: {
        // 默认样式
        normal: {
          // 左侧插槽
          leftIcon: require('@img/more-white.svg'),
          // 中间插槽
          search: {
            bgColor: '#ffffff',
            hintColor: '#999999',
            icon: require('@img/search.svg')
          },
          // 右侧插槽
          rightIcon: require('@img/message-white.svg')
        },
        // 高亮样式
        highlight: {
          // 左侧插槽
          leftIcon: require('@img/more.svg'),
          // 中间插槽
          search: {
            bgColor: '#d7d7d7',
            hintColor: '#ffffff',
            icon: require('@img/search-white.svg')
          },
          // 右侧插槽
          rightIcon: require('@img/message.svg')
        }
      },
      // navBar 当前使用的插槽样式
      navBarCurrentSlotStyle: {},
      // navBar 的定制样式,
      navBarStyle: {
        position: 'fixed',
        backgroundColor: ''
      },
      // 记录页面滚动值
      scrollTopValue: -1,
      // 锚点值
      ANCHOR_SCROLL_TOP: 160
    }
  },
  created() {
    this.navBarCurrentSlotStyle = this.navBarSlotStyle.normal
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
            this.secondsDatas = secondsData.list
          })
        )
    },
    /**
     * 监听页面滚动
     * 1、获取到当前页面滚动的距离
     * 2、计算 navBar 背景颜色（navBar 背景透明度）
     *      当前滚动的距离 / 锚点值 = navBar 背景透明度  opacity
     * 3、opacity >= 1 ， 当前滚动的距离 已经等于或者超过了 锚点值，当前 navBar 插槽的样式变为 高亮状态的样式。
     *  否则的话 opacity < 1 ,当前 navBar 插槽的样式，为 默认状态的样式
     */
    onScrollChange($event) {
      // 获取到当前页面滚动的距离
      this.scrollTopValue = $event.target.scrollTop
      // 计算 navBar 背景颜色（navBar 背景透明度）
      let opacity = this.scrollTopValue / this.ANCHOR_SCROLL_TOP
      // 指定 narBar 插槽样式
      if (opacity >= 1) {
        this.navBarCurrentSlotStyle = this.navBarSlotStyle.highlight
      } else {
        this.navBarCurrentSlotStyle = this.navBarSlotStyle.normal
      }

      // 根据透明比例来设置 navBar 的背景颜色
      this.navBarStyle.backgroundColor = 'rgba(255, 255, 255, ' + opacity + ')'
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
