import React, { useEffect, useState } from 'react'
import './product.css'
import Navbar from '../../components/navbar/Navbar'
import Announcement from '../../components/announcement/Announcement'
import NewsLetter from '../../components/newsLetter/NewsLetter'
import Footer from '../../components/footer/Footer'
import { faAdd, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useLocation} from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/cartRedux'

function Product() {

  const location = useLocation()
  const id = location.pathname.split('/')[2]
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState("")
  const [size, setSize] = useState("")

  const dispatch = useDispatch()

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`/products/find/${id}`)
        setProduct(res.data)
      //  console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getProduct()
  },[id])
  //console.log(product)
  const handleQuantity = (type) => {
    if(type === "dec")
    {
      quantity > 1 && setQuantity(prev => prev-1)
    }
    else {
      setQuantity(prev => prev+1)
    }
  }

  const handleClick = () => {
    dispatch(addProduct({...product, quantity, color,size}))
  }

  return (
    <div className='product'>
        <Navbar/>
        <Announcement/>
        <div className="productContainer">
        <div className="productDetails">
            <div className="productDetailsLeft">
                <img src={product?.img} alt="" className='productDetailsImg'/>
            </div>
          <div className="productDetailsRight">
            <div className="productDetailsRightTitle">{product?.title}</div>
            <div className="productDetailsRightDesc">
              {product?.desc}
            </div>
            <div className="productDetailsRightPriceContainer">
              <span className="productDetailsRightPriceText">Amount : </span>
              <span className="productDetailsRightPrice">{product?.price}/-</span>
            </div>

            <div className="productDetailsColorsAndSizes">
              <div className="productDetailsColors">
                <div className="productDetailsColorText">Color : </div>
                  {
                    product.color?.map((color) => (
                        <span className="productDetailsColor" 
                        key = {color} 
                        style={{backgroundColor:`${color}`}}
                        onClick={() => setColor(color)}></span>
                    ))
                  }                  
              </div>
              <div className="productDetailsSizes">
                <div className="productDetailsSizeText">Size : </div>
                <select className="productDetailsSizeSelect" onChange={(e) => setSize(e.target.value)}>
                  <option className="productDetailsSizeOption" hidden>Size</option>
                  {
                    product.size?.map((size) => (
                       <option className="productDetailsSizeOption"
                        key = {size}>{size}</option>
                    ))
                  }
                </select>
              </div>
            </div>

            <div className="productDetailsCountAndCart">
              <div className="productDetailsCountContainer">
                <FontAwesomeIcon icon={faMinus} onClick={() => handleQuantity("dec")} />
                <span className="productDetailsCount">{quantity}</span>
                <FontAwesomeIcon icon={faAdd} onClick={() => handleQuantity("inc")}/>
              </div>
              <button className="productDetailsCartBtn" onClick={handleClick}>ADD TO CART</button>
            </div>
          </div>
            </div>
            <NewsLetter/>
            <Footer/>
        </div>
    </div>
  )
}

export default Product