import Vue from 'vue'
import App from './App'
import store from './store/store'
import router from './router/router'
import axios from 'axios'

Vue.prototype.$axios = axios

const app = new Vue({
        el:"#app",
        store,
        router,
        render:h=>h(App)
})
