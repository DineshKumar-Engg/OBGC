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

  const {state,dispatch:Dispatch}=useContext(Store)
  const {cart,wish,userInfo}=state

  const signoutHandler=()=>{
    Dispatch({
      type:"SIGN_OUT",
    })
    localStorage.removeItem('userInfo')
    localStorage.removeItem('deliveryAddress')
    localStorage.removeItem('cartItem')
    localStorage.removeItem('wishItem')
  }

  return (
    <div className='navbar-main'>
      <div className="navbar-header" >
        <Link to='/'><img src={LOGO} alt='logo'></img></Link>
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
              {
              userInfo ? (<span onClick={signoutHandler}><Link to='/'><DropDown icon={faRightToBracket}  text={"Log-Out"} /></Link></span>):
              (<Link to='/login'><DropDown icon={faRightToBracket} text={"Log-in"} /></Link>)
              }
              <Link to='/contact'><DropDown icon={faHeadset} text={"Contact"} /></Link>
              {userInfo?(<Link to='/profile'><DropDown icon={faUser} text={userInfo.name} /></Link>):
              (<Link to='/login'><DropDown icon={faUser} text={"My Profile"} /></Link>)}
              
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
