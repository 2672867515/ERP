<template>
  <div class="container">
    <!-- 头部 -->
    <Header />
    <!-- 侧边菜单 -->
    <Menu />
    <div class="view">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from '../../components/header'
import Menu from '../../components/menu'
export default {
  name: 'Layout',
  components: {
    Header,
    Menu
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.container{
  height: 100vh;
  width: 100vw;
  position: relative;
  min-height: 700px;
  .view{
    min-width: 1200px;
    position: absolute;
    left: 16%;
    top: 8vh;
    width: 84%;
    height: 92vh;
    background-color: rgb(245, 245, 247);
  }
}
</style>
