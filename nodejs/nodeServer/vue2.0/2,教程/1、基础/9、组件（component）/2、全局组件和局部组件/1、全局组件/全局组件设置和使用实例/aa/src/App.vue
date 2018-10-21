<template>
  <div id="app">
   <a1></a1>
   <a2></a2>

  </div>

</template>

<script>
 import a1 from './components/a1'
   import a2 from './components/a2'


export default {
  name: 'App',
  components: {
    a1,a2
  }
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
