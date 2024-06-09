const express = require("express")
const app = express()

const mongoose = require("mongoose")

const cors = require("cors")
const authRoute = require("./routes/authRoute")
const userRoute = require('./routes/userRoute')
const productRoute = require("./routes/productRoute")
const orderRoute = require("./routes/orderRoute")
const cartRoute = require("./routes/cartRoute")

const dotenv = require("dotenv")
dotenv.config()

const stripeRoute = require("./routes/stripeRoute")



//Database Connection
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Database Connected")
}).catch((error) => {
    console.log("Database not Connected",error)
})

//middlewares
app.use(express.json())

app.use(cors({
        credentials:true,
        origin:"http://localhost:3000"
}))
//routes
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/products', productRoute)
app.use('/api/cart', cartRoute)
app.use('/api/orders', orderRoute)
app.use('/api/payment', stripeRoute)


//port connection
const PORT = process.env.PORT
app.listen(PORT || 8000, () => {
    console.log(`server is running on port : ${PORT}`)
})