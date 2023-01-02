import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import { slideImage } from '../Image'
import React from 'react'
import '../Styles/Banner.css'
import { useState } from 'react'


const Banner = () => {

    const [slideIndex,setSlideindex]=useState(0)

    const handleClick=(direction)=>{
        if(direction==='left'){
           setSlideindex(slideIndex > 0 ? slideIndex - 1 : 6)
        }
        else if(direction==='right'){
            setSlideindex(slideIndex < 6 ? slideIndex + 1 : 0) 
        }
    }

  return (
    <div className='sliderMain'>
        <div className='sliderContainer'>
            <div className='sliderArrow left' onClick={()=>{handleClick("left")}}>
            <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className='sliderWrapper' style={{transform:`translateX(${slideIndex*-100}vw)`}} >
            {
                slideImage.map((item)=>(
                     <div className='sliderImage'>
                        <img src={item.image} className='image' alt=''/>
                    </div>
                ))
            }
            </div>
            <div className='sliderArrow Right' onClick={()=>{handleClick("right")}}>
            <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </div>
    </div>
  )
}

export default Banner