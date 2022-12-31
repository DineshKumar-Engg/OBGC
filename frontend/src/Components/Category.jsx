import React from 'react'
import { categoryImage } from '../Images/Image'
import '../Styles/Category.css'

const Category = () => {
    return (
        <div className="categoryContainer">
        <div className='categoryMain'>
                {
                    categoryImage.map((item)=>(

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