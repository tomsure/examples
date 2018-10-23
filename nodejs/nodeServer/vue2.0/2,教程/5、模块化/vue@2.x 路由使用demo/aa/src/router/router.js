
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//编写组件模板
const first={
	template:'<div>第一个内容</div>'
}
const second={
	template:'<div>第二个内容</div>'
}

const home={
	template:'<div>Home</div>'
}





//实例化vue-router
const router=new VueRouter({
	 mode:'history',
	 base:__dirname,
	 routes:[  //这里编写路由跳转的组件的路径
	    {path:"/",component:home},
	    {path:'/first',component:first},
	     {path:'/second',component:second}
	  ]
})




//实例化vue:
var app= new Vue({
			router,
			template:`
			  <div id='r'>
			    <h1>导航</h1>
			    <ul>
			     <li><router-link to='/'>/</router-link></li>
			       <li><router-link to='/first'>first</router-link></li>
			         <li><router-link to='/second'>second</router-link></li>
			    </ul>
               <router-view class='aa' style="color:red;"></router-view>
			  </div>
			       `
				})

       app.$mount('#app')  //挂载到app.vue组件中



