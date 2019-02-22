import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        number:'1'
    },
    getters:{
        a:state=>state.number*5
    },
    mutations:{
        ttt(state,m){
            state.number = m
        }
    },
    actions:{
        ddd({state},m){
            state.number=m
        }
    }
})

export default store