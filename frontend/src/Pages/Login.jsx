import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { passwordvalidtor, emailValidator } from '../Validator'
import {toast} from 'react-toastify'
import axios from 'axios'
import '../Styles/Login.css'
import { useContext } from 'react'
import { Store } from '../Store'

const Login = () => {

  const navigate = useNavigate();

  const { search } = useLocation()
  const redirectUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectUrl ? redirectUrl : '/'

  const [input, setInput] = useState({ email: '', password: '' })
  const [type, setType] = useState('password')
  const [error, setError] = useState("")
  const [check] =useState(false)

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const { dispatch: Dispatch } = useContext(Store)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailValidator(input.email)) {
      return setError("Please enter valid email id")
    }
    if (!passwordvalidtor(input.password)) {

      console.log(passwordvalidtor(input.password));
      return setError("password must contain Minimum 8 and maximum 20 characters, at least one uppercase letter, one lowercase letter, one number and one special character:")
    }
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/login`, input)
      .then((res) => {
        toast.success("User Login Successfully",{autoClose:2000})
        console.log(res.data);
        Dispatch({
          type: "USER_LOGIN",
          payload: res.data
        })
        localStorage.setItem("userInfo", JSON.stringify(res.data));
        navigate( redirect || '/')
      })
      .catch((err)=>{
         return toast.error(err.response.data,{autoClose:2000})
      })
        
       
        
  }

  const changeType = (event) => {
    if(event.target.checked){
      setType("text")
    }else{
      setType("password")
    }
  }



  return (
    <div className='box'>
      <form className='form' onSubmit={handleSubmit}>
        <h1 className="form-title">Sing In</h1>
        {error.length > 0 && (<div className='error'>{error}</div>)}
        <div className="form-group">
          <input type={"text"} name="email" value={input.email} onChange={handleChange} className="form-control" required />
          <label className="form-label">Email</label>
        </div>
        <div className="form-group">
          <input type={type} name="password" value={input.password} onChange={handleChange} className="form-control" id="txtpassword" required />
          <label className="form-label">Password</label>
        </div>
        <div className="form-group">
        <input type={"checkbox"}  value={check}  onChange={changeType}  />
          <label className="showlabel">Show Password</label>
        </div>
        <div className="bottom-box">
          <Link>Forgot Password?</Link>
          <button type="submit" className="form-button">
            <Link to='/register'>Sign-up</Link>   </button>
        </div>

        <div className="form-sign">
          <button className="btn">
            <span className="layer"></span>Sign-In
          </button>
        </div>
      </form>
    </div>
  )
}
export default Login
