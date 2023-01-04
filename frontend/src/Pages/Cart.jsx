import React, { useContext } from 'react'
import { Store } from '../Store'
import '../Styles/Cart.css'
import { Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'



const Cart = () => {


  const {state,dispatch:Dispatch}=useContext(Store)

  const {cart:{cartItem}}=state


  return (
      <div className='cart-Container'>
        <div className='cart-Row'>
          <h2 className='cart-Title'>MY Shopping cart</h2>
        </div>
        <div className='cart-Row'>
        <div className="cart-Col">
        {
          cartItem.length === 0 ? (<h2>Cart List is Empty <Link to='/shop'>Go To Shopping</Link></h2>):
          (
            <div className='cartList'>
              {
                cartItem.map((item)=>(
                  <div className='cartBody' key={item._id}>
                    <div className='cartImage'>
                      <img src={item.image} alt={item.title}></img>
                    </div>
                    <div className='cartFunction'>
                      <Link to={`product/${item.slug}`} >{item.title}</Link>
                      <div className='cartBtn'>
                          <button disabled={item.quantity === 1}><FontAwesomeIcon icon={faMinusSquare}/></button>
                          <span className='cartQuantity'>{item.quantity}</span>
                          <button disabled={item.CountOfStock === 0}><FontAwesomeIcon icon={faPlusSquare}/></button>
                      </div>
                    </div>
                    <div className='cartFooter'>
                      <span>${" "}{item.price}</span>
                      <button><FontAwesomeIcon icon={faTrashCan}/></button>
                    </div>
                   
                  </div>
                ))
              }
            </div>
          )
        }
        </div>
        <div className='cart-Col'></div>
        </div>
      </div>
  )
}

export default Cart