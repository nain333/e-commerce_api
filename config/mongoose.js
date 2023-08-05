const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce_api')
const db = mongoose.connection
db.on('error',console.error.bind(console,'Error while connecting to the dB'))
db.once('open',()=>{
    console.log('Successfuly connected :: mongoDB')
})
module.exports=db;