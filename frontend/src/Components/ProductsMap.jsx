import React from 'react'
import ProductShow from './ProductShow'
import '../Styles/Products.css'
import { useReducer } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Loading from './Loading'

const reducer=(state,action)=>{
  switch(action.type){
    case "Product Request":
      return{...state,loading:true};
    case "Product Success":
      return{...state,products:action.payload,loading:false,};
    case "Product fails":
      return{...state,loading:true,error:action.payload};
  default:
    return state;
  }
}

const ProductsMap = () => {

  const [{loading,error,products},dispatch] = useReducer(reducer,{
    products:[],
    loading:true,
    error:''
  })

  useEffect(()=>{
    const fetch = async()=>{
      dispatch({type:"Product Request"})
      try{
        const result = await axios.get(`${process.env.REACT_APP_SERVER_URL}/products`)
        dispatch({type:'Product Success',payload:result.data})
      }catch(error){
        dispatch({type:'Product fails',payload:error.message})
      }
    }
    fetch();
  },[])

  return (
    <div className='productMain'>
        {
          loading?(<Loading/>):
          error?(<h1>Please Wait for a moments</h1>):
          (
            products.slice(0,9).map((item)=>(
              <ProductShow item={item} key={item._id}/>
          ))
          )
        }
    </div>
  )
}

export default ProductsMap