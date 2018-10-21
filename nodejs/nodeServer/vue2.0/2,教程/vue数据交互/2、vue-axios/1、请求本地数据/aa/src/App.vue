<template>
  <div id="app">
  </div>

</template>

<script>


export default {
  name: 'app',
   created(){
   	this.$axios.get('').then(res=>{
   		console.log(res)
   	}).catch(err=>{
   		console.log(err)
   	}).finally(()=>{
   		console.log('最终')
   	})
   }
}
</script>

<style>
  h1{
  	color: red;
  }
</style>
