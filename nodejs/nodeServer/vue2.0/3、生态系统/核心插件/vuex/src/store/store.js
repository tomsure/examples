
import Vue from 'vue'

import Vuex from 'Vuex'
//

import state from './State/state'
import mutations from './Mutation/mutation'
import getters from './Getter/getter'
import actions from './Action/action'

Vue.use(Vuex)
    const store=new Vuex.Store({
             state,mutations,getters,actions
                              })


export default store  //导出模块
