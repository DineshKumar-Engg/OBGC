import React from 'react'
import { useContext } from 'react'
import '../Styles/PlaceOrder.css'
import {Store} from '../Store'
import { Link, useNavigate } from 'react-router-dom'
import { useReducer } from 'react'
import axios from 'axios'
import Loading from './Loading'


const reducer =(state,action)=>{
  switch(action.type)
  {
    case "CREATE_REQUEST":
      return {...state,loading:true}
    case "REQUEST_SUCCESS":
      return {...state,loading:false}
  case "REQUEST_FAIL":
    return {...state,loading:false}
      default:
        return state
  }
}

const PlaceOrder = () => {

const navigate =useNavigate()
  const [{loading},dispatch]=useReducer(reducer,{
    loading:false,
    error:''
  })

const {state,dispatch:Dispatch}=useContext(Store)

const {cart,userInfo}=state

const RoundNumber = (num)=>Math.round(num*100+Number.EPSILON)/100;
cart.itemsPrice=RoundNumber(cart.cartItem.reduce((a,c)=>a+c.quantity*c.price,0))
cart.shippingPrice =cart.itemsPrice>100?RoundNumber(0):RoundNumber(100);
cart.taxPrice = RoundNumber(0.15*cart.itemsPrice)
cart.totalPrice =cart.itemsPrice+cart.shippingPrice+cart.taxPrice

const placeOrderHandler = async()=>{
  try{  
        dispatch({type:"CREATE_REQUEST"})

         const {data}=  await axios.post(`${process.env.REACT_APP_SERVER_URL}/order`,{
          orderItems:cart.cartItem,
          deliveryAddress:cart.deliveryAddress, 
          itemsPrice:cart.itemsPrice,
          shippingPrice:cart.shippingPrice,
          taxPrice:cart.taxPrice,
          totalPrice:cart.totalPrice,
        },
        {
          headers:{
            authorization:`Bearer ${userInfo.token}`
          }
        }
        )
        
        console.log(userInfo.token);
        Dispatch({type:"CART_CLEAR"});
        dispatch({type:"REQUEST_SUCCESS"})
        localStorage.removeItem('cartItem')
        navigate(`/order/${data.order._id}`)

  }catch(err){
    dispatch({type:"REQUEST_FAIL"})
    console.log(err);
  }
}





  return (
    <div className='orderContainer'>
      <div className='orderTitle'>
        <h1>
          Shipping Confirmation
        </h1>
      </div>
      <div className='order-Row'>
        <div className='order-col'>
            <div className='order-address'>
                <p><strong>Name:</strong>{cart.deliveryAddress.name}</p>
                <p><strong>Phone Number:</strong>{cart.deliveryAddress.phoneNumber}</p>
                <p><strong>Address :</strong> {cart.deliveryAddress.address}</p>
                <p><strong>State:</strong> {cart.deliveryAddress.state}</p>
                <p><strong>District :</strong>{cart.deliveryAddress.district}</p>
                <p><strong>Postal Code :</strong>{cart.deliveryAddress.postalcode}</p>
                <p><strong>Payment :</strong>{cart.deliveryAddress.payment}</p>
            </div>
            <div className='order-edit'>
              <Link to='/shipping'><button>Edit Delivery Address</button></Link>
            </div>
            <div className='order-display'>
              <h2>Purchase List</h2>
                {
                  cart.cartItem.map((item)=>(
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
                <div className='order-cartEdit'>
              <Link to='/cart'><button>Edit Cart Items</button></Link>
            </div>
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
                          <td>{cart.itemsPrice}</td>
                        </tr>
                        <tr>
                          <td>Shipping Price</td>
                          <td><strong>--</strong></td>
                          <td>{cart.shippingPrice}</td>
                        </tr>
                        <tr>
                          <td>Tax Price</td>
                          <td><strong>--</strong></td>
                          <td>{cart.taxPrice}</td>
                        </tr>
                        <tr>
                          <td>Total Price</td>
                          <td><strong>--</strong></td>
                          <td>{cart.totalPrice}</td>
                        </tr>
                      </tbody>
                </table>
            </div>
            <div className='order-place'>
              <button onClick={placeOrderHandler}>Place Order</button>
            </div>
            {loading && <Loading/>}
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder