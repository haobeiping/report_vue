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
      path: '/tijiao',
      name: 'tijiao',
      component: require('../views/tijiao.vue')
    },
    {
      path: '/selete',
      name: 'selete',
      component: require('../views/selete.vue')
    },

    {
    	path: '*',
    	redirect: '/index'
    },
    {
      path:'/successReport',
      name:'successReport',
      component: require('../views/successReport.vue')
    },
    {
      path: '/suredorm/:id',
      name: 'suredorm',
      component: require('../views/suredorm.vue')
    },{
      path:'/successReport',
      name:'successReport',
      component: require('../views/successReport.vue')
    }
  ]
})
