import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

let store = {
    state: {
        eventBus: new Vue()
    },
    mutations: {

    }
}

export default store