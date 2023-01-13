import React, { useContext } from 'react'
import { Store } from '../Store'
import '../Styles/Wish.css'
import { Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'


const Wish = () => {


  const {state,dispatch:Dispatch}=useContext(Store)

  const {wish:{wishItem}}=state

  const DeleteWish=async(item)=>{
    Dispatch({
      type:"WISH_REMOVE_ITEM",
      payload:item
    })
  }

  return (
    <div className='wish-Container'>
    <div className='wish-Row'>
    <h2 className='cart-Title'>MY Wish List</h2>
    </div>
    <div className='wish-Row'>
    <div className="wish-Col">
    {
          wishItem.length === 0 ? (<h2>Wish List is Empty <Link to='/shop'>Go To Shopping</Link></h2>):
          (
            <div className='wishList'>
              {
                wishItem.map((item)=>(
                  <div className='wishBody' key={item._id}>
                    <div className='wishImage'>
                      <img src={item.image} alt={item.title}></img>
                    </div>
                    <div className='wishFunction'>
                      <Link to={`/product/${item.slug}`}>{item.title}</Link>
                     <span> Quantity{item.quantity}</span>
                    </div>
                    <div className='wishFooter'>
                      <span>${" "}{item.price}</span>
                      <button onClick={()=>DeleteWish(item)}><FontAwesomeIcon icon={faTrashCan}/></button>
                    </div>
                   
                  </div>
                ))
              }
            </div>
          )
        }
    </div>
    {/* <div className="wish-Col">

    </div> */}
    </div>
  </div>
  )
}

export default Wish