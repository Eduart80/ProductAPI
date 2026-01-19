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
    try{
        const product = await Product.findById(req.params.id)
        if(!product){
            return res.status(404).json({ error: "Product not found" })
        }
        res.status(200).json(product)
    }catch(error){
        console.error("Error fetching product:", error);
        res.status(400).json({ error: "Failed to fetch product", details: error.message })
    }
}
async function updateProduct( req , res ) {
    try{
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        )
        if(!updatedProduct){
            return res.status(404).json({ error: "Product not found" })
        }
        res.status(200).json(updatedProduct)
    }catch(error){
        console.error("Error updating product:", error);
        res.status(400).json({ error: "Failed to update product", details: error.message })
    }
}
async function deleteProduct( req , res ) {
    try{
        const deletedProduct = await Product.findByIdAndDelete(req.params.id)
        if(!deletedProduct){
            return res.status(404).json({ error: "Product not found" })
        }
        res.status(200).json({ message: "Product deleted successfully", details: deletedProduct })
    }catch(error){
        console.error("Error deleting product:", error);
        res.status(400).json({ error: "Failed to delete product", details: error.message })
    }
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