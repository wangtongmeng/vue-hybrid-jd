<template>
  <div class="main">
    <component :is="currentComponent"></component>
    <tool-bar @onChangeFragment="onChangeFragment"></tool-bar>
  </div>
</template>
<script>
import ToolBar from '@c/ToolBar.vue'
export default {
  components: {
    ToolBar,
    // 异步组件引入方式, 异步组件：只有在需要去展示这个组件的时候，才会把组件去进行渲染。
    home: () => import('@c/Home'),
    shopping: () => import('@c/Shopping'),
    my: () => import('@c/My')
  },
  data() {
    return {
      currentComponent: 'home'
    }
  },
  methods: {
    onChangeFragment(componentName) {
      this.currentComponent = componentName
    }
  }
}
</script>
<style lang="scss" scoped>
  .main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
