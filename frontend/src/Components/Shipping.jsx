import React, { useContext, useEffect, useState } from 'react'
import '../Styles/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { Store } from '../Store';




const Shipping = () => {


    const navigate = useNavigate();

        
  const { state, dispatch: Dispatch } = useContext(Store)

  const {cart:{deliveryAddress,paymentMethod},userInfo}=state

    const [payment,setPayment]=useState(paymentMethod || "Cash")

    const [input, setInput] = useState(
        { 
            name:'' || deliveryAddress.name , 
            address: '' || deliveryAddress.address,
            phoneNumber:'' || deliveryAddress.phoneNumber,
            state: '' || deliveryAddress.state,
            district: '' || deliveryAddress.district,
            postalcode:'' || deliveryAddress.postalcode,

        }
    )
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    useEffect(()=>{
        if(!userInfo){
            navigate('/login')
        }
    },[userInfo,navigate])

    const handleSubmit=(e)=>{
        e.preventDefault();
        

        Dispatch(
            {
                type:"DELIVERY_ADDRESS",
                payload:{
                   name:input.name,
                    address:input.address,
                    phoneNumber:input.phoneNumber,
                    state:input.state,
                    district:input.district,
                    postalcode:input.postalcode,
                    payment:payment
                },
            }, 

            )
        localStorage.setItem('deliveryAddress',JSON.stringify(
            {
                    name:input.name,
                    address:input.address,
                    phoneNumber:input.phoneNumber,
                    state:input.state,
                    district:input.district,
                    postalcode:input.postalcode,
                    payment:payment,
            }
        ))
       
        navigate('/placeorder')
    }



  return (
    <div className='box'>
            <form className='form' onSubmit={handleSubmit}>
                <h1 className="form-title">Delivery Address</h1>
                
                <div className="form-group">
                    <input type={"text"} name="name" value={input.name} onChange={handleChange} className="form-control" required />
                    <label className="form-label">Name</label>
                </div>
                <div className="form-group">
                    <input type={"text"} name="address" value={input.address} onChange={handleChange} className="form-control" required/>
                    <label className="form-label">Address</label>
                </div>
                <div className="form-group">
                    <input type={"number"} name="phoneNumber" value={input.phoneNumber} onChange={handleChange} className="form-control" required />
                    <label className="form-label">Phone Number</label>
                </div>
                <div className="form-group">
                    <input type={"text"} name="state" value={input.state} onChange={handleChange} className="form-control" id="txtpassword" required />
                    <label className="form-label">State</label>
                </div>
                <div className="form-group">
                    <input type={"text"} name="district" value={input.district} onChange={handleChange} className="form-control" id="txtpassword" required />
                    <label className="form-label">District</label>
                </div>
                <div className="form-group">
                    <input type={"Number"} name="postalcode" value={input.postalcode} onChange={handleChange} className="form-control" id="txtpassword" required />
                    <label className="form-label">Postal Code</label>
                </div>
                <div className='paymentmain'>
                <div className='checkBox'>
                <input type={"checkbox"} value="Cash"   checked={payment ==="Cash"}  onChange={(e)=>{setPayment(e.target.value)}} />
                    <label className='showlabel' >Cash</label>
                </div>
                <div className='checkBox'>
                <input type={"checkbox"} value="Card" checked={payment ==="Card"}  onChange={(e)=>{setPayment(e.target.value)}} />
                    <label className='showlabel' >Card</label>
                </div>
                </div>
                <div className='register-btn'>
                    <span><Link to='/shop'><button type="submit" className='submitBtn'>Shop</button></Link></span>
                    <span><button type="submit" className='submitBtn' >Submit</button></span>
                </div>
            </form>
        </div>
  )
}

export default Shipping