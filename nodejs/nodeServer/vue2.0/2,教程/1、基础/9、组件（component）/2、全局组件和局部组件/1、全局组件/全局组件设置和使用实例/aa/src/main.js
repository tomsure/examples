// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import a3 from './components/a3'

Vue.config.productionTip = false

Vue.use(a3)
Vue.component('a3',a3)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App,a3},
  template: '<App/>'
})
