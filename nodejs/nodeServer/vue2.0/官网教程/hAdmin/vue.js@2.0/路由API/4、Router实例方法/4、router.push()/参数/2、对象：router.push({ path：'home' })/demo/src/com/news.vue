<template>
	<div class="">
		新闻内容

           <button @click="push">点击测试</button>
	</div>
</template>

<script>
  import router from 'vue-router'
	export default{
		name:'news',

		methods:{
			push(){
		    alert(123)
             this.$router.push({path:'/home'})  //参数是对象
			}
		}


	}
</script>

<style>
</style>