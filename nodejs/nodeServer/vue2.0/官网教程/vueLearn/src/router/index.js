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
      // name: 'Home',
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
                  redirect:'routerLink/attr',
                  children:[
                    {
                      path:'attr',
                      name:'attr',
                    component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/router-link/attribute/index'),
                    // children:[
                    //   {
                    //     path:'activeClsas',
                    //     name:'activeClsas',
                    //   component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/router-link/attribute/active-class'),
                    //   children:[
                    //     {
                    //       path:'news',
                    //       name:'news',
                    //     component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/router-link/attribute/active-class/news.vue'),
                    //     },
                    //     {
                    //       path:'home',
                    //       name:'home',
                    //     component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/router-link/attribute/active-class/home.vue'),
                    //     },
                    //     {
                    //       path:'aboutUs',
                    //       name:'aboutUs',
                    //     component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/router-link/attribute/active-class/aboutUs.vue'),
                    //     },
                    //     {
                    //       path:'product',
                    //       name:'product',
                    //     component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/router-link/attribute/active-class/product.vue'),
                    //     }
                    //   ]
                    //   },
                    //   {
                    //     path:'append',
                    //     name:'append',
                    //   component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/router-link/attribute/append')
                    //   },
                    //   {
                    //     path:'event',
                    //     name:'event',
                    //   component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/router-link/attribute/event')
                    //   },
                    //   {
                    //     path:'exact',
                    //     name:'exact',
                    //   component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/router-link/attribute/exact/exact'),
                    //    redirect:'exact/test1',
                    //    children:[
                    //     {
                    //       path:'test1',
                    //       name:'test1',
                    //     component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/router-link/attribute/exact/test1')
                    //     },
                    //     {
                    //       path:'test2',
                    //       name:'test2',
                    //     component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/router-link/attribute/exact/test2')
                    //     },
                    //     {
                    //       path:'test3',
                    //       name:'test3',
                    //     component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/router-link/attribute/exact/test3')
                    //     },
                    //    ]
                    //   },
                    //   {
                    //     path:'replace',
                    //     name:'replace',
                    //   component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/router-link/attribute/replace')
                    //   },
                    //   {
                    //     path:'tag',
                    //     name:'tag',
                    //   component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/router-link/attribute/tag')
                    //   },

                    //   {
                    //     path:'to',
                    //     name:'to',
                    //     component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/router-link/attribute/to')
                    //   }
                    // ]
                    },
                    {
                    path:'exactActiveClass',
                    name:'exactActiveClass',
                    component:() => () => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/router-link/exact-active-class/exact-active-class.vue'),
                    // reqirect:'exactActiveClass/testA',
                    // children:[
                    //   {
                    //     path:'testA',
                    //     name:'testA',
                    //   component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/router-link/exact-active-class/test1')
                    //   },
                    //   {
                    //     path:'testB',
                    //     name:'testB',
                    //   component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/router-link/exact-active-class/test2')
                    //   },
                    //   {
                    //     path:'testC',
                    //     name:'testC',
                    //   component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/router-link/exact-active-class/test3')
                    //   },
                    //  ]
                     }
                    
                    
                  ]
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
