import React from 'react'
import {ViewProduct} from '../Images/Image'
import ProductShow from './ProductShow'
import '../Styles/Products.css'
const ProductsMap = () => {

  return (
    <div className='productMain'>
        {
            ViewProduct.slice(0,9).map((item,index)=>(
                <ProductShow item={item} key={item.id} index={index}/>
            ))
        }
    </div>
  )
}

export default ProductsMap