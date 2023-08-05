const express = require('express')
const app = express();
const port = 8000;
const db = require('./config/mongoose')
app.listen(port,(err)=>{
    if(err){
        console.log("Error in running server: ",err)
    return
    }
    console.log('Server is up and running on port :', port)
})