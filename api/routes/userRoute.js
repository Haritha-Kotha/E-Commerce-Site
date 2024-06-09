const { updateUser, deleteUser, getUser, getAllUsers, userStats } = require("../controllers/userController")
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../utils/verifyToken")

const router = require("express").Router()

//update user
router.put('/:id', verifyTokenAndAuthorization, updateUser)
//delete user
router.delete('/:id', verifyTokenAndAuthorization, deleteUser )
//get a user
router.get('/find/:id', verifyTokenAndAdmin, getUser)
//get all users
router.get('/', verifyTokenAndAdmin, getAllUsers)
//get user stats
router.get('/stats', verifyTokenAndAdmin, userStats)
module.exports = router