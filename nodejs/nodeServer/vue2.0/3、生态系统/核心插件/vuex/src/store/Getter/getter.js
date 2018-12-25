
  const getters={
    computedMethods:function(state){
    	  return state.count +100
    }
  }


export default getters  //导出模块
/*
1、getters执行流程:
   getters对象里面是方法,state中存储的数据当发生改变的时候就会执行这个方法

2、getters用法:
    1,声明一个名字为getters(必须为getters)的对象,
    2,在这个对象中写多个方法,用于操作数据,方法名任意,函数的第一个参数就是state,可以通过state获取到state里面的数据
    3,导出getters(如果写在实例化vuex.store的文件里则不用)
   4,使用getters,见getters.vue

   */
