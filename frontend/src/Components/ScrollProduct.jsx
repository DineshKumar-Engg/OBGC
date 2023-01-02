import React from 'react'
import { MensProduct,GirlsProduct,KidsProduct } from '../Images/Image'
import '../Styles/Scroll.css'
const ScrollProduct = () => {
  return (
    <div className='scrollMain'>
        <div className='scrollContainer'>
           <div className='MensContainer'>
            <div className='MensTitle'>
            <h1>Latest Mens Product</h1>
            </div>               
            {
                MensProduct.slice(0,5).map((item)=>(
                    <div className='mensProduct'key={item._id}>
                        <img src={item.image} alt={item.title}/>
                        <p>${item.price}</p>
                        <button><span class="layer"></span>Buy</button>
                    </div>
                ))
            }
           </div>
           <div className='MensContainer'>
            <div className='MensTitle'>
            <h1>Latest Girls Product</h1>
            </div>
                
            {
                GirlsProduct.map((item)=>(
                    <div className='mensProduct' key={item._id}>
                        <img src={item.image} alt={item.title}/>
                        <p>${item.price}</p>
                        <button><span class="layer"></span>Buy</button>
                    </div>
                ))
            }
           </div>
           <div className='MensContainer'>
            <div className='MensTitle'>
            <h1>Latest Kids Product</h1>
            </div>
                
            {
                KidsProduct.map((item)=>(
                    <div className='mensProduct' key={item._id}>
                        <img src={item.image} alt={item.title}/>
                        <p>${item.price}</p>
                        <button><span class="layer"></span>Buy</button>
                    </div>
                ))
            }
           </div>
        </div>        
    </div>
  )
}

export default ScrollProduct