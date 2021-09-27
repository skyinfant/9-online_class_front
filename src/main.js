import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'

//阻止启动生产消息，常用作指令。
// Vue.config.productionTip = false

//遍历每一个路由
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  //根据store/index.js中的配置，判断该路由是否需要登陆验证，需要就返回true，进行验证
  if (to.matched.some(record => record.meta.requiresAuth)) {
    //有token，放行，进入后端拦截器，验证token是否合法，合法才可访问后端接口
    if (token) {
      next()
    } else {
      //没有token，肯定未登录，让其跳转到登陆页面
      next({ path: '/login' })
    }
    //不需验证登陆，放行
  } else {
    next()
  }

})


//因为这里把router和store注入了，所以其他地方可以使用$router,$store
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
