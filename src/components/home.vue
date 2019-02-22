<template>
    <div>
        home
        <router-link to="/home/ws">ws</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'home',
    methods:{
        getData(){
            this.$axios({
                methods:'get',
                url:'/room',
            }).then((data)=>{

            }).catch(e=>{
                console.log(e)
            })
        }
    },
    created(){
        this.getData()
    }
}
</script>

