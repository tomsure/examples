<template>
  <div class="">
      <router-link :to="{path:'base'}">base</router-link>
       <router-link :to="{path:'fallback'}">fallback</router-link>
        <router-link :to="{path:'linkActiveClass'}">linkActiveClass</router-link>
         <router-link :to="{path:'linkExactActiveClass'}">linkExactActiveClass</router-link>
          <router-link :to="{path:'mode'}">mode</router-link>
           <router-link :to="{path:'parseQuery'}">parseQuery 和stringifyQuery</router-link>
          
             <router-link :to="{path:'scrollBehavior'}">scrollBehavior</router-link>
              
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