<template>
	<div id="">
      <Demo1Btn />
		<p>"getter"</p>

		<span>state</span>

		<p>{{$store.state.count}}</p>
		 <button @click="$store.commit('jia')">+</button>
		<button@click="$store.commit('jian')">-</button>
		<br />
          ....................................................
         <br />
        <br />
        <br />

		<span>getters</span>
		<p>{{$store.getters.computedMethods}}</p>
		   <!--getter可以通过$store.getters来访问，访问的时候实际上是执行定义getters时候里面的方法，例如这里的computedMethods就是在定义getters的时候定义的方法
-->
      <!--getters运行的流程是，当state对象存储的数据发生改变的时候就执行这里存储的方法-->


	</div>
</template>

<script>
import Demo1Btn from '../../Demo1Btn'
	export default{
		components:{
         Demo1Btn
		},
        data(){
           return {

           }

        },
       
	 }

</script>

<style>
</style>