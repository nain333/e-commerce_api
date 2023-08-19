require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.mongoUrl)
const db = mongoose.connection
db.on('error',console.error.bind(console,'Error while connecting to the dB'))
db.once('open',()=>{
    console.log('Successfuly connected :: mongoDB')
})
module.exports=db;