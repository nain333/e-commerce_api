const Product = require('../models/prducts')
const Products = require('../models/prducts')
// create product in db
module.exports.create= async function(req,res){
    // if quantitiy and name are within the req.body only then create the product
    console.log(req.body)
    if(req.body.quantity&&req.body.name){
    const newProduct =await Product.create({
        name:req.body.name,
        quantity:req.body.quantity
    })
    return res.status(200).json({
        data:{
            product:newProduct

        },
        massage:'Product added successfully'
    })

    }
    // else trow an error to the front End
    return res.status(401).json({
        messge:"couldn't process your request as the parameters in the form are missmatching"
    })


}
