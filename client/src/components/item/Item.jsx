import React from 'react'
import './item.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping, faHeart, faSearch} from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from 'react-router-dom'


function Item({item}) {
  const navigate = useNavigate()
  return (
    <div className='item'>
        <img src={item?.img} alt="" className="itemImg"/>
        <div className="itemInfo">
          <FontAwesomeIcon icon={faCartShopping} className='itemIcon'/>
          <FontAwesomeIcon icon={faSearch} className='itemIcon' onClick={() => navigate(`/product/${item._id}`)}/>
          <FontAwesomeIcon icon={faHeart} className='itemIcon'/>
        </div>

    </div>
  )
}

export default Item