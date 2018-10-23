<template>
  <div id="app">

  	<ul>
  			<li>
  			<router-link :to="{name:'zhuye'}">Home</router-link>

  		</li>

  		<li>
  			<router-link :to="{name:'xinwen'}">News</router-link>

  		</li>
  		<li><router-link :to="{name:'gunanyuwomen'}">关于我们</router-link></li>
  	</ul>
     <router-view></router-view>
  </div>

</template>

<script>


export default {
  name: 'app',

}
</script>

<style>

</style>
