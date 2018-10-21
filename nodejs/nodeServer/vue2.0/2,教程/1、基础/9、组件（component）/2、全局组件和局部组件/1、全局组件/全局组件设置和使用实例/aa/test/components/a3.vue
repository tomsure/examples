<template>
	<div id="a3">
		<div class="dv3">
            {{color}}
		</div>
	</div>
</template>
<!--全局组件-->
<script>
	export default {
		name:'a3',
	data(){
		return {
			color:'blue'
		}
	}
	}
</script>

<style>
	.dv3{
	width: 100px;
	height: 100px;
	background-color: blue;
	}
</style>