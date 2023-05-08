<template>
  <div class="container1">
    <!-- 头像 -->
    <div class="user">
      <div id="lottie_box" class="animation" />
      <div class="username">辉柱大人</div>
    </div>
    <!-- 菜单 -->
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          default-active="/layout/home"
          class="el-menu-vertical-demo"
          router
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="/layout/home">
            <i class="el-icon-s-home" />
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu v-if="usermes.userPost!=='管理员'" index="system">
            <template slot="title">
              <i class="el-icon-s-shop" />
              <span>系统管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/layout/department">
                <span>部门管理</span>
              </el-menu-item>
              <el-menu-item index="/layout/employee">
                <span>员工管理</span>
              </el-menu-item>
              <el-menu-item index="/layout/enterprise">
                <span>业务公司管理</span>
              </el-menu-item>

            </el-menu-item-group>
          </el-submenu>
          <!-- <el-menu-item v-if="usermes.userPost!=='管理员'" index="/index/employee">
            <i class="el-icon-user" />
            <span slot="title">员工管理</span>
          </el-menu-item> -->

        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { menu } from '../api/api'
import lottie from 'lottie-web'
export default {
  name: 'Menu',

  data() {
    return {
      // animation: {},
      usermes: {},
      addshow: false,
      adddialog: false,
      form: {
        name: '',
        address: '',
        area: ''
      }

    }
  },
  created() {
    this.getmenu()
  },
  mounted() {
    this.$nextTick(() => {
      lottie.loadAnimation({
        container: document.getElementById(`lottie_box`), // 包含动画的dom元素
        renderer: 'svg', // 渲染出来的是什么格式
        loop: true, // 循环播放
        autoplay: true, // 自动播放
        animationData: require('../static/lottie/management.json') // 动画json的本地路径
        // path:''//网络json地址, 选择 animationData 后，则不用path了，
      })
    })
  },
  methods: {
    // 获取信息
    getmenu() {
      menu().then(res => {
        console.log(res)
      })
    },
    // 展开目录
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    // 关闭目录
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.container1{
    width: 16%;
    height: 100%;
    background-color: rgb(252,251,254);
    overflow-y: auto;
    margin-top: -8vh;
    .user{
        width: 100%;
        height: 160px;
        position: relative;
        .animation{
            width: 40%;
            height: 70%;
            border-radius: 50%;
            position: absolute;
            left: 30%;
            top: 5%;
        }
        .username{
            position: absolute;
            bottom:10%;
            width: 100%;
            text-align: center;
            font-size: 20px;
            font-weight: bold;
        }
    }
}
</style>
