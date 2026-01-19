const Product = require('../models/Product')

async function getAllProducts( req , res ) {
    try{
        const { category, minPrice, maxPrice, sortBy, page = 1, limit = 2 } = req.query
        const filter = {}
        
        if(category){
            filter.category = category
        }
        
        if(minPrice || maxPrice){
            filter.price = {}
            if(minPrice){
                filter.price.$gte = parseFloat(minPrice)
            }
            if(maxPrice){
                filter.price.$lte = parseFloat(maxPrice)
            }
        }
        
        let sort = {}
        if(sortBy === 'price_asc'){
            sort.price = 1
        } else if(sortBy === 'price_desc'){
            sort.price = -1
        }
        
        const skip = (parseInt(page) - 1) * parseInt(limit)
        
        const products = await Product.find(filter)
            .sort(sort)
            .skip(skip)
            .limit(parseInt(limit))
        
        const totalProducts = await Product.countDocuments(filter)
        
        res.status(200).json({
            products,
            pagination: {
                currentPage: parseInt(page),
                totalPages: Math.ceil(totalProducts / parseInt(limit)),
                totalProducts,
                limit: parseInt(limit)
            }
        })
    }catch(error){
        console.error("Error creating product:", error);
        res.status(400).json({ error: "Failed to read from db", details: error.message })
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