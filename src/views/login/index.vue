<template>
  <div>
    <div ref="vantaRef" class="login">
      <div class="login-content">
        <div class="form">
          <div class="top1">
            <span class="sp1"> ERP管理系统</span>
            <span class="sp1">|</span>
            <span class="sp2">登录</span>
          </div>
          <div class="next1">
            <div class="in">
              <div :class="isclick?'usertipactive':'usertip'">用户名</div>
              <el-input
                v-model="login.username"
                prefix-icon="el-icon-user"
                @focus="userin"
                @blur="userleave"
              />
            </div>

            <div class="in">
              <div :class="isclick2?'usertipactive':'usertip'">密码</div>
              <el-input
                v-model="login.password"
                type="password"
                show-password
                prefix-icon="el-icon-key"
                @keyup.enter.native="loginsus"
                @focus="passin"
                @blur="passleave"
              />
            </div>

            <div class="but">
              <el-button type="primary" @click="loginsus">登录</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three'
import BIRDS from 'vanta/src/vanta.clouds'
import { login } from '../../api/api'
import { setToken } from '../../utils/cookie'
export default {

  name: 'Login',
  data() {
    return {
      login: {
        username: '',
        password: ''
      },
      isclick: false,
      isclick2: false,
      type: ''

    }
  },
  mounted() {
    this.vantaEffect = BIRDS({
      el: this.$refs.vantaRef,
      THREE: THREE
    })
  },
  beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy()
    }
  },

  methods: {

    async   loginsus() {
      // this.$router.push('/layout')
      await login(this.login).then(res => {
        console.log(res)
        if (res.data.code === 200) {
          this.$message({
            type: 'success',
            message: '登陆成功'
          })
          setToken('token', res.data.data.token)
          this.$router.push('/layout')
        }
      })
    },
    userin() {
      this.isclick = true
    },
    userleave() {
      if (this.login.user === '') {
        this.isclick = false
      }
    },
    passin() {
      this.isclick2 = true
    },
    passleave() {
      if (this.login.password === '') {
        this.isclick2 = false
      }
    }
  }
}
</script>
<style  lang="scss" scoped>

.usertip{
    position: absolute;
    top: 10px;
    left: 35px;
    z-index: 10;
    pointer-events: none;
    transition: 300ms ;
}
.passwordtip{
    pointer-events: none;
      position: absolute;
    top: 10px;
    left: 35px;
    z-index: 10;
}
.usertipactive{
      position: absolute;
    top:-20px;
    left: 0;
    color: rgb(48,178,235);
    font-weight: bold;
    transition: 300ms ;
     z-index: 10;
}

.but{
    margin-top: 30px;
}
.in{
    margin-top: 40px;
    position: relative;
}
.next1{
    margin-top: 50px;
    height: 200px;
}
.sp2{
    color: rgb(48,178,235);
    margin-left: 15px;
    font-size: 20px;
}
.sp1{
font-size: 30px;
 font-weight: bolder;
   color: rgb(48,178,235);
    margin-left: 15px;
}
.form{
    width: 400px;
    height: 375px;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 20px;
    text-align: center;
    font-size: 15px;
}
.login{
    overflow: hidden;
    min-width: 1260px;
    min-height: 500px;
    background-size:100% 100%;
    width: 100%;
    height: 100vh;
    position: relative;
}
.login-content{
    width: 30%;
    height: 50%;
    /* border-bottom-left-radius: 50%;
    border-top-left-radius: 50%; */
    border-radius: 50px;
    background-color: rgb(255, 255, 255,0.3);
    position: absolute;
    left:50%;
    top: 25%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
