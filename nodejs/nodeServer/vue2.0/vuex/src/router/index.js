import Vue from 'vue'
import Router from 'vue-router'

import Action from '@/components/核心概念/Action/Action'
import Getter from '@/components/核心概念/Getter/Getter'
import Module from '@/components/核心概念/Module/Module'
import Mutation from '@/components/核心概念/Mutaion/Mutaion'
import State from '@/components/核心概念/State/State'
import Home from '@/components/Home'
import Demo1 from '@/components/demo1/index'
import Demo2 from '@/components/demo2/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component:Home,
      children:[
        {
          path:'/demo1',
          name:'/demo1',
          component:Demo1,
          redirect:'/demo1/action',
          children:[
            {
              path: 'action',
              name: 'action',
              component:Action
            },
            {
              path: 'getter',
              name: 'getter',
              component:Getter
            },
            {
              path: 'module',
              name: 'module',
              component:Module
            },
            {
              path: 'mutaion',
              name: 'mutaion',
              component:Mutation
            },
            {
              path: 'state',
              name: 'state',
              component:State
            }
          ]
        },
        {
           path:'/demo2',
            name:'/demo2',
            component:Demo1,
            redirect:'/demo2/state1',
            children:[
              {
                path: 'state1',
                name: 'state1',
                component:Demo2
              },
            ]
        }
      ]
    },
    

  ],
  mode:'history'
})
