import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Order from '../views/Order/Order.vue'


Vue.use(VueRouter)

const routes = [
{
  path: '/',
  name: 'Home',
  component: Home
},

{
  path: '/order',
  name: 'Order',
  component: Order,
  //需要验证登陆
  meta: {requiresAuth: true}
},

{
  path: '/personal',
  name: 'Personal',
  //按需加载
  component: () => import('../views/Personal/Personal.vue')
},

{
  path: '/courseDetail',
  name: 'CourseDetail',
  component: () => import('../views/CourseDetail/CourseDetail.vue')
},

{
  path: '/login',
  name: 'Login',
  component: () => import('../views/Login/Login.vue')
},

{
  path: '/register',
  name: 'Register',
  component: () => import('../views/Register/Register.vue')
},

{
  path: '/pay',
  name: 'Pay',
  component: () => import('../views/Pay/Pay.vue'),
    //需要验证登陆
  meta: {requiresAuth: true}
},


]

const router = new VueRouter({
  routes
})

export default router
