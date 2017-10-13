import Vue from 'vue'
//引用路由，并使用路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//入口文件
import App from './App'
//引用路由配置文件
import routes from './router/routes'
//import router from './router'

Vue.config.productionTip = false

const router = new VueRouter({
	mode:'history',
	routes
})


new Vue({
  el: '#app',
  router,
  render:(h) =>h(App)
})
