import React, { useState } from 'react'
import '../Styles/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { passwordvalidtor, emailValidator } from '../Validator'
import {toast} from 'react-toastify'
import axios from 'axios'






const Register = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({ name: '', email: '', password: '', confirmPassword: '' })
    const [error, setError] = useState("")
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!emailValidator(input.email)) {
            return setError("Please enter valid email id")
        }
        if (!passwordvalidtor(input.password)) {
            return setError("Password must contain Minimum 8 and maximum 20 characters, at least one uppercase letter, one lowercase letter, one number and one special character:")
        }
        if(input.password !== input.confirmPassword){
            return setError("Password,Confirm Password must be same")
        }
        try{
            await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/register`, input)
            .then((res)=>{
                console.log(res);
                toast.success("User Registered Successfully",{autoClose:2000})
            })
            .catch((err)=>{
                toast.error(err.response.data,{autoClose:2000})
            })
              navigate('/login')
        }         
        catch(err){
            console.log(err);        
        } 
                 

    }

    return (
        <div className='box'>
            <form className='form' onSubmit={handleSubmit}>
                <h1 className="form-title">Register</h1>
                {error.length > 0 && (<div className='error'>{error}</div>)}
                <div className="form-group">
                    <input type={"text"} name="name" value={input.name} onChange={handleChange} className="form-control" required />
                    <label className="form-label">User Name</label>
                </div>
                <div className="form-group">
                    <input type={"text"} name="email" value={input.email} onChange={handleChange} className="form-control" required/>
                    <label className="form-label">Email</label>
                </div>
                <div className="form-group">
                    <input type={"Password"} name="password" value={input.password} onChange={handleChange} className="form-control" required />
                    <label className="form-label">Password</label>
                </div>
                <div className="form-group">
                    <input type={"Password"} name="confirmPassword" value={input.confirmPassword} onChange={handleChange} className="form-control" id="txtpassword" required />
                    <label className="form-label">Confirm Password</label>
                </div>
                <div className='register-btn'>
                    <span><Link to='/login'><button type="button" className='submitBtn'>Login</button></Link></span>
                    <span><button type="submit" className='submitBtn' >Submit</button></span>
                </div>

            </form>
        </div>
    )
}

export default Register