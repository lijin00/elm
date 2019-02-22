import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = ()=>import('@/components/home')

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        redirect:to=>{return '/home'}
    },
    {
        path:'/home',
        name:'home',
        component: Home
    }
]

export default new VueRouter({
    routes
})