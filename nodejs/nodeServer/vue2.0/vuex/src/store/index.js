
import Vue from 'vue'
import Vuex from 'Vuex'
import state from './state.js'
import mutations from './mutation.js'
import getters from './getter.js'
import actions from './action.js'
import user from './modules/user'
import queryCenter from './modules/queryCenter/index'
import reportCenter from './modules/reportCenter/index'
    Vue.use(Vuex)
    const store=new Vuex.Store({ state,
                                 mutations,
                                 getters,
                                 actions,
                                 modules:{
                                     user:user,
                                     queryCenter:queryCenter,
                                     reportCenter
                                 }
                                })


export default store  //导出模块
