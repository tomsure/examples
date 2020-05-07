

const actions={
	changeData:function(context){
       context.commit('jian')
	},
	testSub:function(context,plaload){ //倒计时，异步操作
      setTimeout(() => {
		context.commit('subNum',plaload) 
	  }, 2000);
	}
}
export default actions
// 执行流程：
// actions是通过间接的执行mutaion里面的方法来改变state里面的数据
//用法:
//  定义actions:
//  1,定义actions对象,对象里面定义多个方法,方法的参数叫context
//  2,使用context.commit()方法调用在mutation里面定义的方法
//  调用actions
//   在页面调用的时候,使用$store.dispatch()方法,里面参数就是actions里面定义的方法
