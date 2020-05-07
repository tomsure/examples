<template>
	<div id="">
     <Demo1Btn />
		<p>Mutation</p>
		<p>{{$store.state.count}}</p>    <!--点击后数据会变成100-->
		  <button @click="$store.commit('chuanzhi',d1)">点击传参</button>

		  <!--给mutation传值的时候，组件这边的步骤：
		     需要使用commit()方法的第一个参数写成要执行传参的那个函数，第二个参数就是要传过去的参数，也就是实参-->
	</div>
</template>

<script>
import Demo1Btn from '../../Demo1Btn'
	export default{
		components:{
         Demo1Btn
		},
 	data(){
 		return{
           d1:100
 		}
 	},
 	}
</script>

<style>
</style>
