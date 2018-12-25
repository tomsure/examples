<template>
	<div id="">
		State
		<p>{{$store.state.count}}</p>
		<button @click="$store.commit('jia')">+</button>
		<button@click="$store.commit('jian')">-</button>
			    <!--访问数据代调用 $store.state属性,可以访问到store中存储的state对象里的数据
        	    修改数据使用 $store.commit()方法,方法的参数可以是store里面定义在mutation中的方法-->
	</div>
</template>

<script>
import store from './../../../store/store'
	 export default{
        data(){
           return {

           }

        },
        store
	 }

</script>

<style>
</style>