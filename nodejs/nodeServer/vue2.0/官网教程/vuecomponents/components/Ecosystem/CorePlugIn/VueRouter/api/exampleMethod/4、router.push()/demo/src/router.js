import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
import Home from './com/home'
import News from './com/news'


const routes=[
   {path:"/home",component:Home},
   {path:'/news',component:News},


]

const router=new VueRouter({
	mode:'history',
	routes
})

export default router