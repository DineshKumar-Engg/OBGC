import React, { useState } from 'react'
import '../Styles/SingleProduct.css'
// import {TransformWrapper,TransformComponent} from 'react-zoom-pan-pinch'
import { useContext } from 'react'
import { Store } from '../Store'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const SingleProductShow = ({item}) => {

    const [selectImage,ChangeImage] =useState('')

    const {state,dispatch:Dispatch}=useContext(Store)

    const {cart,wish}=state

    const navigate =useNavigate()
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
   
    navigate('/cart')
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
    navigate('/wish')
  }
  return (
    <div className='singleProductMain'>
        <div className='singleProductRow'>
            <div className='singleproductCol'>
            <div className='singleproductImage'>
              <div className='singleproductFullImage'>
                {/* <TransformWrapper>
                    <TransformComponent>
                    <img className='ProductFullImage' src={selectImage || product.image} alt={product.title}/>
                    </TransformComponent>
                </TransformWrapper>      */}
              <img className='ProductFullImage' src={selectImage || item.image} alt={item.title}/>

              </div>
              <div className='singleproductHalfImage'>
                  <img src={item.image} onClick={()=>{ChangeImage(`${item.image}`)}} alt={item.title} />
                  <img src={item.images1} onClick={()=>{ChangeImage(`${item.images1}`)}} alt={item.title} />
                  <img src={item.images2} onClick={()=>{ChangeImage(`${item.images2}`)}}  alt={item.title} />
                  <img src={item.images3} onClick={()=>{ChangeImage(`${item.images3}`)}} alt={item.title} />
              </div>
            </div>
            </div>
            <div className='singleproductCol'>
            <div className='singleTitleCategory div'>
                  <h2>{item.title}</h2>
                  <p>{item.category}</p>
            </div>
            <div className='singlePriceQuantity div'>
              <p>${item.price}</p>
              <p>Quantity:1</p>
            </div>
            <div className='singledescription div'>
              <p>{item.desc}</p>
            </div>
            <div className='singleCartWish div'>
            { item.CountOfStock === item.quantity ? (<p>Out of Stock</p>):
                (<button className='cart' onClick={AddToCart}>Add To Cart</button>)}
              <button className='wish'onClick={AddToWish}>Add To Wish</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SingleProductShow