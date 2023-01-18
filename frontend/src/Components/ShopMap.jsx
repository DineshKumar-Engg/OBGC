import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import ShopShow from './ShopShow'
import '../Styles/shop.css'
import ReactPaginate from 'react-paginate'

const ShopMap = () => {


const [product,setProduct]=useState([])
const [data,setData]=useState(product)
const [category,setCategory]=useState([])

useEffect(()=>{
    const fetch = async()=>{
        const product = await axios.get(`${process.env.REACT_APP_SERVER_URL}/products`)
        setProduct(product.data)
        const result = await axios.get(`${process.env.REACT_APP_SERVER_URL}/category`)
        setCategory(result.data)
      
    }
    fetch();
},[data])

  const FilterProducts =(categoryItem)=>{
    const SortingList = product.filter((currentItem)=>{
        return currentItem.category===categoryItem;
    })
    setData(SortingList)
  }

const [pageNo,setPageNo]=useState(0)

const productPerPage=3;

const pageVist=pageNo*productPerPage;

const ShowProduct = data.slice(pageVist,pageVist+productPerPage).map((item,index)=>(
    <ShopShow item={item} key={index}/>
))
    
const pageCount = Math.ceil(data.length/productPerPage)

const changePage =({selected})=>{
    setPageNo(selected)
}

  return (
    <div className='shopMain'>
        <div className='shopRow'>
            <div className='shopCol'>
                <h2>Category</h2>
                <button className='shopBtn' onClick={()=>setData(product)}>All<FontAwesomeIcon icon={faChevronDown}/></button>
                {category.map((item)=>(
                    <button onClick={()=>FilterProducts(item.title)} key={item._id}>{item.title}<FontAwesomeIcon icon={faChevronDown}/></button>
                ))}
            </div>
            <div className='shopCol'>
                <div className='shopProducts'>
                    {
                        ShowProduct
                    }
                </div>
                <div className='pagination'>
                    <ReactPaginate
                        previousLabel={"<<"}
                        nextLabel={">>"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBtn"}
                        previousLinkClassName={"previousBtn"}
                        nextLinkClassName={"nextBtn"}
                        disabledClassName={"disabledBtn"}
                        activeClassName={"activeBtn"}
                        />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShopMap