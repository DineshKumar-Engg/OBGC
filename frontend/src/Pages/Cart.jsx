import React, { useContext } from 'react'
import { Store } from '../Store'
import '../Styles/Cart.css'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'



const Cart = () => {

  const navigate =useNavigate()

  const { state, dispatch: Dispatch } = useContext(Store)

  const { cart: { cartItem },userInfo } = state
  
  const updateCart= async(item,quantity)=>{
    const {data}=await axios.get(`${process.env.REACT_APP_SERVER_URL}/products/slug/${item.slug}`)
    if(data.CountOfStock < quantity){
      window.alert("Product is out of Stock")
      return
    }

    Dispatch({
      type:"CART_ITEM",
      payload:{...item,quantity}
    })
  }
  const DeleteCart=async(item)=>{
    Dispatch({
      type:"CART_REMOVE_ITEM",
      payload:item
    })
  }
  
  const checkhandler=()=>{

    if(!userInfo){
        navigate('/login')
    }else{
      navigate('/shipping')
    }
  }
  


  return (
    <div className='cart-Container'>
      <div className='cart-Row'>
        <h2 className='cart-Title'>My Shopping Cart</h2>
      </div>
      <div className='cart-Row'>
        <div className="cart-Col">
          {
            cartItem.length === 0 ? (<h2>Cart List is Empty <Link to='/shop'>Go To Shopping</Link></h2>) :
              (
                <div className='cartList'>
                  {
                    cartItem.map((item,index) => (
                      <div className='cartBody' key={index}>
                        <div className='cartImage'>
                          <img src={item.image} alt={item.title}></img>
                        </div>
                        <div className='cartFunction'>
                          <Link to={`/product/${item.slug}`} >{item.title}</Link>
                          <div className='cartBtn'>
                            <button onClick={()=>updateCart(item,item.quantity-1)} disabled={item.quantity === 1}><FontAwesomeIcon icon={faMinusSquare} /></button>
                            <span className='cartQuantity'>{item.quantity}</span>
                            <button onClick={()=>updateCart(item,item.quantity+1)} disabled={item.CountOfStock === 0}><FontAwesomeIcon icon={faPlusSquare} /></button>
                          </div>
                        </div>
                        <div className='cartFooter'>
                          <span>${" "}{item.price}</span>
                          <button onClick={()=>DeleteCart(item)}><FontAwesomeIcon icon={faTrashCan} /></button>
                        </div>

                      </div>
                    ))
                  }
                </div>
              )
          }

        </div>
        <div className='cart-Col'>
          <div className='cartCol-total'>

            {cartItem.length === 0 ? (<h2>Add Products</h2>) : (
              <div className='cartCol-body'>
                <table>
                  <caption>Purchase Collection</caption>
                  <thead>
                    <tr>
                      <th>Items</th>
                      <th>Quantity</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  {
                    cartItem.map((item) => (
                      <tbody key={item._id}>
                        <tr>
                          <td>{item.title}</td>
                          <td>{item.quantity}</td>
                          <td>{item.price}</td>
                        </tr>
                      </tbody>
                    ))
                  }
                </table>
                <div className='cartCol-title'>
               
                  <h3 > Total {cartItem.reduce((a, c) => a + c.quantity, 0)} {" "}items</h3>
                  <span>${cartItem.reduce((a, c) => a + c.price * c.quantity, 0)}</span>
                </div>
                
              </div>
            )}
            <div className='cartCol-footer'>
              <button type='button' onClick={checkhandler} disabled={cartItem.length === 0}>Proceed to buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart