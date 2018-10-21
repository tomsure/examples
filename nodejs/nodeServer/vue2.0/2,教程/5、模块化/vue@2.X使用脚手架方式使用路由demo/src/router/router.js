import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home'
import HelloWord from '../components/HelloWord'
//使用路由插件
Vue.use(VueRouter)

const routes = [{
		path: '/',
		component: Home
	},
	{
		path: '/HelloWord',
		component: HelloWord
	},

]

//使用路由规则
const router = new VueRouter({
	routes,
	mode:'history'  //设置这里的时候，浏览器地址栏的#符号会消失
})

export default router

