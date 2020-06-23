import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import './editor.css'
import store from './store'

Vue.config.productionTip = false
Vue.EventManager = new Vue()

 new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

window.data = store.state

window.Vue11 = Vue