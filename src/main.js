import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/css/reset.scss'
import { Notify } from 'vant'
import 'vant/lib/index.css'

Vue.component(Notify.name, Notify)
Vue.config.productionTip = false
Vue.prototype.$notify = Notify
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
