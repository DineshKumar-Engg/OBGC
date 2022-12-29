import React from 'react'
import { productsImage } from '../Images/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faHeart, faSearch, } from '@fortawesome/free-solid-svg-icons'
import '../Styles/Products.css'


const Products = () => {
    
  return (
    <div className='productMain'>
       {
        productsImage.map((item)=>(
        <div className='productContainer'>
            <div className='productImage'>
                <img src={item.image}alt={item.id}></img>
            </div>
            <div className='productContent'>
                <h2>{item.title}</h2>
                <p>${item.price}</p>
            </div>
            <div className='productButton'>
                <button><FontAwesomeIcon icon={faSearch}/></button>
                <button><FontAwesomeIcon icon={faHeart}/></button>
                <button><FontAwesomeIcon icon={faBagShopping}/></button>
            </div>
        </div>
        ))
       }
    </div>
  )
}

export default Products