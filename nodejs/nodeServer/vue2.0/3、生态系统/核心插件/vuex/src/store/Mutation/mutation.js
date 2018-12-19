
//import state from './../State/state'

const mutations={   // mutations对象用于配置数据修改时候使用的方法，每个方法使用逗号隔开，方法的第一个参数就是state对象
	jia(state){
		state.count++
	},
	jian(state){
		state.count--
	}
 }


export default  mutations