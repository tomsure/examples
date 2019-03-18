<template>
  <div class="">
      <router-link :to="{name:'routerLink'}">router-link标签</router-link>
       <router-link :to="{name:'routerView'}">router-view标签</router-link>
        <router-link :to="{name:'componentInjection'}">组件注入</router-link>
         <router-link :to="{name:'constructionOptions'}">构建选项</router-link>
          <router-link :to="{name:'exampleAttribute'}">实例属性</router-link>
           <router-link :to="{name:'exampleMethod'}">实例方法</router-link>
            <router-link :to="{name:'routingObject'}">路由对象</router-link>

     <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: '',
  data(){ 
    return {

    }
  }
 }
</script>

<style lang="" scoped>
</style>
