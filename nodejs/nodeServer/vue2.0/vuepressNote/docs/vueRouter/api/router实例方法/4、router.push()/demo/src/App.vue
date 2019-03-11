<template>
	<div id="app">

		<li>
			<router-link to="/home">主页</router-link>
		</li>
		<li>
			<router-link to='/news'>新闻</router-link>

		</li>

		<router-view></router-view>
	</div>
</template>

<script>

	export default{
		name:'app',


	}
</script>

<style>
</style>