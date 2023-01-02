import React from 'react'
// import { categoryImage } from '../Image'
import '../Styles/Category.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'


const Category = () => {
    const [category,setCategory]=useState([])

    useEffect(()=>{
      const fetch = async()=>{
        const result = await axios.get("http://localhost:5000/category")
        setCategory(result.data)
      }
      fetch();
    },[])
    return (
        <div className="categoryContainer">
        <div className='categoryMain'>
                {
                    category.map((item)=>(

                    <div className="category" key={item._id}>
                    <img src={item.image} alt="" />
                    <div className='content'>
                    <p>{item.title}</p>
                    <button type='button'>Shop Now</button>
                    </div>
                    </div>

                    ))
                }
        </div>
        </div>
    )
}

export default Category