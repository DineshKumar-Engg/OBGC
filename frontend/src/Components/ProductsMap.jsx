import React from 'react'
// import {ViewProduct} from '../Image'
import ProductShow from './ProductShow'
import '../Styles/Products.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const ProductsMap = () => {

  const [products,setProducts]=useState([])

  useEffect(()=>{
    const fetch = async()=>{
      const result = await axios.get("http://localhost:5000/view")
      setProducts(result.data)
    }
    fetch();
  },[])

  return (
    <div className='productMain'>
        {
            products.slice(0,9).map((item)=>(
                <ProductShow item={item} key={item._id}/>
            ))
        }
    </div>
  )
}

export default ProductsMap