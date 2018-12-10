// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'


// require styles
import 'swiper/dist/css/swiper.css'
// import 'swiper/dist/js/swiper.js'

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
