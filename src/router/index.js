import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/home.vue'
import Classify from '../components/classify/classify.vue'
import Circle from '../components/circle/circle.vue'
import Focus from '../components/focus/focus.vue'
import Mine from '../components/mine/mine.vue'

Vue.use(VueRouter);

let routes = [
    {
        path: '/',
        resirect:'/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/classify',
        component: Classify
    },
    {
        path: '/circle',
        component: Circle
    },
    {
        path: '/focus',
        component: Focus
    },
    {
        path: '/mine',
        component: Mine
    },
    {
        path: '*',
        resirect:'/home'
    },
]

let router = new VueRouter({
    routes
})

export default router;