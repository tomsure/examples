import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import vueRouter from  "@/components/Ecosystem/CorePlugIn/vueRouter/index"
import Vuexx from  "@/components/Ecosystem/CorePlugIn/vuex/index"
Vue.use(Router)
  import name1 from '@/components/Ecosystem/CorePlugIn/vueRouter/api/router-view/attribute/name1'
  import name2 from '@/components/Ecosystem/CorePlugIn/vueRouter/api/router-view/attribute/name2'
  import nameDefault from '@/components/Ecosystem/CorePlugIn/vueRouter/api/router-view/attribute/default'
 
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
              redirect:'api/routerLink',
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
                    children:[
                      {
                        path:'activeClsas',
                        name:'activeClsas',
                      component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/router-link/attribute/active-class'),
                      children:[
                        {
                          path:'news',
                          name:'news',
                        component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/router-link/attribute/active-class/news.vue'),
                        },
                        {
                          path:'home',
                          name:'home',
                        component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/router-link/attribute/active-class/home.vue'),
                        },
                        {
                          path:'aboutUs',
                          name:'aboutUs',
                        component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/router-link/attribute/active-class/aboutUs.vue'),
                        },
                        {
                          path:'product',
                          name:'product',
                        component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/router-link/attribute/active-class/product.vue'),
                        }
                      ]
                      },
                      {
                        path:'append',
                        name:'append',
                      component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/router-link/attribute/append')
                      },
                      {
                        path:'event',
                        name:'event',
                      component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/router-link/attribute/event')
                      },
                      {
                        path:'exact',
                        name:'exact',
                      component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/router-link/attribute/exact/exact'),
                       redirect:'exact/test1',
                       children:[
                        {
                          path:'test1',
                          name:'test1',
                        component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/router-link/attribute/exact/test1')
                        },
                        {
                          path:'test2',
                          name:'test2',
                        component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/router-link/attribute/exact/test2')
                        },
                        {
                          path:'test3',
                          name:'test3',
                        component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/router-link/attribute/exact/test3')
                        },
                       ]
                      },
                      {
                        path:'replace',
                        name:'replace',
                      component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/router-link/attribute/replace')
                      },
                      {
                        path:'tag',
                        name:'tag',
                      component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/router-link/attribute/tag')
                      },

                      {
                        path:'to',
                        name:'to',
                        component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/router-link/attribute/to')
                      }
                    ]
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
                
                  children:[
                     { 
                       path:'name',
                       name: 'name',
                      components:{
                      a:name1,
                      default:nameDefault,
                      b:name2
                    }
                    
                  }
                  ]
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
                  children:[
                    {
                      path: 'base',
                      name: 'base',
                      component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/constructionOptions/options/base'),
                    },
                    {
                      path: 'fallback',
                      name: 'fallback',
                      component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/constructionOptions/options/fallback'),
                    },
                    {
                      path: 'linkActiveClass',
                      name: 'linkActiveClass',
                      component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/constructionOptions/options/linkActiveClass'),
                    },
                    {
                      path: 'linkExactActiveClass',
                      name: 'linkExactActiveClass',
                      component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/constructionOptions/options/linkExactActiveClass'),
                    },
                    {
                      path: 'linkActiveClass',
                      name: 'linkActiveClass',
                      component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/constructionOptions/options/linkActiveClass'),
                    },
                    {
                      path: 'linkActiveClass',
                      name: 'linkActiveClass',
                      component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/constructionOptions/options/linkActiveClass'),
                    },
                    {
                      path: 'linkActiveClass',
                      name: 'linkActiveClass',
                      component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/constructionOptions/options/linkActiveClass'),
                    },
                    {
                      path: 'linkActiveClass',
                      name: 'linkActiveClass',
                      component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/constructionOptions/options/linkActiveClass'),
                    },
                  ]
                  
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
                  children:[
                    {
                      path: 'beforeEach',
                      name: 'beforeEach',
                      component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/exampleMethod/1、router.beforeEach()/router.beforeEach.vue'),
                    },
                    {
                      path: 'login',
                      name: 'login',
                      component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/exampleMethod/1、router.beforeEach()/login.vue'),
                    },
                    {
                      path: 'beforeResolve',
                      name: 'beforeResolve',
                      component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/exampleMethod/2、router.beforeResolve/router.beforeResolve.vue'),
                    },
                    {
                      path: 'afterEach',
                      name: 'afterEach',
                      component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/exampleMethod/3、router.afterEach()/router.afterEach.vue'),
                    },
                    {
                      path: 'push',
                      name: 'push',
                      component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/exampleMethod/4、router.push()/push.vue'),
                    },
                    {
                      path: 'replace1',
                      name: 'replace1',
                      component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/exampleMethod/5、router.replace()/router.replace.vue'),
                    },
                    {
                      path: 'go',
                      name: 'go',
                      component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/exampleMethod/6、router.go()/router.go.vue'),
                    },
                    {
                      path: 'back',
                      name: 'back',
                      component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/exampleMethod/7、router.back()/router.back.vue'),
                    },
                    {
                      path: 'forward',
                      name: 'forward',
                      component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/exampleMethod/8、router.forward()/router.forward.vue'),
                    },
                    {
                      path: 'getMatchedComponents',
                      name: 'getMatchedComponents',
                      component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/exampleMethod/9、router.getMatchedComponents()/router.getMatchedComponents.vue'),
                    },
                    {
                      path: 'resolve',
                      name: 'resolve',
                      component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/exampleMethod/10、router.resolve()/router.resolve.vue'),
                    },
                    {
                      path: 'addRoutes',
                      name: 'addRoutes',
                      component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/exampleMethod/11、router.addRoutes()/router.addRoutes.vue'),
                    },
                    {
                      path: 'onReady',
                      name: 'onReady',
                      component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/exampleMethod/12、router.onReady()/router.onReady.vue'),
                    },
                    {
                      path: 'onError',
                      name: 'onError',
                      component:() => import('@/components/Ecosystem/CorePlugIn/vueRouter/api/exampleMethod/13、router.onError()/router.onError.vue'),
                    },
                  ]
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
