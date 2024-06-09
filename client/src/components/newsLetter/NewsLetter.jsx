import React from 'react'
import './newsLetter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const NewsLetter = () => {
  return (
    <div className='newsLetter'>
      <div className="newsLetterTitle">NewsLetter</div>
      <div className="newsLetterDesc">Get timely updates from your favorite products.</div>
      <div className="newsLetterInputcontainer">
        <input type="email" placeholder='Your Email' className="newsLetterInput" />
        <button className='newLetterBtn'>
            <FontAwesomeIcon icon={faPaperPlane} className='newsLetterSendBtn' />
        </button>
      </div>
    </div>
  )
}

export default NewsLetter