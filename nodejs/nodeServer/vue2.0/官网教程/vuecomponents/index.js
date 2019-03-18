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
          component: vueRouter,
          children:[
            {
              path: 'api',
              name: 'api',
              component: () => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/index'),
              // redirect:'api/routerLink',
              children:[
                
                {
                  path: 'routerLink',
                  name: 'routerLink',
                  component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/router-link/index'),
                 },
                 {
                  path: 'routerView',
                  name: 'routerView',
                  component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/router-view/index'),
                 },
                 {
                  path: 'componentInjection',
                  name: 'componentInjection',
                  component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/componentInjection/index'),
                 },
                 {
                  path: 'constructionOptions',
                  name: 'constructionOptions',
                  component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/constructionOptions/index'),
                 },
                 {
                  path: 'exampleAttribute',
                  name: 'exampleAttribute',
                  component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/exampleAttribute/index'),
                 },
                 {
                  path: 'exampleMethod',
                  name: 'exampleMethod',
                  component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/exampleMethod/index'),
                 },
                 {
                  path: 'routingObject',
                  name: 'routingObject',
                  component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/routingObject/index'),
                 },
              ]
             },
          ]
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
