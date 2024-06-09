const stripe = require("stripe")(process.env.STRIPE_KEY)

const payment = async(req,res) => {

    const tokenId = req.body.tokenId;
    try {
        
        const paymentMethod = await stripe.paymentMethods.create({
            type : "card",
            card : {
                token : tokenId
            }
        })

        const paymentIntent = await stripe.paymentIntents.create({
            amount : req.body.amount,
            currency : "INR",
            payment_method_types : ["card"],
            payment_method : paymentMethod.id
        })
        return res.status(200).json(paymentIntent)
    } catch (error) {
        return res.status(500).json(error)
    }

}


module.exports = {
    payment,
}