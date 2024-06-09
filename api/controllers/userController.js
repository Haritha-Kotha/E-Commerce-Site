const bcrypt = require("bcrypt")
const User = require("../models/User")

//update user
const updateUser = async(req, res) => {
    if(req.body.password) {
        const salt = bcrypt.genSaltSync(10)
        req.body.password = bcrypt.hashSync(req.body.password, salt) 
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(
        req.params.id, 
        {
            $set : req.body
        },
        {
            new : true
        }
        )
        return res.status(200).json(updatedUser)
    } catch (error) {
        return res.status(500).json(error)
    }
}

//delete user
const deleteUser = async(req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        return res.status(200).json("User has been deleted successfully")
    } catch (error) {
        return res.status(404).json(error)
    }
}

//get a user
const getUser = async(req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const {password, ...others} = user._doc
        return res.status(200).json(others)
    } catch (error) {
        return res.status(404).json(error)
    }
}

//get all users
const getAllUsers = async(req, res) => {
    const query = req.query.new
    try {
        const users = query 
        ? await User.find().sort({_id : -1}).limit(5)
        : await User.find()
        return res.status(200).json(users)
    } catch (error) {
        return res.status(404).json(error)
    }
}

//get user stats
const userStats = async(req, res) => {
    const date = new Date()
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))
    try {
        const data = await User.aggregate([
            {$match : { createdAt : {$gte : lastYear}}},
            {$project : { month : {$month : "$createdAt"}}},
            {$group : {_id : "$month", total : {$sum : 1}}}
        ])
        return res.status(200).json(data)
    } catch (error) {
     return res.status(404).json(error)   
    }
}


module.exports = {
    updateUser,
    deleteUser,
    getUser,
    getAllUsers,
    userStats
}