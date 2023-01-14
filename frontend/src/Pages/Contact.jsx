import React, { useState } from 'react'
import '../Styles/Contact.css'
import image from '../Images/LOGO.png'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import {Store } from '../Store'
import axios from 'axios'
import {toast} from 'react-toastify'


const Contact = () => {



  const navigate = useNavigate();
  const {state}=useContext(Store)
  const {userInfo}=state
  const [input, setInput] = useState({ name: userInfo.name || " ", email:userInfo.email || '', PhoneNumber: '',message:'' })
  const [error, setError] = useState("")



  const handleChange = (e) => {
      setInput({ ...input, [e.target.name]: e.target.value })
      
  }
  const handleSubmit= async (e)=>{
    e.preventDefault();
    
    await axios.post('http://localhost:5000/feedback',
    input,
    {
      headers:{
        authorization:`Bearer ${userInfo.token}`
      }
    }
    )
    .then((res)=>{
      toast.success(res.data.message)
      setInput("")
      navigate('/')
    })
    .catch((err)=>toast.error(err.response.data.message))
  }


  return (
    <div className='contact-container'>
        <div className='contact-main'>
            <div className='contact-Row'>
                <img src={image} alt='logo'></img>
            </div>
            <div className='contact-Row'>
              <div className='Contact-box'> 
            <form className='Contact-form' onSubmit={handleSubmit}>
                <h1 className="ContactForm-title">Feedback</h1>
                {error.length > 0 && (<div className='error'>{error}</div>)}
                <div className="ContactForm-group">
                    <input type={"text"} name="name" value={input.name} onChange={handleChange} className="ContactForm-control" required />
                    <label className="ContactForm-label">Name</label>
                </div>
                <div className="ContactForm-group">
                    <input type={"text"} name="email" value={input.email} onChange={handleChange} className="ContactForm-control" required/>
                    <label className="ContactForm-label">Email</label>
                </div>
                <div className="ContactForm-group">
                    <input type={"number"} name="PhoneNumber" value={input.PhoneNumber} onChange={handleChange} className="ContactForm-control" required />
                    <label className="ContactForm-label">Phone Number</label>
                </div>
                <div className="ContactFormText-group">
                    <textarea rows={"3"} cols={"5"} type={"text"} name="message" value={input.message} onChange={handleChange} className="ContactForm-control" id="txtpassword" required />
                    <label className="ContactForm-label">Message</label>
                </div>
                <div className='Contact-btn'>
                    <button type="submit" >Send Message</button>
                </div>
            </form>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Contact