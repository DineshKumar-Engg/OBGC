import React, { useReducer } from 'react'
import '../Styles/Category.css'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Loading from './Loading'

const reducer=(state,action)=>{
  switch(action.type){
    case "Product Request":
      return{...state,loading:true};
    case "Product Success":
      return{...state,category:action.payload,loading:false,};
    case "Product fails":
      return{...state,loading:false,error:action.payload};
  default:
    return state;
  }
}







const Category = () => {

    const [{loading,error,category},dispatch] = useReducer(reducer,{
      category:[],
      loading:true,
      error:''
    })
    useEffect(()=>{

     
     
      const fetch = async()=>{
        dispatch({type:"Product Request"})
        try{
          const result = await axios.get(`${process.env.REACT_APP_SERVER_URL}/category`)
          dispatch({type:'Product Success',payload:result.data})
        }catch(error){
          dispatch({type:'Product fails',payload:error.message})
        }
      }
      fetch();
    },[])

    const navigate = useNavigate();

    const categoryshop =()=>{
        navigate(`/shop`)
    }


    return (
        <div className="categoryContainer">
        <div className='categoryMain'>
                {loading ? (<Loading/>):error?(<h1>Please Reload Page</h1>):(
                    category.map((item)=>(

                    <div className="category" key={item._id}>
                    <img src={item.image} alt="" />
                    <div className='content'>
                    <p>{item.title}</p>
                    <button type='button'onClick={categoryshop}>Shop Now</button>
                    </div>
                    </div>

                    ))
                )}
        </div>
        </div>
    )
}

export default Category