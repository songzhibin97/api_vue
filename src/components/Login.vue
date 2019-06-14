<template>
  <el-container>
    <el-header class="text-center"><h3>登录</h3></el-header>
    <el-main>
      <div class="row">
        <div class="col-md-4 col-md-offset-4">
          <el-input v-model="input_username" placeholder="请输入账号" size="300px"></el-input>
        </div>
        <div class="col-md-4 col-md-offset-4">
          <el-input placeholder="请输入密码" v-model="input_password" show-password size="300px"></el-input>
        </div>
        <div class="col-md-1 col-md-offset-4">
          <el-button plain size="medium" class="col-md-12" @click="submit_login">登录</el-button>
        </div>

        <div class="col-md-1 col-md-offset-2">
          <el-button type="info" plain size="medium" class="col-md-12">返回</el-button>

        </div>


      </div>


    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        input_username: '',
        input_password: '',
      }
    },
    methods: {
      submit_login() {
        var _this = this
        this.$axios.request({
          url: 'http://127.0.0.1:8000/vue_demo/v1/login/',
          method: 'POST',
          data: {
            username: this.$data.input_username,
            password: this.input_password
          },
          headers: {
            'Content-Type': 'application/json'
          },
        }).then(function (data) {
          if (data.data.code == 1000) {
            _this.$store.dispatch('set_cookie', {
              '_this': _this,
              'username': data.data.username,
              'token': data.data.token
            });
            alert('登录成功');
            if (_this.$route.query.backURL) {
              _this.$router.push({path:_this.$route.query.backURL})
            }else{
              _this.$router.push({name:'Homepage'})
            }
          } else {
            alert(data.data.error)
          }
        }).catch(function (data) {
          alert(data)
        })
      }
    }
  }
</script>

<style scoped>
  .el-input {
    margin-bottom: 20px;
  }

  span {
    padding-left: 0;
  }

</style>
