

   <div class="dv">
      <com></com>
   </div>
<script>
	import com from './com.vue'
	 export default{

        		render:function(createElement){
	           return   createElement(com)  //渲染组件
                                             }
	 }
</script>
    <!--在单文件组件中，也就是.vue结尾的文件中，如果使用render函数，有两种方法：
      1、在vue实例中使用components选项，render函数写在里面，引入渲染的组件可以在这个组件文件中使用
      2、在vue实例方法选项中直接使用render函数，例如：
           export default{
           	 render:c=>c(com)
           }

           这种方式就要求，组件文件不能使用template标签，否则不会执行-->

<style>
</style>