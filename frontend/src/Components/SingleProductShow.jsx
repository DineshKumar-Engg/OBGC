import React, { useState } from 'react'
import '../Styles/SingleProduct.css'
// import {TransformWrapper,TransformComponent} from 'react-zoom-pan-pinch'
import { useContext } from 'react'
import { Store } from '../Store'


const SingleProductShow = ({product}) => {

    const [selectImage,ChangeImage] =useState('')

    const {dispatch:cartDispatch}=useContext(Store)

  const AddToCart=()=>{
    cartDispatch({type:"CART_ITEM",payload:{...product,quantity:1}})
  }
// // "react-zoom-pan-pinch": "^2.1.3",
  return (
    <div className='singleProductMain'>
        <div className='singleProductRow'>
            <div className='singleproductCol'>
            <div className='singleproductImage'>
              <div className='singleproductFullImage'>
                {/* <TransformWrapper>
                    <TransformComponent> */}
                    <img className='ProductFullImage' src={selectImage || product.image} alt={product.title}/>
                    {/* </TransformComponent>
                </TransformWrapper>      */}
              </div>
              <div className='singleproductHalfImage'>
                  <img src={product.image} onClick={()=>{ChangeImage(`${product.image}`)}} alt={product.title} />
                  <img src={product.images1} onClick={()=>{ChangeImage(`${product.images1}`)}} alt={product.title} />
                  <img src={product.images2} onClick={()=>{ChangeImage(`${product.images2}`)}}  alt={product.title} />
                  <img src={product.images3} onClick={()=>{ChangeImage(`${product.images3}`)}} alt={product.title} />
              </div>
            </div>
            </div>
            <div className='singleproductCol'>
            <div className='singleTitleCategory div'>
                  <h2>{product.title}</h2>
                  <p>{product.category}</p>
            </div>
            <div className='singlePriceQuantity div'>
              <p>${product.price}</p>
              <p>Quantity:1</p>
            </div>
            <div className='singledescription div'>
              <p>{product.desc}</p>
            </div>
            <div className='singleCartWish div'>
              <button className='cart' onClick={AddToCart}>Add To Cart</button>
              <button className='wish'>Add To Wish</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SingleProductShow