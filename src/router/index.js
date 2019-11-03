import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/home.vue'
import Classify from '../components/classify/classify.vue'
import Circle from '../components/circle/circle.vue'
import Focus from '../components/focus/focus.vue'
import Mine from '../components/mine/mine.vue'
import My from "../components/circle/components/my.vue"
import Question from "../components/circle/components/question.vue"
import Whole1 from "../components/circle/components/whole1.vue"
import resigter from '../components/mine/resigter.vue'
import login from '../components/mine/login.vue'
import One from '../components/home/components/one.vue'
import Two from '../components/home/components/two.vue'
import Three from '../components/home/components/three.vue'
import Four from '../components/home/components/four.vue'
import Searchall from '../components/home/components/searchall.vue'
import serch1 from '../components/classify/compontents/serch1.vue'
import base from '../components/classify/compontents/base.vue'
import first from '../components/classify/compontents/first.vue'
import second from '../components/classify/compontents/second.vue'
import third from '../components/classify/compontents/third.vue'

import One1 from "../components/focus/components/one.vue"
import Two1 from "../components/focus/components/two.vue"
import Three1 from "../components/focus/components/three.vue"
import Four1 from "../components/focus/components/four.vue"

Vue.use(VueRouter);

let routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        // component: Home,
        component: Home,
        redirect:"/home/one",
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
        component: Classify,
    },
    {
        path:'/serch1',
        component:serch1
    },
    {
        path:'/base',
        component:base,
        redirect:"/base/first",
        children:[
            {
                path:'first',
                component:first
            },
            {
                path:'second',
                component:second
            },
            {
                path:'third',
                component:third
            }
        ]
    },
    {
        path: '/circle',
        component: Circle,
        redirect:"/circle/my",
        children:[
            {
             path:'my',
             component:My
            },
            {
             path:'question',
             component:Question
            },
            {
                path:'whole1',
                component:Whole1
            }
        ]
    },
    {
        path: '/focus',
        component: Focus,
        redirect:"/focus/one",
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
            },
        ]
    },
    {
        path: '/mine',
        component: login
    },
    {
        path: '/resigter',
        component: resigter
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/content',
        component: Mine,
        // component: Focus,
       
    },
    {
        path: '/classify',
        component: Classify
    },
    {
          path:'/loginok',
          component:Mine
    },
    {
        path: '/circle',
        component: Circle
    },
    {
        path: '*',
        resirect: '/home'
    },

]

let router = new VueRouter({
    routes
})

export default router;