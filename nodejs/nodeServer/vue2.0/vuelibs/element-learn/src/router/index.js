import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import customValidate from '@/components/form/customValidate'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
     {
      path: '/customValidate',
      name: 'customValidate',
      component: customValidate
    }
  ]
})
