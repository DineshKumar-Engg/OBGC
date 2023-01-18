import React from 'react'
import '../Styles/Category.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Category = () => {
    const [category,setCategory]=useState([])

    useEffect(()=>{
      const fetch = async()=>{
        const result = await axios.get(`${process.env.REACT_APP_SERVER_URL}/category`)
        setCategory(result.data)
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
                {
                    category.map((item)=>(

                    <div className="category" key={item._id}>
                    <img src={item.image} alt="" />
                    <div className='content'>
                    <p>{item.title}</p>
                    <button type='button'onClick={categoryshop}>Shop Now</button>
                    </div>
                    </div>

                    ))
                }
        </div>
        </div>
    )
}

export default Category