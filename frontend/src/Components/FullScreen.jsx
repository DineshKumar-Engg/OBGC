import React, { useContext } from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import '../Styles/FullScreen.css'
import { Store } from '../Store'
import axios from 'axios'


const FullScreen = ({item}) => {

  const [style,setStyle]=useState("FullScreenMain");

  const [selectImage,ChangeImage] =useState('')

  const {state,dispatch:Dispatch}=useContext(Store)

  const {cart,wish}=state

  const closeScreen=()=>{
    setStyle('OffScreenMain')
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
    <div className={style}>
      <div  className='screenContainer' key={item._id}>
        <div className='screenHalf'>
            <div className='screenImage'>
              <div className='FullSizeImage'>
                <img src={selectImage || item.image} alt={item.title}/>
              </div>
              <div className='HalfSizeImage'>
                  <img src={item.image} onClick={()=>{ChangeImage(`${item.image}`)}} alt={item.title} />
                  <img src={item.images1} onClick={()=>{ChangeImage(`${item.images1}`)}} alt={item.title} />
                  <img src={item.images2} onClick={()=>{ChangeImage(`${item.images2}`)}}  alt={item.title} />
                  <img src={item.images3} onClick={()=>{ChangeImage(`${item.images3}`)}} alt={item.title} />
              </div>
            </div>
        </div>
        <div className='screenHalf'>
          <div className='closeButton'>
          <button  onClick={closeScreen}><FontAwesomeIcon icon={faClose}/></button>
          </div>
         
             <div className='TitleCategory div'>
                  <h2>{item.title}</h2>
                  <p>{item.category}</p>
            </div>
            <div className='PriceQuantity div'>
              <p>${item.price}</p>
              <p>Quantity:1</p>
            </div>
            <div className='description div'>
              <p>{item.desc}</p>
            </div>
            <div className='CartWish div'>
            { item.CountOfStock === item.quantity ? (<p>Out of Stock</p>):
                (<button className='cart' onClick={AddToCart}>Add To Cart</button>)}
              <button className='wish' onClick={AddToWish}>Add To Wish</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FullScreen