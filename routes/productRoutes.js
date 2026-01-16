const express = require('express')
const router = express.Router()
const ProductCalls =require('../controllers/productController')

router.get('/api/products', ProductCalls.getAllProducts)
// router.get('/api/products/:id', ProductCalls.getProductById)
router.post('/api/products', ProductCalls.createOneProduct)
// router.put('/api/products/:id', ProductCalls.updateProduct)
// router.delete('/api/products/:id', ProductCalls.deleteProduct)


module.exports = router