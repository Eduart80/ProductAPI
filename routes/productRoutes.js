const express = require('express')
const router = express.Router()
const ProductCalls =require('../controllers/productController')

//get
router.get('/api/products', ProductCalls.getAllProducts)
router.get('/api/products/:id', ProductCalls.getProductById)
//post
router.post('/api/products', ProductCalls.createOneProduct)
//put
router.put('/api/products/:id', ProductCalls.updateProduct)
//delete
router.delete('/api/products/:id', ProductCalls.deleteProduct)


module.exports = router