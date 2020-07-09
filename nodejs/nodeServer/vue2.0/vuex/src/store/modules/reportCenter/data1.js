
export default {
    namespaced:true,
    state:{
      name:100,
      age:200,
      num:100,
      str:''
    },
    mutations:{
     setStr2(state,payload){
      state.str=200
      }
    },
    actions:{
     setStr1:function(ctx,payload){
       window.console.log('ctx',ctx,"payload",payload)
     }
    },
    getters:{
      getState:function(state, getters, rootState,rootGetters){  //getters方法，rootState指的是全局中的state
         return 999
       }
    }
     }

