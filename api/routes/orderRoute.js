const router = require("express").Router()
const { createOrder, updateOrder, deleteOrder, getOrder, getAllOrders, getMonthlyIncome } = require("../controllers/orderController")
const { verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyToken } = require("../utils/verifyToken")

//create Order
router.post('/', verifyTokenAndAuthorization, createOrder)
//update Order
router.put('/:id', verifyTokenAndAuthorization, updateOrder)
//delete Order
router.delete('/:id', verifyTokenAndAuthorization, deleteOrder)
//get user Order
router.get('/find/:userId', verifyTokenAndAuthorization, getOrder)
//get all Orders
router.get('/', verifyTokenAndAdmin, getAllOrders)
//get monthly income
router.get('/income', verifyTokenAndAdmin, getMonthlyIncome)


module.exports = router