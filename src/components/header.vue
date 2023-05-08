<template>
  <div class="container1">
    <!-- 路由 -->
    <div class="router">
      <i class="el-icon-s-unfold" />
      <div style="width:5px" />
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="(item,index) in $store.state.breadcrumb" :key="index" :to="{ path: item.url }">
          {{ item.name }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 操作 -->
    <div class="operation">
      <el-tooltip class="item" effect="dark" placement="bottom">
        <div slot="content">
          <span style=" cursor: pointer" @click="dialogFormVisible = true">个人信息</span> <br><br>
          <span style=" cursor: pointer" @click="doExit">退出</span>
        </div>
        <i class="el-icon-s-operation" />
      </el-tooltip>
    </div>
    <el-dialog title="个人信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="账号" :label-width="formLabelWidth">
          <el-input v-model="form.userName" autocomplete="off" />
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off" />
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="form.email" autocomplete="off" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      dialogFormVisible: false,
      form: {},
      formLabelWidth: '80px'
    }
  },
  watch: {
    // 监听路由
    '$store.state.breadcrumb'(newVal, old) {
      console.log(newVal)
    }
  },
  mounted() {
    // console.log(this.$route)
    this.getname()
  },
  methods: {
    // 退出
    doExit() {
      this.$router.push('/login')
    },
    // 获取信息
    getname() {
      // this.form = JSON.parse(localStorage.getItem('usermes'))
    }

  }
}
</script>

<style lang="scss" scoped>
.container1{
   min-width: 1200px;
    width: 84%;
    height: 8vh;
    background-color: rgb(236, 244, 255);
    position: relative;
    margin-left: 16%;
    .router{
      position: absolute;
      left: 5px;
      height: 100%;
      font-size: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .operation {
      font-size: 25px;
      width: 60px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      float: right;
      cursor: pointer;
  }
    .exit :hover{
      color: rgb(92,182,255);
    }
}
</style>
