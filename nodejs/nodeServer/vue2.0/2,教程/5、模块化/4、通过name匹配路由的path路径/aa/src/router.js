import Vue from 'vue'
import VueRouter from 'vue-router'

import home1 from './components/Home'
import news1 from './components/News'
import aboutUs1 from './components/aboutUs'
//使用路由插件
Vue.use(VueRouter)

const routes = [{
		path: '/',
		name:'zhuye',
		component:home1
	},
	{
		path: '/news111',
        name:'xinwen',
		component: news1
	},
	{
		path: '/aboutUs111',
        name:'gunanyuwomen',
		component: aboutUs1
	},

]

//使用路由规则
const router = new VueRouter({
	routes,
	mode:'history'  //设置这里的时候，浏览器地址栏的#符号会消失
})

export default router

