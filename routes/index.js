const express = require('express')
const productController=require('../controllers/products_controller')
const router = express.Router();
router.use('/products',require('./products'))
router.get('products',productController.listProducts)
module.exports = router;