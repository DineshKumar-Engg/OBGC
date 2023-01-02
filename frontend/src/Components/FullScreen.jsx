import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import '../Styles/FullScreen.css'

const FullScreen = ({item}) => {

  const [style,setStyle]=useState("FullScreenMain");

  const [selectImage,ChangeImage] =useState('')

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
          <button  onClick={()=>{setStyle('OffScreenMain')}}><FontAwesomeIcon icon={faClose}/></button>
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
              <button className='cart'>Add To Cart</button>
              <button className='wish'>Add To Wish</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FullScreen