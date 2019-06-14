import Vue from 'vue'
import Router from 'vue-router'
import Course from '@/components/Course_vue'
import Course_datails from '@/components/Course_datails_vue'
import Homepage from '@/components/Homepage'
import Login from '@/components/Login'
import Micro_position from '@/components/Micro_position'
import Deep_science from '@/components/Deep_science'

Vue.use(Router);

export default new Router({
  routes: [
    {  // 主页
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    { // 课程
      path: '/course',
      name: 'Course',
      component: Course
    },
    { // 课程详情
      path: '/course_datails/:id',
      name: 'Course_datails',
      component: Course_datails
    },
    { // 微职业
      path: '/micro_position',
      name: 'Micro_position',
      component: Micro_position,
      meta: {
        requireAuth: true
      }
    },
    { // 深科技
      path: '/deep_science',
      name: 'Deep_science',
      component: Deep_science
    },
    { // 登录
      path: '/login',
      name: 'Login',
      component: Login
    },
  ],
  mode: 'history'
})
