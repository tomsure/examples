import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import customValidate from '@/components/form/customValidate'
import Files from '@/components/form/fileAdd'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect:'/files',
      component: HelloWorld
    },
     {
      path: '/customValidate',
      name: 'customValidate',
      component: customValidate
    },
     {
      path: '/files',
      name: 'files',
      component: Files
    }
  ]
})
