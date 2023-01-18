import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faHeart, faSearch, } from '@fortawesome/free-solid-svg-icons'
import '../Styles/Products.css'
import { useState } from 'react'
import FullScreen from './FullScreen'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Store } from '../Store'
import axios from 'axios'


const ProductShow = ({item}) => {
  const [fullScreen,OpenFullScreen]=useState(false)

 

  const {state,dispatch:Dispatch}=useContext(Store)

  const {cart,wish}=state


  const handleScreen=()=>{
    OpenFullScreen(!fullScreen)
  }
  const AddToCart= async()=>{

    const ExistItem=cart.cartItem.find((x)=>x._id===item._id)
    const quantity = ExistItem ? ExistItem.quantity + 1 : 1;

    const {data}=await axios.get(`${process.env.REACT_APP_SERVER_URL}/products/slug/${item.slug}`)
    if(data.CountOfStock < quantity){
      window.alert("Product is out of Stock")
      return
    }

    Dispatch({
      type:"CART_ITEM",
      payload:{...item,quantity}
    })
   
  }
  const AddToWish=()=>{
    
    const ExistItem=wish.wishItem.find((x)=>x._id===item._id)
    const quantity = ExistItem ? ExistItem.quantity : 1;

    if(ExistItem){
      window.alert("Already Product Exists in wishList")
      return
    }
    Dispatch({
      type:"WISH_ITEM",
      payload:{...item,quantity}
    })
  }

  return (
    <div>
        <div className='productContainer' key={item._id}>
            <div className='productImage'>
                <Link to={`/product/${item.slug}`}>
                  <img src={item.image}alt={item.title}></img>
                </Link> 
            </div>
            <div className='productContent'>
                <h2>{item.title}</h2>
                <p>${item.price}</p>
            </div>
            <div className='productButton'>
                <button onClick={handleScreen} className='view'><FontAwesomeIcon icon={faSearch}/></button>
                <button><FontAwesomeIcon onClick={AddToWish} icon={faHeart}/></button>
                
                {item.CountOfStock === 0 ? (<button  disabled>Out Of Stock</button>):
                (<button><FontAwesomeIcon onClick={AddToCart} icon={faBagShopping}/></button>)} 
            </div>
        </div>
        {fullScreen ?    <FullScreen item={item}/> : null}
    </div>
  )
}

export default ProductShow