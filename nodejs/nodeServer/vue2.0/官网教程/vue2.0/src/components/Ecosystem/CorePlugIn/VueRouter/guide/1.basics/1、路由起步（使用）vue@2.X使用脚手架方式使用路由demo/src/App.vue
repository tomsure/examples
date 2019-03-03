<template>
  <div id="app">
  	<ul>
  		<li>
  			<router-link to='/'>home</router-link>

  		</li>
  	</ul>
  	<ul>
  		<li>
  			<router-link to='/helloword'>helloword</router-link>

  		</li>
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
