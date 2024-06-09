import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerLeft">
        <div className="footerLeftTitle">HARI.</div>
        <div className="footerLeftDesc">
            This is the company of Future and all websites are avialable here like Social media , E-Commerce , Hotel booking , etc... and You can directly interact with our developers by sending your Mail.
        </div>
      <div className="footerIcons">
        <FontAwesomeIcon icon={faFacebook} className='footerLeftIcon facebook' />
        <FontAwesomeIcon icon={faInstagram} className='footerLeftIcon instagram' />
        <FontAwesomeIcon icon={faTwitter} className='footerLeftIcon twitter' />
        <FontAwesomeIcon icon={faEnvelope} className='footerLeftIcon gmail'/>
      </div>
      </div>
      <div className="footerCenter">
        <div className="footerCenterTitle">Useful Links</div>
        <ul className="footerCenterLinks">
            <div className="footerCenterLinksPart">
                <li>Home</li>
                <li>Man Fashion</li>
                <li>Accessories</li>
                <li>Order Tracking</li>
                <li>Wishlist</li>   
            </div>
            <div className="footerCenterLinksPart">
                <li>Cart</li>
                <li>Women Fashion</li>
                <li>My Account</li>
                <li>Terms</li>
                <li>About</li>
            </div>
        </ul>
      </div>
      <div className="footerRight">
        <div className="footerRightTitle">Contact</div>
        <div className="footerContactDetails">
            <div className="footerContactInfo">
                <FontAwesomeIcon icon={faLocationDot} className='footerContactIcon'/>
                <span>3-14 Ramalayam street, yerrampeta</span>
            </div>
            <div className="footerContactInfo">
                <FontAwesomeIcon icon={faPhone} className='footerContactIcon'/>
                <span>+91 910101020239</span>
            </div>
            <div className="footerContactInfo">
                <FontAwesomeIcon icon={faEnvelope} className='footerContactIcon' />
                <span>hari@gmail.com</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer