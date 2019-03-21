<template>
  <div class="">
    <h3>Tag</h3>
     <router-link to="home">home</router-link>
      <router-link v-bind:to="home">news</router-link> <!--也可以简写为" <router-link :to="home">news</router-link>" -->
     <router-link :to="{ path: 'home' }">product</router-link>    <!-- 通过命名路由跳转 -->
     
     <router-link :to="{ name: 'home', params: { userId: 123 }}">aboutUs</router-link>  <!-- 传参 -->
      <router-link :to="{ path: 'home', query: { plan: 'private' }}">aboutUs</router-link> <!-- 传参 -->

      <!-- <routwr-view></routwr-view> -->
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {

    }
  }
 }
</script>

<style lang="" scoped>
</style>