import React from 'react'
import { useContext } from 'react'
import '../Styles/PlaceOrder.css'
import {Store} from '../Store'
import { Link } from 'react-router-dom'



const PlaceOrder = () => {


const {state,dispatch:Dispatch}=useContext(Store)

const {cart,userInfo}=state

const RoundNumber = (num)=>Math.round(num*100+Number.EPSILON)/100;
cart.itemsPrice=RoundNumber(cart.cartItem.reduce((a,c)=>a+c.quantity*c.price,0))
cart.shippingPrice =cart.itemsPrice>100?RoundNumber(0):RoundNumber(100);
cart.taxPrice = RoundNumber(0.15*cart.itemsPrice)
cart.totalPrice =cart.itemsPrice+cart.shippingPrice+cart.taxPrice






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
                <p><strong>Payment :</strong>{cart.paymentMethod}</p>
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
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder