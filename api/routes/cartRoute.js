const router = require("express").Router()
const { createCart, updateCart, deleteCart, getCart, getAllCarts } = require("../controllers/cartController")
const { verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyToken } = require("../utils/verifyToken")

//create cart
router.post('/', verifyToken, createCart)
//update cart
router.put('/:id', verifyTokenAndAuthorization, updateCart)
//delete cart
router.delete('/:id', verifyTokenAndAuthorization, deleteCart)
//get user cart
router.get('/find/:userId', verifyTokenAndAuthorization, getCart)
//get all carts
router.get('/', verifyTokenAndAdmin, getAllCarts)

module.exports = router