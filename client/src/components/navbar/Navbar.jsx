import React from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faWirsindhandwerk } from '@fortawesome/free-brands-svg-icons'
import { useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'



const Navbar = () => {
  const navigate = useNavigate()
  const quantity= useSelector((state) => state.cart.quantity)
  //console.log(quantity)

  return (
    <div className='navbar'>
      <div className="navbarWrapper">
        <div className="navbarLeft">
            <select className="languages">
              <option className="language">ENG</option>
              <option className="language">TEL</option>
              <option className="language">HIN</option>
            </select>
            <div className="navbarInputContainer">
              <input type="text" className='navbarInput' placeholder='Search'/>
              <FontAwesomeIcon icon={faSearch} className='navbarSearchIcon' />
            </div>
        </div> 
        <div className="navbarCenter">
          <FontAwesomeIcon icon={faWirsindhandwerk} className='navbarLogo'/> 
          <span className="navbarLogoTitle">HARI</span>
        </div>  
        <div className="navbarRight">
          <span className="NavbarRegister">REGISTER</span>
          <span className="NavbarSignin">SIGNIN</span>
          <div className="navbarCart" onClick={() => navigate("/cart")} >
            <FontAwesomeIcon icon={faCartShopping} />
            {
              quantity > 0 && <div className="navbarCartCount">{quantity}</div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar