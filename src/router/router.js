import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = ()=>import('@/components/home')
const ws = ()=>import('@/components/websocket')

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        redirect:to=>{return '/home'}
    },
    {
        path:'/home',
        name:'home',
        component: Home,
        children:[
            {
                path:'ws',
                name:'ws',
                component:ws
            }
        ]
    }
]

export default new VueRouter({
    routes
})