<template>
	<div id="App">
       <router-link to='/'>HelloWord</router-link>

       <router-link to='/customValidate'>自定义表单</router-link>
       <router-view></router-view>
	</div>
</template>
<script>
  export default {
  	name:'App',
    data() {

      return {}

    },
    methods: {

    }
  }
</script>