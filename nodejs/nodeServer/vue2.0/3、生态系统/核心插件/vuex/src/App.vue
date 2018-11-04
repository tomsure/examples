<template>
  <div id="app">
   <router-link to='/Action'>核心概念/Actoin</router-link>
   <router-link to='/Getter'>核心概念/Getter</router-link>
   <router-link to='/Module'>核心概念/Module</router-link>
   <router-link to='Mutaion'>核心概念/Mutaion</router-link>
   <router-link to='/State'>核心概念/State</router-link>
   <router-link to=''></router-link>
   <router-link to=''></router-link>
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
