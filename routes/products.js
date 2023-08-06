const productController=require('../controllers/products_controller.js')
const express = require('express')
const router = express.Router()
router.get('/create',productController.create)

module.exports=router;