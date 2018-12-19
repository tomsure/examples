<template>
  <div id="app">
   <button @click="$router.push({path:'/Action'})">核心概念/Actoin</button>
   <button @click="$router.push({path:'/Getter'})">核心概念/Getter</button>
   <button @click="$router.push({path:'/Module'})">核心概念/Module</button>
   <button @click="$router.push({path:'/Mutaion'})">核心概念/Mutaion</button>
   <button @click="$router.push({path:'/State'})">核心概念/State</button>

    <router-view style="border: 1px solid red; height: 600px;" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
