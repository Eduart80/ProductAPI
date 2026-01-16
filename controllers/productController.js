const Product = require('../models/Product')

async function getAllProducts( req , res ) {
    try{
    const getAllProd = await Product.find({})
    res.status(200).json(getAllProd)
  }catch(error){
    console.error("Error creating product:", error);
       res
      .status(400)
      .json({ error: "Failed to read from db", details: error.message })
  }
}
async function getProductById( req , res ) {
    
}
async function updateProduct( req , res ) {
    
}
async function deleteProduct( req , res ) {
    
}
async function createOneProduct( req , res ) {
    try{
    const createProduct = await Product.create(req.body)
    res.status(201).json(createProduct)
    }catch(error){
    console.error("Error creating product:", error);
       res
      .status(400)
      .json({ error: "Failed to create product", details: error.message })
  }
}

module.exports = {
    getAllProducts,
    getProductById,
    createOneProduct,
    updateProduct,
    deleteProduct
}