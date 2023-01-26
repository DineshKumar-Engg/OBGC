import React, { useReducer } from 'react'
import '../Styles/Scroll.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Loading from './Loading'


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







const ScrollProduct = () => {
    const [scrollProduct,setScrollProduct]=useState({
        MensProduct:[],
        GirlsProduct:[],
        KidsProduct:[]
    })
    const [{loading},dispatch] = useReducer(reducer,{
        loading:true,
      })

    useEffect(()=>{
      const fetch = async()=>{
        dispatch({type:"Product Request"})

        const result = await axios.get(`${process.env.REACT_APP_SERVER_URL}/scroll`)

        setScrollProduct(
        {
            MensProduct:result.data[0].MensProduct,
            GirlsProduct:result.data[0].GirlsProduct,
            KidsProduct:result.data[0].KidsProduct
        }
        )
        dispatch({type:'Product Success'})
    } 
      fetch();
    },[])
  return (
    <div className='scrollMain'>
        <div className='scrollContainer'>
           {
            loading ? (<Loading/>):(
                <>
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
                </>
            )
           }
        </div>        
    </div>
  )
}

export default ScrollProduct