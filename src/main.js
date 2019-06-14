// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import Element from 'element-ui'
import VueCookies from 'vue-cookies'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueCookies); // 注册VueCookie
Vue.use(Element, {size: 'small', 'zIndex': 3000});
Vue.prototype.$axios = axios; // 在全局变量中设置了 $axio s= axios 后面使用的时候直接使用this.$axios
Vue.config.productionTip = false;
// 注册vuex
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    username: VueCookies.get('username'), // 动态获取username
    user_token: VueCookies.get('token'), // 动态获取token值
    course: {}, // 设置空对象用于获取后端course值
    course_datails: {}  // 设置空对象用于获取后端course_datails值
  },
  getters: {
    get_course(state) {   // 计算属性动态获取course值
      return state.course
    },
    get_course_datails(state) {   // 计算属性动态获取course_datails值
      return state.course_datails
    }
  },
  mutations: { // 变更状态 // 赋值操作
    change_course(state, course) {
      state.course = course
    },
    change_course_datails(state, course_datails) {
      state.course_datails = course_datails
    },
    change_token(state) {
      state.username = VueCookies.get('username')
      state.user_token = VueCookies.get('token')
    },
  },
  actions: {     // 异步操作获取并赋值操作
    send_course_ajax(state, _this) {
      _this.$axios.request({
        url: 'http://127.0.0.1:8000/vue_demo/v1/course/',
        method: 'GET',
      }).then(function (course) {
        if (course.data.code == 1000) { // 判断状态码是否正确
          state.commit('change_course', course.data)
        } else {
          alert(course.data.error)
        }
      }).catch(function () {
        alert('网络异常')
      })
    },
    send_course_datails_ajax(state, _this) {
      _this.$axios.request({
        url: "http://127.0.0.1:8000/vue_demo/v1/course_datails/" + _this.$route.params.id,
        method: 'GET',
      }).then(function (course_datails) {
        if (course_datails.data.code == 1000) {
          state.commit('change_course_datails', course_datails.data)
        } else {
          alert(course_datails.data.error())
        }
      }).catch(function () {
        alert('网络异常')
      })
    },
    set_cookie(state, data) {

      data._this.$cookies.set('username', data.username, '20min')
      data._this.$cookies.set('token', data.token, '20min')
      state.commit('change_token')
    },
    clear_cookie(state) {
      VueCookies.remove('username');
      VueCookies.remove('token');
      state.commit('change_token')
    },
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});

router.beforeEach(function (to, from, next,) {
  if (to.meta.requireAuth) {
    if (store.state.user_token) {
      next()
    } else {
      next({name: 'Login', query: {backURL: to.fullPath}})
    }
  } else {
    next()
  }
});
