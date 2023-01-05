import React, { useState } from 'react'
import '../Styles/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { passwordvalidtor, emailValidator } from '../Validator'
//import {toast} from 'react-toastify'
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
            console.log(passwordvalidtor(input.password));
            return setError("password must contain Minimum 8 and maximum 20 characters, at least one uppercase letter, one lowercase letter, one number and one special character:")
        }

        await axios.post("http://localhost:5000/register", input)
            .then((res) => {
                //   toast.success("User Registered Successfully",{autoClose:3000,})
                navigate('/login')
            })
            .catch((err) => console.log(err)
                // toast(err.response.data)
            )
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
                    <span><Link to='/login'><button type="submit" className='submitBtn'>Login</button></Link></span>
                    <span><button type="submit" className='submitBtn' >Submit</button></span>
                </div>

            </form>
        </div>
    )
}

export default Register