<template>
	<div id="a2">

		<div class="dv2">
			<a3></a3>
           {{color}}
		</div>
	</div>
</template>

<!--局部组件-->

<script>
	export default {
		name:'a2',
		data(){
			return {
				color :'darkmagenta'
			}
		}
	}
</script>

<style>
	.dv2{
	width: 500px;
	height: 500px;
	background-color: darkmagenta;
	}
</style>