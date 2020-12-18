import Vue from 'vue'
import Router from 'vue-router'
import render from '@/components/2、在单文件组件中的时候/render'

import createElement from '@/components/3、createElement方法的参数/createElement'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/render',
      name: 'render',
      component: render,
      children:[]
    },
      {path:'/createElement',name:"createElement",component:createElement}
  ],
  mode:'history'

})
