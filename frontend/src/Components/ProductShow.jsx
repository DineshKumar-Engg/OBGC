import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faHeart, faSearch, } from '@fortawesome/free-solid-svg-icons'
import '../Styles/Products.css'
import { useState } from 'react'
import FullScreen from './FullScreen'

const ProductShow = ({item}) => {
  const [fullScreen,OpenFullScreen]=useState(false)

  const handleScreen=()=>{
    OpenFullScreen(true)
    console.log(fullScreen);
  }
  return (
    <div>
        <div className='productContainer' key={item._id}>
            <div className='productImage'>
                <img src={item.image}alt={item.title}></img>
            </div>
            <div className='productContent'>
                <h2>{item.title}</h2>
                <p>${item.price}</p>
            </div>
            <div className='productButton'>
                <button onClick={handleScreen} className='view'><FontAwesomeIcon icon={faSearch}/></button>
                <button><FontAwesomeIcon icon={faHeart}/></button>
                <button><FontAwesomeIcon icon={faBagShopping}/></button>
            </div>
        </div>
        {fullScreen ?    <FullScreen item={item}/> : null}
    </div>
  )
}

export default ProductShow