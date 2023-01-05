import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import {Product} from '../Image'
import ShopShow from './ShopShow'
import '../Styles/shop.css'
import ReactPaginate from 'react-paginate'

const ShopMap = () => {

const [data,setData]=useState(Product)

const [category,setCategory]=useState([])

useEffect(()=>{
    const fetch = async()=>{
      const result = await axios.get("http://localhost:5000/category")
      setCategory(result.data)
    }
    fetch();
  },[])

  const FilterProducts =(categoryItem)=>{
    const SortingList = Product.filter((currentItem)=>{
        return currentItem.category===categoryItem;
    })
    setData(SortingList)
  }

const [pageNo,setPageNo]=useState(0)

const productPerPage=3;

const pageVist=pageNo*productPerPage;

const ShowProduct = data.slice(pageVist,pageVist+productPerPage).map((item)=>(
    <ShopShow item={item} key={item._id}/>
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
                <button className='shopBtn' onClick={()=>setData(Product)}>All<FontAwesomeIcon icon={faChevronDown}/></button>
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