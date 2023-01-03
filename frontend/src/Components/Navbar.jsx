import React, { useContext } from 'react'
import LOGO from '../Images/LOGO.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { faShirt } from '@fortawesome/free-solid-svg-icons'
import profile from '../Images/Profile.jpg'
import '../Styles/Navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Store } from '../Store'


const Navbar = () => {

  const [open, setOpen] = useState(false)

  const {state}=useContext(Store)
  const {cart,wish}=state

  return (
    <div className='navbar-main'>
      <div className="navbar-header" >
        <img src={LOGO} alt='logo'></img>
        <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
          <div className='navbar-items'>
            <ul>
              <Link to='/'> <DropDown icon={faHouse} text={"Home"} /></Link>
              <Link to='/shop'><DropDown icon={faShirt} text={"Shop"} /></Link>
              <Link to='/wish'><DropDown icon={faHeart} text={"Wish"}
               value={wish.wishItem.length > 0 && (<p>{wish.wishItem.length}</p>) }
               /></Link>
              <Link to='/cart'><DropDown icon={faBagShopping} text={"Cart"} 
              value={cart.cartItem.length > 0 && (<p>{cart.cartItem.reduce((a,c)=>a+c.quantity,0)}</p>) } 
              /></Link>
              <Link to='/login'><DropDown icon={faRightToBracket} text={"Login"} /></Link>
              <Link to='/contact'><DropDown icon={faHeadset} text={"Contact"} /></Link>
              <Link to='/profile'><DropDown icon={faUser} text={"My Profile"} /></Link>
            </ul>
          </div>
        </div>
        <div className='navbar-profile' onClick={() => { setOpen(!open) }}><img src={profile} alt='Profile' /></div>
      </div>
    </div>
  )
}

function DropDown(props) {
  return (
    <li className='dropdown '>
      <FontAwesomeIcon className='slide-icon' icon={props.icon} />
      <>{props.value}</>
      <span className='tab'>{props.text}</span>
    </li>
  )
}
export default Navbar

//{props.cart.cartItem.length>0 && (<p>{props.cart.cartItem.length}</p>)}