const User = require("../models/User")

const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

//register
const register = async(req, res) => {

    //hashing password
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(req.body.password,salt)

    const user = new User({
        username : req.body.username,
        email : req.body.email,
        password : hashedPassword
    })
    try {
        const savedUser = await user.save()
        const {password, ...others} = savedUser._doc
        return res.status(200).json(others)
    } catch (error) {
        return res.status(404).json(error)
    }
}

const login = async(req,res) => {
    try {
        const user = await User.findOne({
            username : req.body.username
        })
        if(!user)
        {
            return res.status(404).json("User not found!..")
        }
        const isPassword = bcrypt.compareSync(req.body.password, user.password)
        if(!isPassword)
        {
            return res.status(404).json("Passwords doen't match!..")
        }
        const accessToken = jwt.sign(
        {
            id : user._id,
            isAdmin : user.isAdmin
        },
        process.env.JWT_SECRET_KEY,
        {expiresIn : "4d"},
        )
        const {password, ...others} = user._doc
        return res.status(200).json({...others,accessToken})
    } catch (error) {
        return res.status(404).json(error)
    }
}


module.exports = {
    register,
    login,
}