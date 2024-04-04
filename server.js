//setup server
//step_1:  import Express
var express =require('express');
//step_2:  import cors
var cors=require('cors');
//step_3:  import bodyParser
var bodyParser= require('body-parser')

var noteRoute=require('./route/noteRoute')

var app=express();

app.use((cors()))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get("/",function(req, res){
    res.send("Server started .......")
})

app.use("/api/v1",noteRoute)

app.listen(9000, ()=>{
    console.log(`Server Start :)`)
})
//netstat -ano | findstr :9323
//taskkill /PID 27924 /F