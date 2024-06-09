import React from 'react'
import './announcement.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRegistered } from '@fortawesome/free-solid-svg-icons'

const Announcement = () => {
  return (
    <div className='announcement'>
      Super Deal is here now!.. Shop on
      <b className='announcementLogo'>@Harineocart</b><FontAwesomeIcon icon={faRegistered} className='announcementRigisteredIcon'/>
    </div>
  )
}

export default Announcement