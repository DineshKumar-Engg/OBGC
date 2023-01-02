import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Footer.css'
import fb from '../Images/fb.png'
import insta from '../Images/insta.jpg'
import twitter from '../Images/Twitter.png'
import Google from '../Images/Google-new_19.png'
const Footer = () => {
  return (
    <div>
        <section id="footer">
  <div className="main-footer">
    <div className="logoinfo" data-aos="fade-up">
      <h2>Online Boys Girls Clothes</h2>
      <p>By Dinesh</p>

      <div className="contact-details">
        <h1>Contact Us</h1>
        <li>
          <div className="fa fa-phone"></div><a href="tel:+919326048690">+91-7373858452</a></li>
        <li>
          <div className="fa fa-envelope"></div><a href="mailto:yourmail@gmail.com">dineshsoftwareengg@gmail.com</a></li>
        </div>
    </div>
 

  <div className="com " data-aos="fade-up">
    <h1>Pages</h1>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/shop'>Shop</Link></li>
      <li><Link to='/contact'>Contacts</Link></li>
      <li><Link to='/login'>LogIn</Link></li>
    </ul>
  </div>
  <div className="info" data-aos="fade-up">
    <h1>Social Media</h1>
    <div className="sociallogos">
      <div className="logobox">
        <img src={fb} alt=''></img>
        <img src={insta} alt=''></img>
        <img src={twitter} alt=''></img>
        <img src={Google} alt=''></img>
      </div>
    </div>
  </div>
  </div>
<footer>©Copyright 2023 All Rights Reserved</footer>
</section>
</div>
  )
}

export default Footer