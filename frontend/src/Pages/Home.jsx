import React from 'react'
import Category from '../Components/Category'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Products from '../Components/Products'
import ScrollProduct from '../Components/ScrollProduct'
const Home = () => {
  return (
    <div>
      <Header/>
      <Category/>
      <Products/>
      <ScrollProduct/>
      <Footer/>
    </div>
  )
}

export default Home