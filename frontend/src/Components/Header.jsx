import React, { useReducer } from 'react'
import '../Styles/Header.css'
import HeroSlider, { Slide,Nav} from "hero-slider";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import Loading from './Loading';

const reducer=(state,action)=>{
  switch(action.type){
    case "Product Request":
      return{...state,loading:true};
    case "Product Success":
      return{...state,loading:false,};
    case "Product fails":
      return{...state,loading:false,error:action.payload};
  default:
    return state;
  }
}









const Header = () => {

  const [slider,setSlider]=useState([])


  const [{loading},dispatch] = useReducer(reducer,{
    loading:true,
  })


    useEffect(()=>{
      const fetchSlider=async()=>{
        dispatch({type:"Product Request"})

        const result = await axios.get(`${process.env.REACT_APP_SERVER_URL}/slider`)
        setSlider(result.data)
      }
      fetchSlider();
      dispatch({type:'Product Success'})

    },[])

  return (
    <div className='headerMain'>
    {
      loading?(<Loading/>):(
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
      )
    }
  </div>
  )
}

export default Header