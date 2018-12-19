import Vue from 'vue'
import Router from 'vue-router'

import Action from '@/components/核心概念/Action/Action'
import Getter from '@/components/核心概念/Getter/Getter'
import Module from '@/components/核心概念/Module/Module'
import Mutation from '@/components/核心概念/Mutation/Mutation'
import State from '@/components/核心概念/State/State'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Action',
      name: 'Action',
      component:Action
    },
    {
      path: '/Getter',
      name: 'Getter',
      component:Getter
    },
    {
      path: '/Module',
      name: 'Module',
      component:Module
    },
    {
      path: '/Mutation',
      name: 'Mutation',
      component:Mutation
    },
    {
      path: '/State',
      name: 'State',
      component:State
    }

  ]
})
