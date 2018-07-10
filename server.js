var express = require('express')

var app = express();

app.use(express.static(__dirname))

var messagesAry = [
    {"name":"Timothy","message":"Hello!"},
    {"name":"Tom","message":"Hi!"},
]

app.get('/messages',(req,response)=>{
    response.send(messagesAry)
})

var server =  app.listen(3000,()=>{
    //console.log(server);
    console.log("server listening on port number: ",server.address().port)
})