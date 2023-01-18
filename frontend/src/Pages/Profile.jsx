import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Store } from '../Store'
import { getError } from '../utils'
import Loading from '../Components/Loading'
import '../Styles/OrderHistory.css'
import image from '../Images/1.png'
import '../Styles/Profile.css'
import { useState } from 'react'
import {toast} from 'react-toastify'
import { passwordvalidtor, emailValidator } from '../Validator'



const reducer = (state, action) => {
  switch (action.type) {
    case "GET_REQUEST":
      return { ...state, loading: true, fails: '' };
    case "SUCCESS_REQUEST":
      return { ...state, loading: false, order: action.payload, fails: '' };
    case "FAILS_REQUEST":
      return { ...state, loading: false, fails: action.payload };
    case "UPDATE_REQUEST":
      return{...state,loading:true};
    case "UPDATE_SUCCESS":
      return{...state,loading:false};
    case "UPDATE_FAIL":
        return{...state,loading:false};
    default:
      return state
  }
}

const Profile = () => {
  const { state,dispatch:Dispatch } = useContext(Store)
  const { userInfo } = state

  const navigate = useNavigate()
  const [displayVisible,displayNone]=useState(false)
  const [displayRegister,CloseRegister]=useState(true)
  const [input, setInput] = useState({ name:userInfo.name || '', email: userInfo.email ||'', password: '', confirmPassword: '' })
  const [error, setError] = useState("")
  const handleChange = (e) => {
      setInput({ ...input, [e.target.name]: e.target.value })
  }


  const [{ loading, order, fails }, dispatch] = useReducer(reducer, {
    loading: true,
    order: {},
    fails: ''
  })
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
            toast.success("User Registered Successfully",{autoClose:2000})
        })
        .catch((err)=>{
            toast.error(err.response.data,{autoClose:2000})
        })
          navigate('/login')
    }         
    catch(err){
             console.log(err)
    } 
}
  useEffect(() => {

    const fetchOrder = async () => {
      dispatch({ type: "GET_REQUEST" })

      try {

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/order/history`,
          {
            headers: { authorization: `Bearer ${userInfo.token}` }
          })
        dispatch({ type: "SUCCESS_REQUEST", payload: data })
      } catch (err) {
        dispatch({ type: "FAILS_REQUEST", payload: getError(err) })
      }
    }
    fetchOrder();
   

  }, [userInfo])

  const updateSubmit = async(e)=>{
      e.preventDefault();
      dispatch({type:"UPDATE_REQUEST"})
      try{
        const {data}=await axios.put(`${process.env.REACT_APP_SERVER_URL}/user/profile`,
        {
          name:input.name,
          email:input.email,
          password:input.password
        },
        {
          headers:{authorization: `Bearer ${userInfo.token}` }
        }
        );
        dispatch({type:"UPDATE_SUCCESS"})
        Dispatch({type:"USER_LOGIN",payload:data})
        localStorage.setItem('userInfo',JSON.stringify(data))
        toast.success("Updated Successfully")
        navigate('/login')
      }catch(err){
        setInput("")
        dispatch({type:"UPDATE_FAIL"})
        toast.error(getError(err))
      }
  }
 
 


  return (
    <div className='profile-container'>
      <div className='profile-main'>
        <div className='profile-Row'>
          <div className='profile-Row1col'>
            <div className='profile-Row1Col1'>
              <div className='profile-title'>
                <h1>Welcome {userInfo.name}</h1>
              </div>
              <div className='profile-img'>
                <img src={image} alt='profile_img'></img>
              </div>
              <div className='profile-history'>
                <p onClick={()=>{ displayNone(!displayVisible)}}>User Order History</p>
              </div>
            </div>
          </div>
          <div className='profile-Row1col' >
             <div className='profile-Row2Col2'>
             {
              displayRegister ? 
              (<div className='profile-user'>
                <span><strong>Name:</strong>{userInfo.name}</span>
                <span><strong>Email:</strong>{userInfo.email}</span>
              <button type='button' onClick={()=>{CloseRegister(!displayRegister)}}>Update Details</button>
              </div>)
              :
              (
                <div className='Profile-box'>
            <form className='Profile-form' onSubmit={handleSubmit}>
                <h1 className="profileForm-title">Update Details</h1>
                {error.length > 0 && (<div className='error'>{error}</div>)}
                <div className='profile-groupAll'>
                <div className="profile-group">
                    <input type={"text"} name="name" value={input.name} onChange={handleChange} className="profile-control" required />
                    <label className="profile-label">User Name</label>
                </div>
                <div className="profile-group">
                    <input type={"text"} name="email" value={input.email} onChange={handleChange} className="profile-control" required/>
                    <label className="profile-label">Email</label>
                </div>
                <div className="profile-group">
                    <input type={"Password"} name="password" value={input.password} onChange={handleChange} className="profile-control" required />
                    <label className="profile-label">Password</label>
                </div>
                <div className="profile-group">
                    <input type={"Password"} name="confirmPassword" value={input.confirmPassword} onChange={handleChange} className="profile-control" id="txtpassword" required />
                    <label className="profile-label">Confirm Password</label>
                </div>
                </div>
                <div className='register-btn'>
                    <span><button type="submit" className='submitBtn' onClick={()=>{CloseRegister(!displayRegister)}}>Close</button></span>
                    <span><button type="submit" className='submitBtn' onClick={updateSubmit}>Submit</button></span>
                </div>

            </form>
        </div>
              )
             }
             </div>
             
          </div>
        </div>
        {
          displayVisible ? (
            <div className='profile-Row'>
        <>
        {loading ? (<Loading/>) : order.length === 0 ? (<h2>Cart List is Empty <Link to='/shop'>Go To Shopping</Link></h2>) : fails ?(<p>Server Not Responding</p>):(
            <div className='history-container'>
                <div className='history-main'>
                    <div className='history-title'>
                        <h1>Your Order History</h1>
                    </div>
                    <div className="history-tableMain">
                    <div className='history-table'>
                        <table>
                        
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Date</th>
                                    <th>Total cost</th>
                                    <th>Paid</th>
                                    <th>Delivered</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {order.map((order)=>(
                                    <tr key={order._id}>
                                        <td>{order._id}</td>
                                        <td>{order.createdAt.substring(0,10)}</td>
                                        <td>{order.totalPrice}</td>
                                        <td>{order.isPaid ? order.paidAt.substring(0,10) : 'No'}</td>
                                        <td>{order.isDelivered ? order.DeliveredAt.substring(0,10):'No'}</td>
                                        <td><button type='button' onClick={()=>{navigate(`/order/${order._id}`)}}>Details</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        )}
        </>
        </div>
          ):null
        }
      </div>
    </div>
  )
}

export default Profile

