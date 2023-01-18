import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useReducer } from 'react';
import { useParams } from 'react-router-dom'
import Loading from './Loading';
import SingleProductShow from './SingleProductShow';
import {getError } from '../utils'
const reducer=(state,action)=>{
    switch(action.type){
      case "Product Request":
        return{...state,loading:true};
      case "Product Success":
        return{...state,product:action.payload,loading:false,};
      case "Product fails":
        return{...state,loading:false,error:action.payload};
    default:
      return state;
    }
  }


const SingleProduct = () => {

    const params = useParams()
    const {slug}=params

    const [{loading,error,product},dispatch] = useReducer(reducer,{
        product:[],
        loading:true,
        error:''
      })
    
      useEffect(()=>{
        const fetch = async()=>{
          dispatch({type:"Product Request"})
          try{
            const result = await axios.get(`${process.env.REACT_APP_SERVER_URL}/products/slug/${slug}`)
            dispatch({type:'Product Success',payload:result.data})
          }catch(err){
            dispatch({type:'Product fails',payload:getError(err)})
          }
        } 
        fetch();
      },[slug])
    


  return (
    <div>
        <h1>
        {
          loading?
          (<Loading/>):
          error?
          (<h3 style={{margin:'20px',color:'red',textAlign:'center',height:'100vh'}}>{error}</h3>):
          (
          <SingleProductShow item={product}/>
          )
        }
        </h1>
    </div>
  )
}

export default SingleProduct