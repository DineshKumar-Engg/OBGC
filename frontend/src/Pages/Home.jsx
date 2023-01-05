import React from 'react'
import Category from '../Components/Category'
import Header from '../Components/Header'
import ProductsMap from '../Components/ProductsMap'
import ScrollProduct from '../Components/ScrollProduct'
const Home = () => {
  return (
    <div>
      <Header/> 
      <Category/>
      <ProductsMap/>
      <ScrollProduct/>
    </div>
  )
}

export default Home