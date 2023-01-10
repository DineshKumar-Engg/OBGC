import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import image from '../Images/1.png'
import { Store } from '../Store'
import '../Styles/Profile.css'

const Profile = () => {


  const {state}= useContext(Store)
  const{userInfo}=state

  return (
    <div className='profile-container'>

        <div className='profile-title'>
          <h1>My Account</h1>
        </div>
        <div className='profile-img'>
          <img src={image} alt='profile_img'></img>
        </div>
        <div className='profile-history'>
          <Link to={`/orderhistory`}>User History</Link>
        </div>

    </div>
  )
}

export default Profile