// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui' //引入element-ui,这里是全局引入，这样所有页面都不需要再引入

import 'element-ui/lib/theme-chalk/index.css'; //引入 element-ui 的样式文件

import App from './App'
import router from './router'



Vue.config.productionTip = false


Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
