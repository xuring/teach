// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import $ from 'jquery'
import 'bootstrap'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// require styles
import 'swiper/dist/css/swiper.css'
import axios from 'axios'
import VueResource from 'vue-resource'
Vue.prototype.axios = axios

Vue.use(VueResource)
Vue.use(ElementUI)

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
// 安装插件
Vue.use(VueRouter)// 挂载属性

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
