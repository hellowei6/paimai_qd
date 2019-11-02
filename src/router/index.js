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
        component: Circle,
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