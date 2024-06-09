const Cart= require("../models/Cart")

//create Cart
const createCart = async(req, res) => {
    const newCart = new Cart(req.body)
    try {
        const savedCart = await newCart.save()
        return res.status(200).json(savedCart)
    } catch (error) {
        return res.status(404).json(error)
    }
}

//update Cart
const updateCart = async(req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
        req.params.id, 
        {
            $set : req.body
        },
        {
            new : true
        }
        )
        return res.status(200).json(updatedCart)
    } catch (error) {
        return res.status(500).json(error)
    }
}

// delete user
const deleteCart = async(req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id)
        return res.status(200).json("Cart has been deleted successfully")
    } catch (error) {
        return res.status(404).json(error)
    }
}

//get a user
const getCart = async(req, res) => {
    try {
        const cart = await Cart.findOne({userId : req.params.userId})
        return res.status(200).json(cart)
    } catch (error) {
        return res.status(404).json(error)
    }
}

//get all Carts
const getAllCarts = async(req, res) => {
   try {
    const carts = await Cart.find()
    return res.status(200).json(carts)
   } catch (error) {
        return res.status(404).json(error)
   }
}



module.exports = {
    createCart,
    updateCart,
    deleteCart,
    getCart,
   getAllCarts,
}