import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/home.vue'
import Classify from '../components/classify/classify.vue'
import Circle from '../components/circle/circle.vue'
import Focus from '../components/focus/focus.vue'
import Mine from '../components/mine/mine.vue'
import One1 from "../components/focus/components/one.vue"
import Two1 from "../components/focus/components/two.vue"
import Three1 from "../components/focus/components/three.vue"
import Four1 from "../components/focus/components/four.vue"

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
        component: Focus,
        resirect:"/focus/one",
        children:[
            {
                path:"one",
                component:One1
            },
            {
                path:"two",
                component:Two1
            },
            {
                path:"three",
                component:Three1
            },
            {
                path:"four",
                component:Four1
            }
        ]
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