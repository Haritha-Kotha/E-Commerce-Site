import React from 'react'
import './categoryItem.css'
import {useNavigate} from 'react-router-dom'

const CategoryItem = ({item}) => {
  const navigate = useNavigate()
  return (
    <div className='categoryItem' onClick={() => navigate(`/products/${item.cat}`)} >
        <img src={item?.img} alt="" className="categoryItemImg" />
        <div className="categoryItemInfo">
            <div className="categoryItemInfoTitle">{item?.title}</div>
            <button className="categoryItemInfoBtn">SHOP NOW</button>
        </div>
    </div>
  )
}

export default CategoryItem