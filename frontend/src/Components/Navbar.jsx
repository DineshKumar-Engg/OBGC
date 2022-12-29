import React from 'react'
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



const Navbar = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className='navbar-main'>
      <div className="navbar-header" >
        <img src={LOGO} alt='logo'></img>
        <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
          <div className='navbar-items'>
            <ul>
              <Link to='/'> <DropDown icon={faHouse} text={"Home"} /></Link>
              <Link to='/shop'><DropDown icon={faShirt} text={"Shop"} /></Link>
              <Link to='/wish'><DropDown icon={faHeart} text={"Wish"} value={0} /></Link>
              <Link to='/cart'><DropDown icon={faBagShopping} text={"Cart"} value={0} /></Link>
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
      <p>{props.value}</p>
      <span className='tab'>{props.text}</span>
    </li>
  )
}
export default Navbar