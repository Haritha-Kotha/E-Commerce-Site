import React, { useEffect, useState } from 'react'
import './cart.css'
import Navbar from '../../components/navbar/Navbar'
import Announcement from '../../components/announcement/Announcement'
import Footer from '../../components/footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const cart = useSelector((state) => state.cart)
    //console.log(cart)
    const [stripeToken, setStripeToken] = useState(null)

    const onToken = (token) => setStripeToken(token)
    const navigate = useNavigate()
    useEffect(() => {
        const makeRequest = async() => {
            const res = await axios.post(`/payment`,{
                tokenId : stripeToken.id,
                amount : cart.total * 100
            })
            console.log(res)
            navigate('/success')

        }
        stripeToken && makeRequest()
    },[stripeToken, navigate,cart])
  return (
    <div className='cart'>
      <Navbar />
      <Announcement />
      <div className="cartContainer">
        <div className="cartDetails">
            <div className="cartTitle">YOUR BAG</div>
            <div className="cartBtnsAndLinks">
                <button className="cartBtn shop">CONTINUE SHOPPING</button>
                <div className="cartLinks">
                    <span className="cartLink">Shopping Bag{`(${2})`}</span>
                    <span className="cartLink">Your Wishlist{`(${0})`}</span>
                </div>
                <button className="cartBtn check">CHECKOUT NOW</button>
            </div>
            <div className="cartProductsAndSummary">
                <div className="cartProducts">
                   {
                    cart.products?.map(product => (
                            <div className="cartProduct" key={product?._id}>
                                <div className="cartProductImgContainer">
                                    <img src={product?.img} className='cartProductImg' />
                                </div>
                                <div className="cartProductsDetails">
                                    <div className="cartProductName">
                                        Product : <span className='cartProductNameText'>{product?.title}</span>
                                    </div>
                                    <div className="cartProductId">
                                        ID : <span className="cartProductIdText">{product?._id}</span>
                                    </div>
                                    <div className="cartProductColor">
                                        Color : <span className="cartProductColorText" style={{backgroundColor : `${product?.color}`}}></span>
                                    </div>
                                    <div className="cartProductSize">
                                        Size : <span className="cartProductSizeText">{product?.size}</span>
                                    </div>
                                </div>
                                <div className="cartProductPriceDetails">
                                    <div className="cartProductAdjust">
                                        <FontAwesomeIcon icon={faMinus} className='cartProductAdjustIcon' />
                                        <span className="cartProductItemCount">{product?.quantity}</span>
                                        <FontAwesomeIcon icon={faAdd} className='cartProductAdjustIcon' />
                                    </div>
                                    <div className="cartProductPrice">
                                        Amount : <span className="cartProductPriceText">{product?.quantity * product?.price}</span>
                                    </div>
                                </div>
                        </div>
                    ))
                   }

                </div>
                <div className="cartSummary">
                    <div className="cartSummaryTitle">Order Summary</div>
                    <div className="orderSummaryDetails">
                        <div className="orderSummary">
                            <span className="orderKey">SubTotal : </span>
                            <span className="orderValue">{cart?.total}</span>
                        </div>
                        <div className="orderSummary">
                            <span className="orderKey">Shipping Price : </span>
                            <span className="orderValue">50/-</span>
                        </div>
                        <div className="orderSummary">
                            <span className="orderKey">Shipping Discount : </span>
                            <span className="orderValue">-50/-</span>
                        </div>
                        <div className="orderSummary">
                            <span className="orderKey total">Total : </span>
                            <span className="orderValue total">{cart?.total}</span>
                        </div>
                    </div>
                    <StripeCheckout 
                        name = "HariNeoCart"
                        image = "https://static.vecteezy.com/system/resources/previews/019/514/645/original/letter-h-logo-design-for-business-and-company-identity-with-luxury-concept-free-vector.jpg"
                        billingAddress
                        shippingAddress
                        description = {`Your Total Bill ${cart.total}`}
                        currency = 'INR'
                        amount = {cart.total * 100}
                        token = {onToken}
                        stripeKey ={ process.env.REACT_APP_STRIPE_KEY }
                    >
                    <button className="orderNowBtn">Order Now</button>
                    </StripeCheckout>
                </div>

            </div>
        </div>
        <hr />
        <Footer />
      </div>
    </div>
  )
}

export default Cart