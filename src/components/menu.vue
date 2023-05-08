<template>
  <div class="container1">
    <!-- 头像 -->
    <div class="user">
      <div id="lottie_box" class="animation" />
      <div class="username">{{ usermes.name }}</div>
    </div>
    <!-- 菜单 -->
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          default-active="/index/home"
          class="el-menu-vertical-demo"
          router
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="/index/home">
            <i class="el-icon-s-home" />
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item v-if="usermes.userPost=='管理员'" index="/index/adminshop">
            <i class="el-icon-s-shop" />
            <span
              slot="title"
              @mouseenter="mouseen"
              @mouseleave="mousele"
            >门店管理
              <i
                v-show="addshow"
                class="el-icon-circle-plus-outline"
                @mouseenter="mouseen"
                @mouseleave="mousele"
                @click="addshop"
              /></span>
          </el-menu-item>
          <el-submenu v-if="usermes.userPost!=='管理员'" index="shop">
            <template slot="title">
              <i class="el-icon-s-shop" />
              <span>门店管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/index/shop">
                <span>门店信息</span>

              </el-menu-item>
              <!-- <el-menu-item index="/index/passenger">客流量预测</el-menu-item> -->
              <el-menu-item index="/index/message">消息通知</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item v-if="usermes.userPost!=='管理员'" index="/index/employee">
            <i class="el-icon-user" />
            <span slot="title">员工管理</span>
          </el-menu-item>
          <el-submenu v-if="usermes.userPost!=='管理员'" index="1">
            <template slot="title">
              <i class="el-icon-date" />
              <span>智能排班</span>
            </template>
            <el-menu-item index="/index/table">排班表</el-menu-item>
            <el-menu-item index="/index/rule">规则维护</el-menu-item>
          </el-submenu>
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
  comments: {
    lottie
  },
  data() {
    return {

      usermes: {},
      addshow: false,
      adddialog: false,
      form: {
        name: '',
        address: '',
        area: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入门店名称', trigger: 'blur' }
        ],
        area: [
          { required: true, message: '请输入门店面积/平方米', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请填写门店地址', trigger: 'blur' }
        ]
      }

    }
  },
  created() {
    this.getmenu()
  },
  mounted() {
    this.$nextTick(() => {
      this.$lottie.loadAnimation({
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
    },
    mouseen() {
      this.addshow = true
    },
    mousele() {
      this.addshow = false
    },
    addshop() {
      this.adddialog = true
    },
    confirm() {
      this.$refs.ruleForm.validate(res => {
        if (res) {
          console.log('ok')
          // addShop(this.form).then(res => {
          //   console.log(res)
          //   this.adddialog = false
          // })
        }
      })
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
