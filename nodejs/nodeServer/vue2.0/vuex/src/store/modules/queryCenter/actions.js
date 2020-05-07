

const actions={
	
	testSub:function(context,plaload){ //倒计时，异步操作
      setTimeout(() => {
		context.commit('subNum',plaload) 
	  }, 2000);
	}
}
export default actions
