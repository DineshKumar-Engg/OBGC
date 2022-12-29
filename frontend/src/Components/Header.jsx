import React from 'react'
import '../Styles/Header.css'
import HeroSlider, { Slide,Nav} from "hero-slider";

const image1 =require('../Images/FrontBanner/image1.jpg')
const image2 = require('../Images/FrontBanner/image2.jpg')
const image3 = require('../Images/FrontBanner/image3.jpg')
const image4 = require('../Images/FrontBanner/image4.jpg')
const image5 =require('../Images/FrontBanner/image5.jpg')
const image6 =require('../Images/FrontBanner/image6.jpg')
const image7 =require('../Images/FrontBanner/image7.jpg')
const Header = () => {
  return (
    <div className='headerMain'>
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      height={"100vh"}
      // autoplay
      controller={{
        initialSlide: 1,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        // autoplayDuration: 5000,
      }}
  >

    <Slide
      shouldRenderMask
      background={{
        backgroundImageSrc:image1,
        backgroundAttachment: "fixed"
      }}
    />

    <Slide
      shouldRenderMask
      background={{
        backgroundImageSrc:image2,
        backgroundAttachment: "fixed"
      }}
    />

    <Slide
      shouldRenderMask
      background={{
        backgroundImageSrc:image3,
        backgroundAttachment: "fixed"
      }}
    />

    <Slide
         shouldRenderMask
      background={{
        backgroundImageSrc:image4,
        backgroundAttachment: "fixed"
      }}
    />
    <Slide
         shouldRenderMask
      background={{
        backgroundImageSrc:image5,
        backgroundAttachment: "fixed"
      }}
    />
    <Slide
         shouldRenderMask
      background={{
        backgroundImageSrc:image6,
        backgroundAttachment: "fixed"
      }}
    />
    <Slide
         shouldRenderMask
      background={{
        backgroundImageSrc:image7,
        backgroundAttachment: "fixed"
      }}
    />
  <Nav/>
  </HeroSlider>
  </div>
  )
}

export default Header