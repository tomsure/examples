
import Vue from 'vue'
import App from './App'
import router from './router'
import './style/index.css'
import store from './store/index'

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
