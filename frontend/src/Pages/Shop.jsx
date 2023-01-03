import React from 'react'
import ShopMap from '../Components/ShopMap'
import '../Styles/shop.css'

const Shop = () => {
  return (
    <div className='s-Main'>
      <div className='s-Row'>
        <div className='s-Col'>
            <ShopMap/>
        </div>
      </div>
    </div>
  )
}

export default Shop