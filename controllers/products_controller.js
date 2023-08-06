const Product = require('../models/prducts')
const Products = require('../models/prducts')
const mongoose = require('mongoose')
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
module.exports.listProducts= async function(req,res){
    const allProducts=await Products.find({})
    return res.status(200).json({
        data:{
            products:allProducts,

        }

    })
}
// action to delete a product who's id is specified in req.params
module.exports.deleteProduct=async function(req,res){
    try{
        console.log(req.params.id)
        const id = req.params.id.trim(); // Trim to remove any whitespace or newline characters
        const deleteProduct = await Product.findByIdAndDelete(id);
        return res.status(200).json({
            message:"Product Deleted successfuly"
        })
        
        
        
    }catch(err){
        console.log('Error in deleting the product: ',err)
    }
}
