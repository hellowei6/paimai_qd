import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'
import axios from 'axios'
import "./common/css/reset.css"
import "./common/css/fonts.css"

import 'lib-flexible'
import "./css/fonts.css"
import "./css/shezhi.css"
import store from './store'
// import axios from 'axios'
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
