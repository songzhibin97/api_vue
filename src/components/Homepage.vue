<template>
  <!--引入导航栏插件-->
  <div class="Homepage">
    <div class="Homepage">
      <div class="panel panel-default">
        <div class="panel-heading"><h2>{{title}}</h2></div>
        <div class="row">
          <div class="panel-heading"><h3 class="text-center">萌宠</h3></div>
          <div class="col-xs-6 col-md-3">
            <a href="#" class="thumbnail">
              <img
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553023384897&di=4256132aaf96350bc8e2a57c91848a43&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F4%2F577f4f2a7da71.jpg"
                alt="...">
            </a>
          </div>
          <div class="col-xs-6 col-md-3">
            <a href="#" class="thumbnail">
              <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=530155107,117879191&fm=26&gp=0.jpg"
                   alt="...">
            </a>
          </div>
          <div class="col-xs-6 col-md-3">
            <a href="#" class="thumbnail">
              <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=884601630,4098431403&fm=26&gp=0.jpg"
                   alt="...">
            </a>
          </div>
          <div class="col-xs-6 col-md-3">
            <a href="#" class="thumbnail">
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=286015316,2167619311&fm=26&gp=0.jpg"
                   alt="...">
            </a>
          </div>
        </div>
        <div class="row">
          <div class="panel-heading"><h3 class="text-center">美女</h3></div>
          <div class="col-xs-6 col-md-3">
            <a href="#" class="thumbnail">
              <img
                src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=613889892,3605973321&fm=26&gp=0.jpg"
                alt="...">
            </a>
          </div>
          <div class="col-xs-6 col-md-3">
            <a href="#" class="thumbnail">
              <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=273219331,3646533867&fm=26&gp=0.jpg"
                   alt="...">
            </a>
          </div>
          <div class="col-xs-6 col-md-3">
            <a href="#" class="thumbnail">
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3357854538,1119331783&fm=26&gp=0.jpg"
                   alt="...">
            </a>
          </div>
          <div class="col-xs-6 col-md-3">
            <a href="#" class="thumbnail">
              <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3608565110,1942749038&fm=26&gp=0.jpg"
                   alt="...">
            </a>
          </div>
        </div>
        <div class="row">
          <div class="panel-heading"><h3 class="text-center">动漫</h3></div>
          <div class="col-xs-6 col-md-3">
            <a href="#" class="thumbnail">
              <img
                src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3913018478,2376258710&fm=26&gp=0.jpg"
                alt="...">
            </a>
          </div>
          <div class="col-xs-6 col-md-3">
            <a href="#" class="thumbnail">
              <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3388776739,2022059869&fm=26&gp=0.jpg"
                   alt="...">
            </a>
          </div>
          <div class="col-xs-6 col-md-3">
            <a href="#" class="thumbnail">
              <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4064374477,4288521591&fm=26&gp=0.jpg"
                   alt="...">
            </a>
          </div>
          <div class="col-xs-6 col-md-3">
            <a href="#" class="thumbnail">
              <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=889205416,3453795870&fm=26&gp=0.jpg"
                   alt="...">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.min.css'
  export default {
    name: "Homepage",
    data() {
      return {
        title: '首页',
        database: ['内容1', '内容2']
      }
    },
    components: {}
  }
</script>
<style scoped>
  body {
    background-color: #eeeeee;
  }
  h3 {
    color: #000;
  }
</style>
