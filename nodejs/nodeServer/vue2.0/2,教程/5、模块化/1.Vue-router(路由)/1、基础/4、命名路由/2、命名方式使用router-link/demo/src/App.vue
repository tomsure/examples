<template>
	<div id="app">

		<li>
			<router-link to="/home">主页</router-link>
		</li>
		<li>
			<router-link :to='{name:"news1"}'>新闻1</router-link>
			<router-link :to='{name:"news1"}'>新闻2</router-link>
			<router-link :to='{name:"news1"}'>新闻3</router-link>

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