import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
import List from './com/list'
import Detail from './com/detail'


const routes=[
   {name:'list',path:"/list",component:List},

   {name:"detail",path:'/detail',component:Detail},


]

const router=new VueRouter({
	mode:'history',
	routes
})

export default router