const router = require("express").Router()
const { createProduct, updateProduct, deleteProduct, getProduct, getAllProducts } = require("../controllers/productController")
const { verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyToken } = require("../utils/verifyToken")


//create product
router.post('/', verifyTokenAndAdmin, createProduct)
//update product
router.put('/:id', verifyTokenAndAdmin, updateProduct)
//delete product
router.delete('/:id', verifyTokenAndAdmin, deleteProduct)
//get product
router.get('/find/:id', getProduct)//use verifyToken middleware
//get all products 
router.get('/', getAllProducts)//use verifyToken middleware


module.exports = router