import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.prototype.$http = axios
Vue.config.productionTip = false

console.log(process.env)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
