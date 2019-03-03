import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import vueRouter from  "@/components/vueRouter/index"

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
          }
      ]
    },
    {
      path: '/',
      name: 'Home',
     component: vueRouter
    }
    
  ]
})
