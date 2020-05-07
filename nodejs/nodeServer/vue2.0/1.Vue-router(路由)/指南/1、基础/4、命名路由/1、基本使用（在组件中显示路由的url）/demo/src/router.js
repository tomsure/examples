import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
import Home from './com/home'
import News from './com/news'


const routes=[
   {name:'home',path:"/home",component:Home},

   {name:"news1",path:'/news',component:News},


]

const router=new VueRouter({
	mode:'history',
	routes
})

export default router