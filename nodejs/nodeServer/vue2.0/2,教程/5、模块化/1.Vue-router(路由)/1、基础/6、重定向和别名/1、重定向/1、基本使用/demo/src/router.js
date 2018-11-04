import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
import Home from './com/home'
import News from './com/news'


const routes=[
   {path:"/home",name:'Home',component:Home},
   {path:'/news',name:"news",component:News},
   {path:"*",redirect:'/news'}

]

const router=new VueRouter({
	mode:'history',
	routes
})

export default router