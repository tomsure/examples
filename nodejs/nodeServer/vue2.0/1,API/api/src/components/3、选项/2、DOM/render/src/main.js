// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import render from '@/components/2、在单文件组件中的时候/render'
Vue.config.productionTip = false


//new Vue({
//el: '#app',
//router,
//components: { App },
//template: '<App/>'
//})
  //上面是使用vue@1.版本方式渲染组件，在vue实例中需要使用components注册组件并选择模板



new Vue({
  el: '#app',
  router,
render:function(createElement){
	return   createElement(render)
}
//render: c => c(render)   //上面渲染可以用ES6语法简写成这样
})


//render用法:
// 可以使用render函数,直接渲染组件模板,用法：
//1,在vue的实例中使用render选项，配置，值是一个函数，
//2,函数的参数是createElement，
//3,在这个函数内部使用return createElement（引入的组件名）
//4.render函数简写： render: x=> x(组件名) ， 这里的x 可以是任意英文字符
