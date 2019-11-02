import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'
import 'lib-flexible'

Vue.config.productionTip = false
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './assets/error.png',
  loading: './assets/loading.gif',
  attempt: 1
})


new Vue({

  render: h => h(App),
  router
}).$mount('#app')
