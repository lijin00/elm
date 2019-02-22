const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname,'../assets')))

app.get('/',(req,res)=>{
    res.sendFile('index.html')
}).listen(8081)


//websocket服务器
const WsServer = require('ws').WsServer

const ws = new WsServer()
ws.on('connection',(ws)=>{
    ws.on('message',(data)=>{
        ws.clients.forEach(client => {
            client.send(data)
        });
    })
})

ws.createSever().listen(8083,()=>{
    console.log("启动ws服务器成功！")
})



