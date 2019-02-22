const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname,'../../assets')))

app.get('/',(req,res)=>{
    res.sendFile('index.html')
}).listen(8081)
app.get('/room',(req,res)=>{
    res.json({
        "id":1213
    })
})


//websocket服务器
const Websocket = require('ws').Server

const ws = new Websocket({
    port:8083,
    host:"127.0.0.1"
})
const clients=[];
ws.on('connection',(ws)=>{
    clients.push(ws);
    ws.on('message',(data)=>{
        clients.forEach(client => {
            client.send(data)
        });
    })
})

ws.on('close',(ws)=>{
    const index = clients.indexOf(ws);
    clients.splice(index,1);
})




