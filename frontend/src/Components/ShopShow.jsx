import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faHeart, faSearch, } from '@fortawesome/free-solid-svg-icons'
import '../Styles/Products.css'
import { useState } from 'react'
import FullScreen from './FullScreen'
import { Link } from 'react-router-dom'

const ShopShow = ({item}) => {

    const [fullScreen,OpenFullScreen]=useState(false)

    const handleScreen=()=>{
        OpenFullScreen(true)
        console.log(fullScreen);
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
                <button><FontAwesomeIcon icon={faHeart}/></button>
                <button><FontAwesomeIcon icon={faBagShopping}/></button>
            </div>
        </div>
        {fullScreen ?    <FullScreen item={item}/> : null}
    </div>
  )
}

export default ShopShow