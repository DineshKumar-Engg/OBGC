import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Store } from '../Store'
import '../Styles/Payment.css'


const Payment = () => {

    const navigate= useNavigate()
    const {state,dispatch:Dispatch}=useContext(Store)
    const {
        cart:{deliveryAddress,paymentMethod}
    }=state

    const [payment,setPayment]=useState(paymentMethod || "Cash")

    

   
    useEffect(()=>{
        if(!deliveryAddress.address){
            navigate('/shipping')
        }
    },[deliveryAddress,navigate])

    const handleSubmit=(e)=>{
        e.preventDefault();
        Dispatch(
            {
                type:"PAYMENT_METHOD",
                payload:payment
            }
        )
        localStorage.setItem('paymentMethod',payment)
        navigate('/placeorder')
    }
// checked={paymentMethod ==="cash"}
  return (
    <div className='paymentmain'>
        <form onSubmit={handleSubmit}>
        <div className='checkBox'>
            
            <input type={"checkbox"} value="cash"  className="radio" checked={payment ==="cash"} onChange={(e)=>{setPayment(e.target.value)}} />
            <label>Cash</label>
        </div>
        {/* <div  className='checkBox'>
            
            <input type={"checkbox"} value="PayPal" className="radio"  checked={payment ==="Paypal"} onChange={(e)=>{setPayment(e.target.value)}}/>
            <label>PayPal</label>
        </div> */}
    <button type='submit' >Continue</button>
        </form>
    </div>
  )
}

export default Payment