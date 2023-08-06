const productController=require('../controllers/products_controller.js')
const express = require('express')
const router = express.Router()
router.get('/create',productController.create)
router.get('/',productController.listProducts)


module.exports=router;