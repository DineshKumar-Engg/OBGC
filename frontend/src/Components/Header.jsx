import React from 'react'
import '../Styles/Header.css'
import HeroSlider, { Slide,Nav} from "hero-slider";

const image1 =require('../Images/FrontBanner/image1.jpg')
const image2 = require('../Images/FrontBanner/image2.jpg')
const image3 = require('../Images/FrontBanner/image3.jpg')
const image4 = require('../Images/FrontBanner/image4.jpg')
const image5 =require('../Images/FrontBanner/image5.jpg')

const Header = () => {
  return (
    <div className='headerMain'>
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      height={"80vh"}
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) =>
        console.log("onBeforeChange", previousSlide, nextSlide)
      }
      onChange={nextSlide => console.log("onChange", nextSlide)}
      onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
    settings={{
      slidingDuration:250,
      
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
  {/* <Nav/> */}
  </HeroSlider>
  </div>
  )
}

export default Header