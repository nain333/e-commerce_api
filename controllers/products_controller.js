const Product = require('../models/products')
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
    const allProducts=await Product.find({})
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
        const product=await Product.findById(id)
        if(product){
        const deleteProduct = await Product.findByIdAndDelete(id);
        return res.status(200).json({
            message:"Product Deleted successfuly"
        })
    }
    return res.status(404).json({
        message:'Product not found!,please provide valid ID'
    })
        
        
        
    }catch(err){
        console.log('Error in deleting the product: ',err)
        res.status(500).json({
            message:"internal server Error!"
        })
    }
}
module.exports.updateQuantity=async function(req,res){
    // to decrease the quantity put number as negative in req.query
    try{
    const id = req.params.id.trim()
    const number = Number((req.query.number))
    console.log(number)
    // const updateQty=await Product.findByIdAndUpdate(id,{quantity:quantity+number})
    const product = await Product.findById(id)
    if(product){
    console.log(product)
    updateQty=product.quantity+number
    // to ensure not negative values for quantity are storing in db
    if(updateQty<0){

        updateQty=0
    }
    console.log(updateQty)
    updateProduct=await Product.findByIdAndUpdate(id,{
        quantity:updateQty
    })
    const updatedProduct=await Product.findById(id)
    return res.status(200).json({
        data:{
            product:updatedProduct
        }

    })
    }
    return res.status(404).json(
        {
            message:'product not found, please try with a valid productID'
        }
    )


    }catch(err){
        console.log('Error while updating product: ',err)

    }
}

