const dotenv = require('dotenv').config()
const express = require('express')
const app = express();
const port = process.env.port||8000
const db = require('./config/mongoose')
app.use(express.urlencoded({extended:true}))
app.use('/',require('./routes'))
app.listen(port,(err)=>{
    if(err){
        console.log("Error in running server: ",err)
    return
    }
    console.log('Server is up and running on port :', port)
})