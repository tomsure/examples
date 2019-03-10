
# 介绍
## router-view 用于显示子路由对应组件的内容,当前路由配置如果有子路由，需要显示，则当前路由对应的组件就需要使用 router-view 标签来承载子路由组件的内容；
## 例如：
### 组件Home是根路由'/' 的引入的组件内容代码如下：
### Home.vue:

 ```<template>
  <div class="">
   <router-link :to="{name:'vueRouter'}">教程</router-link>
   <router-link :to="{name:''}">API</router-link>
   <router-link :to="{name:'vueRouter'}">路由</router-link>
   <button @click="toVuex">vuex</button>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  methods:{
    toVuex(){
      this.$router.push({name:'vuex'})
    }
  }
 }
</script>
<style lang="" scoped>
</style>
 ```
 ### 由于页面需要从Home页面跳转到路由和vuex等页面，所以还需要配置跟理由下面的子路由，从Home页面跳转到其他页面 可以使用  router-link 标签或者 router.push()方法；
  ### 此时Home组件内容为:
  ### Home.vue:
```
<template>
  <div class="">
   <router-link :to="{name:'vueRouter'}">教程</router-link>
   <router-link :to="{name:''}">API</router-link>
   <router-link :to="{name:'vueRouter'}">路由</router-link>
   <button @click="toVuex">vuex</button>
    <router-view class="box"></router-view>
  </div>
</template>
<script>
export default {
  methods:{
    toVuex(){
      this.$router.push({name:'vuex'})
    }
  }
 }
</script>
<style lang="" scoped>
</style>

```
  ### 此时需要跳转后的组件为：
  ### 显示vue-router的组件：VueRouter、显示vuex的组件vuex,内容分别为：
  ## VuexRouter.vue:
```
<template>
  <div class=""> 
   
       vue-router

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
```
## vuex.vue:
```
<template>
  <div class="">
     vuex
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
```
 ## 此时 路由router文件下下面的index.js 的配置为：
```
export default new Router({
  routes: [
    {
      path: '/',  //根路由
      name: 'Home',
      component: Home,  
      children:[     
         {   //子路由
          path: '/vueRouter',
          name: 'vueRouter',
          component: vueRouter
         },
         {
          path: '/vuex',
          name: 'vuex',
          component: Vuexx
         },
      ]
    },
    ]
})
```
# 总结：
 router-view 标签适用于渲染子路由组件内容的容器，用的时候需要放在副路由对应的组件中，当页面从父路由到子路由页面后，子路由对应的组件内容会在里面显示,可以尝试非router-view 添加class类然后通过控制台可以看到子路由的组件内容显示在这个添加了class的div中

 
 



 