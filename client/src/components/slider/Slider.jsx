import React, { useEffect, useState } from 'react'
import './slider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import {sliderItems} from '../../dummyData'

const Slider = () => {
    const [slideIndex, setSlideIndex]= useState(0)
    useEffect(()=>{
        const slideWrapper = document.querySelector(".sliderWrapper")
        slideWrapper.style.transform = `translateX( ${slideIndex*-99.65}vw)`
    },[slideIndex])

    const handleSlider = (direction) => {
        if(direction === 'left')
        {
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 5)
        }
        if(direction === 'right')
        {
            setSlideIndex(slideIndex < 5 ? slideIndex+1 : 0)
        }
    }
  return (
    <div className='slider'>
        <div className="sliderWrapper">
            {
                sliderItems.map(sliderItem => (
                <div className="slide" key = {sliderItem.id} style={{backgroundClip :`${sliderItem.bg}`}}>
                    <div className="slideDesign"></div>
                    <img src={sliderItem?.img} alt="" className="imgSlide" />
                    <div className="slideIcons">
                        <FontAwesomeIcon icon = {faCaretLeft} className='leftSlideIcon' onClick={()=>handleSlider('left')} />
                        <FontAwesomeIcon icon = {faCaretRight} className='rightSlideIcon' onClick={()=>handleSlider('right')}/>
                    </div>
                    <div className="slideInfo">
                        <h1 className="slideInfoTitle">{sliderItem?.title}</h1>
                        <p className="slideInfoDesc">{sliderItem?.desc}</p>
                        <button className="slideInfoBtn">Shop now</button>
                    </div>
                </div>
                ))
            }
        </div>
    </div>
  )
}

export default Slider