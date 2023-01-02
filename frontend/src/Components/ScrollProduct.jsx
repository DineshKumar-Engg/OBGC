import React from 'react'
import '../Styles/Scroll.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const ScrollProduct = () => {
    const [scrollProduct,setScrollProduct]=useState({
        MensProduct:[],
        GirlsProduct:[],
        KidsProduct:[]
    })

    useEffect(()=>{
      const fetch = async()=>{
        const result = await axios.get("http://localhost:5000/scroll")

        setScrollProduct(
        {
            MensProduct:result.data[0].MensProduct,
            GirlsProduct:result.data[0].GirlsProduct,
            KidsProduct:result.data[0].KidsProduct
        }
        )
    } 
      fetch();
    },[])
  return (
    <div className='scrollMain'>
        <div className='scrollContainer'>
           <div className='MensContainer'>
            <div className='MensTitle'>
            <h1>Latest Mens Product</h1>
            </div>               
            {
                scrollProduct.MensProduct.map((item)=>(
                    <div className='mensProduct'key={item._id}>
                        <img src={item.image} alt={item.title}/>
                        <p>${item.price}</p>
                        <button><span className="layer"></span>Buy</button>
                    </div>
                ))
            }
           </div>
           <div className='MensContainer'>
            <div className='MensTitle'>
            <h1>Latest Girls Product</h1>
            </div>
                
            {
                scrollProduct.GirlsProduct.map((item)=>(
                    <div className='mensProduct' key={item._id}>
                        <img src={item.image} alt={item.title}/>
                        <p>${item.price}</p>
                        <button><span className="layer"></span>Buy</button>
                    </div>
                ))
            }
           </div>
           <div className='MensContainer'>
            <div className='MensTitle'>
            <h1>Latest Kids Product</h1>
            </div>
                
            {
                scrollProduct.KidsProduct.map((item)=>(
                    <div className='mensProduct' key={item._id}>
                        <img src={item.image} alt={item.title}/>
                        <p>${item.price}</p>
                        <button><span className="layer"></span>Buy</button>
                    </div>
                ))
            }
           </div>
        </div>        
    </div>
  )
}

export default ScrollProduct