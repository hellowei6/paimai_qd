import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'
import 'lib-flexible'
import "./css/fonts.css"
import "./css/shezhi.css"
import './common/css/reset.css'
import store from './store'

import axios from 'axios'


import 'lib-flexible'
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './assets/error.png',
  loading: './assets/loading.gif',
  attempt: 1
})


new Vue({
  store,

  render: h => h(App),
  router
}).$mount('#app')
