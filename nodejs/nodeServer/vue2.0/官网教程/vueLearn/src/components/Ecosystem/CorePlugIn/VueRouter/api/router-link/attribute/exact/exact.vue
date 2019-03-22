<template>
  <div class="">
    <h3>Exact</h3>
      <router-link to="/" active-class="aaa" exact >首页</router-link>
      <router-link to="/vueRouter/api/routerLink/attr/exact/test1"  active-class="aaa"  >test1</router-link>
       <router-link to="/vueRouter/api/routerLink/attr/exact/test2" >test2</router-link>
        <router-link to="/vueRouter/api/routerLink/attr/exact/test3" >test3</router-link>
   <router-view></router-view>
  </div>
</template>
    // 背景：
    //     1、router-link标签点击的时候标签会自动添加router-link-active class的类；
    //     2、在router-link标签中，如果多个router-link标签其中一个“to=‘/’”，表示点击这个标签后跳转到根路由；
    //     3、但是如果其他标签的“to”属性是以“/”开头的，那么当点击这个标签的时候，这个router-link标签自动添加router-link-active class的类的同时，属性为“to=‘/’”的router-link的标签也会添加router-link-active类，如果单独给这个类设置样式则就会影响。
    //     解决办法：
    //      给属性为“to=‘/’”的router-link的标签添加“exact”属性，这样其他标签激活的时候，这个就不会自动加上router-link-active类
<script>

export default {
  name: '',
  data() { 
    return {

    }
  }
 }
</script>

<style lang="" scope >
/* .router-link-exact-active{
   background: red;
   color: white;
   font-size: 20px;
 } */
 
</style>