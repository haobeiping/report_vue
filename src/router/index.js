import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: require('../views/Index.vue')
    },
    {
      path: '/reporter',
      name: 'reporter',
      component: require('../views/Reporter.vue')
    },
    {
    	path: '*',
    	redirect: '/index'
    }
  ]
})
