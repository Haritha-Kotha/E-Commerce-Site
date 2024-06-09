const Order= require("../models/Order")

//create Order
const createOrder = async(req, res) => {
    const newOrder = new Order(req.body)
    try {
        const savedOrder = await newOrder.save()
        return res.status(200).json(savedOrder)
    } catch (error) {
        return res.status(404).json(error)
    }
}

//update Order
const updateOrder = async(req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
        req.params.id, 
        {
            $set : req.body
        },
        {
            new : true
        }
        )
        return res.status(200).json(updatedOrder)
    } catch (error) {
        return res.status(500).json(error)
    }
}

// delete user
const deleteOrder = async(req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id)
        return res.status(200).json("Order has been deleted successfully")
    } catch (error) {
        return res.status(404).json(error)
    }
}

//get a userorder
const getOrder = async(req, res) => {
    try {
        const order = await Order.find({userId : req.params.userId})
        return res.status(200).json(order)
    } catch (error) {
        return res.status(404).json(error)
    }
}

//get all Orders
const getAllOrders = async(req, res) => {
   try {
    const orders = await Order.find()
    return res.status(200).json(orders)
   } catch (error) {
        return res.status(404).json(error)
   }
}

//get monthly income
const getMonthlyIncome = async(req, res) => {
    const date = new Date()
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
    const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1))

    try {
        const income = await Order.aggregate([
            { $match : { createdAt : {$gte : prevMonth}}},
            { $project : {
                 month : {$month : "$createdAt"},
                 sales : "$amount"
            }},
            { $group : { _id : "$month", total : {$sum : "$sales"}}}
        ])
        return res.status(200).json(income)
    } catch (error) {
        return res.status(404).json(error)
    }

}



module.exports = {
    createOrder,
    updateOrder,
    deleteOrder,
    getOrder,
   getAllOrders,
   getMonthlyIncome,
}