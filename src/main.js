// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import 'weui'
Vue.config.productionTip = false
import VueResource from 'vue-resource'
import './assets/css/style.css'
Vue.use(VueResource) 

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
