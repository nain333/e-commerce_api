const productController=require('../controllers/products_controller.js')
const express = require('express')
const router = express.Router()
router.post('/create',productController.create)
router.get('/',productController.listProducts)
router.delete('/:id',productController.deleteProduct)
router.post('/:id/update_quantity/',productController.updateQuantity)


module.exports=router;