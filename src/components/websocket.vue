<template>
    <div>
        <button @click="connect">连接</button>
        <button @click="close">关闭</button>
        <input v-model="msg"/>
        <button @click="send">发送</button>
    </div>
</template>
<script>
export default {
    name:'websocket',
    data(){
        return {
            msg:'',
            client:null,
        }
    },
    methods:{
        connect(){
            if(this.client) return;
            this.client = new WebSocket("ws://127.0.0.1:8083")
            this.client.onopen = ()=>{
                console.log("连接服务器成功")
            },
            this.client.onmessage = (data)=>{
                alert(data)
            }
        },
        close(){
            this.client.onclose = ()=>{
                console.log("关闭连接")
                this.client = null
            }
        },
        send(){
            this.client.send(this.msg)
            this.msg = "";
        },
        
    }
}
</script>

