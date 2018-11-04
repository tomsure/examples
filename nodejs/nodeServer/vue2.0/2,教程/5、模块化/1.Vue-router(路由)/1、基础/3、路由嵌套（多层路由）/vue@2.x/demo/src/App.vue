<template>
	<div id="app">




		<li><router-link to='/'>主页</router-link></li>
		<li>
			<router-link to='/news'>新闻</router-link>
		</li>
		  <ol>
		  	<li><router-link to='/news/child1'>二级1</router-link></li>
		  	<li><router-link to='/news/child2'>二级2  </router-link></li>
		  </ol>
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
      name:'app'
	}
</script>

<style>
</style>