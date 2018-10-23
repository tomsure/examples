import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home'
import HelloWord from '../components/HelloWord'
//使用路由插件
Vue.use(VueRouter)

const routes = [{
		path: '/',  //这里的path的值与显示组件内容中router-link的to的值必须一致
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

