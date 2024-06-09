import React, { useEffect, useState } from 'react'
import './pay.css'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import {useNavigate} from 'react-router-dom'

const Pay = () => {

    const [stripeToken, setStripeToken] = useState(null)
    const navigate = useNavigate()

    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        const makeRequest = async() => {
            try {
                const res = await axios.post(`/payment`, {tokenId : stripeToken.id, amount: 4000} )
                //console.log(res.data)
                navigate('/success')
            } catch (error) {
                console.log(error)
            }
        }
        stripeToken && makeRequest()
    },[stripeToken])
  return (
    <div className='pay'>
        <StripeCheckout 
            name = "HariNeoCart"
            image = "https://static.vecteezy.com/system/resources/previews/019/514/645/original/letter-h-logo-design-for-business-and-company-identity-with-luxury-concept-free-vector.jpg"
            billingAddress
            shippingAddress
            description = 'Your total bill 40/-'
            currency = 'INR'
            amount = {4000}
            token = {onToken}
            stripeKey ={ process.env.REACT_APP_STRIPE_KEY }
        >
            <button className='payBtn'>Pay Now</button>
        </StripeCheckout>
    </div>
  )
}

export default Pay
