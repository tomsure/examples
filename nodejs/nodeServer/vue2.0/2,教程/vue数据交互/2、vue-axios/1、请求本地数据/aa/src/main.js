import Vue from 'vue'
import App from './App'

import Axios from 'axios'   //引入axios

Vue.prototype.$axios=Axios //将axios 设置为Vue的原型属性
    //由于axios不是vue的内置插件,所以需要通过prototype的方式将axios设置为Vue的原型属性,这样项目中实例化的Vue在所有地方都可以使用

//
new Vue({

	el: '#app',
	template: '<App/>',
	components: {
		App
	}
})