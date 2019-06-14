<template>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <a class="navbar-brand" href="#">Brand</a>
      </div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li v-for="(navigation_link,index) in navigation_links" @click="pitch_click(index)"
              :class="[link_index===index ? actives : '']">
            <router-link :to="navigation_link.url">
              {{navigation_link.title}}
            </router-link>
          </li>
        </ul>
        <ul v-if="get_cookie" class="nav navbar-nav navbar-right">
          <li><a class="btn btn-link">{{get_username}}</a></li>
          <li><a @click="logout" class="btn btn-link">注销</a></li>
        </ul>
        <ul v-else class="nav navbar-nav navbar-right">
          <li>
            <router-link to="/login">登录</router-link>
          </li>
          <li><a href="#">注册</a></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>
<script>
  import 'bootstrap/dist/css/bootstrap.min.css'

  export default {
    data() {
      return {
        navigation_links: [
          {
            title: '首页',
            url: '/'
          },
          {
            title: '课程',
            url: '/course'
          },
          {
            title: '微职位',
            url: '/micro_position'
          },
          {
            title: '深科技',
            url: '/deep_science'
          },
        ],
        link_index: 0,
        actives: "active",
      }
    },
    methods: {
      pitch_click(index) {
        this.link_index = index
      },
      logout() {
        this.$store.dispatch('clear_cookie');
        alert('退出成功');
        this.$router.push({name:'Homepage'})
      }
    },
    created() {
      for (var i = 0; i <
      this.navigation_links.length; i++
      ) {
        if (this.navigation_links[i].url == this.$route.path) {
          this.link_index = i
        }
      }
    },
    computed:{
      get_cookie(){
        return this.$store.state.user_token
      },
      get_username(){
        return this.$store.state.username
      }
    }
  }
</script>
<style scoped>
  nav {
    margin-bottom: 0;
  }
</style>
