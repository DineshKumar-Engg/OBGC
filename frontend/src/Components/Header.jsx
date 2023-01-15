import React from 'react'
import '../Styles/Header.css'
import HeroSlider, { Slide,Nav} from "hero-slider";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
const Header = () => {

  const [slider,setSlider]=useState([])

    useEffect(()=>{
      const fetchSlider=async()=>{
        const result = await axios("http://localhost:5000/slider")
        setSlider(result.data)
      }
      fetchSlider();
    },[])

  return (
    <div className='headerMain'>
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      height={"100vh"}
      autoplay
      controller={{
        initialSlide: 1,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
      }}
  >
    {
      slider.map((item)=>(
        <Slide
      background={{
        backgroundImageSrc:item.image,
        backgroundAttachment: "fixed"
      }} key={item._id}
    />
      ))
    }
    
  <Nav/>
  </HeroSlider>
  </div>
  )
}

export default Header