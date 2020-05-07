


const mutations={   // mutations对象用于配置数据修改时候使用的方法，每个方法使用逗号隔开，方法的第一个参数就是state对象
	jia(state){
		state.count++
	},
	jian(state){
		state.count--
	},
    add(state,t){
		state.data1=state.data1+t
	},
	sub(state,t){
     state.data2=state.data2-t
	},
	chuanzhi(state,data){   //给mutaions方法传值，这里的data是组件Mutation点击后传进来的值
       state.count=data
	},
    add1(state,playload){
      state.data1=5
	},
	add2(state,playload){
     state.data2=1900
	},
	subNum(state,playload){
     state.data2=playload
	}
//	 mutation传值方法:
//	 1、  如果要在组件中给定义的mutations传参,则需要给mutations里的方法传递两个参数,第一个参数是state,第二个参数是组件传过来的参数
//   2,给mutation传值的时候，组件这边的步骤：
//		     需要使用commit()方法的第一个参数写成要执行传参的那个函数，第二个参数就是要传过去的参数，也就是实参
 }


export default  mutations