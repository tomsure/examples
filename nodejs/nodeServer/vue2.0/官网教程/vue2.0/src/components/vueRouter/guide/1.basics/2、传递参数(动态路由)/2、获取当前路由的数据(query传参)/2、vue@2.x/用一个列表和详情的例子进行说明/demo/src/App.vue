<template>
	<div id="app">

		<li>
			<router-link :to="{name:'list'}">列表</router-link>
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