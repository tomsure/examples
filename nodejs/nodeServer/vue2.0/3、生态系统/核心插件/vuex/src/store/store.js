
import Vue from 'vue'

import Vuex from 'Vuex'
//

import state from './State/state'
import mutations from './Mutation/mutation'
import getters from './Getter/getter'

Vue.use(Vuex)
    const store=new Vuex.Store({
             state,mutations,getters
                              })


export default store  //导出模块
