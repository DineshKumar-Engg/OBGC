import axios from 'axios';
import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useReducer } from 'react'
import {  useNavigate, useParams } from 'react-router-dom';
import { Store } from '../Store';
import { getError } from '../utils';
import Loading from './Loading';
import '../Styles/PlaceOrder.css'


const reducer =(state,action)=>{
    switch(action.type){
        case "GET_REQUEST":
            return{...state,loading:true,fails:''};
        case "SUCCESS_REQUEST":
            return {...state,loading:false,order:action.payload,fails:''};
        case "FAILS_REQUEST":
            return {...state,loading:false,fails:action.payload};
        default:
                return state
    }
}



const OrderList = () => {
    const {state}= useContext(Store)
    const{userInfo}=state

    const params = useParams()
    const {id : orderId}=params

    const navigate =useNavigate()

    const [{loading,order,fails},dispatch]=useReducer(reducer,{
        loading:true,
        order:[],
        fails:''
    })
 
useEffect(()=>{

    const fetchOrder = async()=>{
        try{
            dispatch({type:"GET_REQUEST",loading:true,fails:''})
            const {data} = await axios.get(`${process.env.REACT_APP_SERVER_URL}/order/${orderId}`,
            {
              headers:{
                authorization:`Bearer ${userInfo.token}`
              }
            })

           dispatch({type:"SUCCESS_REQUEST",payload:data})
        }catch(err){
            console.log(err);
            dispatch({type:"FAILS_REQUEST",payload:getError(err)})
        }
    }
    if(!userInfo){
        return navigate('/login')
     }
     if(!order._id || (order._id && order._id !== orderId))
     {
     fetchOrder();
     }
 
},[order,orderId,navigate,userInfo])

  return (
    <>
        {loading ? <Loading/> : fails ? (<p>Responded 404</p>) :(
            <div className='orderList'>
            <div className='orderTitle'>
            <h3>
              Your Order_Id:{order._id}
            </h3>
          </div>
          <div className='order-Row'>
            <div className='order-col'>
                <div className='order-address'>
                    <span>{order.deliveryAddress.name},{order.deliveryAddress.phoneNumber},
                    {order.deliveryAddress.address},{order.deliveryAddress.state},
                    {order.deliveryAddress.district},{order.deliveryAddress.postalcode}</span>
                    <p><strong>Payment :</strong><span>{order.isPaid ?(<span>{order.paidAt}</span>):(<span>Not Paid</span>)}</span></p>
               
                 <p><strong>Delivery :</strong><span>{order.isPaid ?(<span>{order.deliveredAt}</span>):(<span>Not Delivery</span>)}</span>
                 <br/><span>You will Pay after Delivery</span></p>
                </div>
                <div className='order-display'>
                  <h2>Purchase List</h2>
                    {
                      order.orderItems.map((item)=>(
                        <div className='order-content' key={item._id}>
                          <div className='order-image'>
                            <img src={item.image} alt={item.title}/>
                          </div>
                          <div className='order-text'>
                            <p>{item.title}</p>
                            <p>{item.quantity}</p>
                            <p>${item.price}</p>
                          </div>
                        </div>
                      ))
                    }
                </div>
                
            </div>
            <div className='order-col'>
            <div className='order-body'>
                    <table>
                      <caption>Purchase Collection</caption>                
                          <tbody>
                            <tr>
                              <td>Product Price</td>
                              <td><strong>--</strong></td>
                              <td>{order.itemsPrice}</td>
                            </tr>
                            <tr>
                              <td>Shipping Price</td>
                              <td><strong>--</strong></td>
                              <td>{order.shippingPrice}</td>
                            </tr>
                            <tr>
                              <td>Tax Price</td>
                              <td><strong>--</strong></td>
                              <td>{order.taxPrice}</td>
                            </tr>
                            <tr>
                              <td>Total Price</td>
                              <td><strong>--</strong></td>
                              <td>{order.totalPrice}</td>
                            </tr>
                          </tbody>
                    </table>
                </div>
            </div>
          </div>
          </div>   
        )}
             
    
     </>
  )
}

export default OrderList