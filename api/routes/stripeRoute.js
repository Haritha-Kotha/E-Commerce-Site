const { payment } = require('../controllers/stripeController')

const router = require('express').Router()

router.post('/', payment)

module.exports = router