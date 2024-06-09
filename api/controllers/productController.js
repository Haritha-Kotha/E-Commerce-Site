const Product= require("../models/Product")

//create product
const createProduct = async(req, res) => {
    const newProduct = new Product(req.body)
    try {
        const savedProduct = await newProduct.save()
        return res.status(200).json(savedProduct)
    } catch (error) {
        return res.status(404).json(error)
    }
}

//update product
const updateProduct = async(req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id, 
        {
            $set : req.body
        },
        {
            new : true
        }
        )
        return res.status(200).json(updatedProduct)
    } catch (error) {
        return res.status(500).json(error)
    }
}

// delete user
const deleteProduct = async(req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        return res.status(200).json("Product has been deleted successfully")
    } catch (error) {
        return res.status(404).json(error)
    }
}

//get a user
const getProduct = async(req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        return res.status(200).json(product)
    } catch (error) {
        return res.status(404).json(error)
    }
}

//get all products
const getAllProducts = async(req, res) => {
    const qNew = req.query.new
    const qCategory = req.query.category
    try {
        
        let products

        if(qNew) {
            products = await Product.find().sort({_id : -1}).limit(5)
        }
        else if(qCategory) {
            products = await Product.find({categories : { $in : [qCategory]}})
        }
        else{
            products = await Product.find()
        }

        return res.status(200).json(products)

    } catch (error) {
        return res.status(404).json(error)
    }
}



module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    getProduct,
   getAllProducts,
}