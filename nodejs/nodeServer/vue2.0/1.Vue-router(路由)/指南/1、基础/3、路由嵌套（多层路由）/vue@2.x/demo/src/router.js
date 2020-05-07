import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import News from './com/news'
import Home from './com/home'
import Child1 from './childs/child1'
import Child2 from './childs/child2'


const routes=[
{path:'/',component:Home},
{path:'/news',component:News,
children:[
  {path:'child1',component:Child1},
  {path:'child2',component:Child2}
         ]
}
]
const router=new VueRouter({
	routes,
	mode:'history'
})
export default router
