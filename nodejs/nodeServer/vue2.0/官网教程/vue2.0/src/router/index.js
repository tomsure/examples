import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import vueRouter from  "@/components/Ecosystem/CorePlugIn/vueRouter/index"
import Vuexx from  "@/components/Ecosystem/CorePlugIn/vuex/index"
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {
          path: '/vueRouter',
          name: 'vueRouter',
          component: vueRouter
         },
         {
          path: '/vuex',
          name: 'vuex',
          component: Vuexx
         },
      ]
    },
    ]
})
