import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/5、选项-生命周期钩子/10、整体demo'
import watchDataChange from '@/components/3、选项-数据/6、watch（观察者、监听）/2、监听数据变化/watchDataChange'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/all',
      name: 'all',
      component: HelloWorld
    },
    {
      path: '/watchDataChange',
      name: 'watchDataChange',
      component: watchDataChange
    }
  ]
})
