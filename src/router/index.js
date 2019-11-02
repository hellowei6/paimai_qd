import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/home.vue'
import Classify from '../components/classify/classify.vue'
import Circle from '../components/circle/circle.vue'
import Focus from '../components/focus/focus.vue'
import Mine from '../components/mine/mine.vue'
import One from '../components/home/components/one.vue'
import Two from '../components/home/components/two.vue'
import Three from '../components/home/components/three.vue'
import Four from '../components/home/components/four.vue'
import Searchall from '../components/home/components/searchall.vue'

Vue.use(VueRouter);

let routes = [
    {
        path: '/',
        resirect:'/home'
    },
    {
        path: '/home',
        component: Home,
        resiret:'/home/one',
        children:[
            {
                path:"one",
                component:One,
                
            },
            {
                path:"two",
                component:Two
            },
            {
                path:"three",
                component:Three
            },
            {
                path:"four",
                component:Four
            },
        ]
    },
    {
        path: '/searchall',
        component: Searchall
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