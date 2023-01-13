// import axios from 'axios'
// import React, { useContext, useEffect, useReducer } from 'react'
// import { Link, useNavigate} from 'react-router-dom'
// import { Store } from '../Store'
// import { getError } from '../utils'
// import Loading from './Loading'
// import '../Styles/OrderHistory.css'


// const reducer =(state,action)=>{
//     switch(action.type){
//         case "GET_REQUEST":
//             return{...state,loading:true,fails:''};
//         case "SUCCESS_REQUEST":
//             return {...state,loading:false,order:action.payload,fails:''};
//         case "FAILS_REQUEST":
//             return {...state,loading:false,fails:action.payload};
//         default:
//                 return state
//     }
// }



// const OrderHistory = () => {


//     const {state}= useContext(Store)
//     const{userInfo}=state

//     const navigate =useNavigate()

//     const [{loading,order,fails},dispatch]=useReducer(reducer,{
//         loading:true,
//         order:{},
//         fails:''
//     })

// useEffect(()=>{

//     const fetchOrder = async()=>{
//         dispatch({type:"GET_REQUEST"})

//         try{
            
//             const {data} = await axios.get(`http://localhost:5000/order/history`,           
//             {
//                 headers:{authorization:`Bearer ${userInfo.token}`}
//             })

//             console.log(data);
//             dispatch({type:"SUCCESS_REQUEST",payload:data})
//         }catch(err){
//             console.log(err);
//             dispatch({type:"FAILS_REQUEST",payload:getError(err)})
//         }
//     }
//     fetchOrder();
 
// },[userInfo])


//   return (
//         <>
//         {loading ? (<Loading/>) : order.length === 0 ? (<h2>Cart List is Empty <Link to='/shop'>Go To Shopping</Link></h2>) : fails ?(<p>Server Not Responding</p>):(
//             <div className='history-container'>
//                 <div className='history-main'>
//                     <div className='history-title'>
//                         <h1>Your Order History</h1>
//                     </div>
//                     <div className="history-tableMain">
//                     <div className='history-table'>
//                         <table>
//                         <caption>Order Details</caption>
//                             <thead>
//                                 <tr>
//                                     <th>ID</th>
//                                     <th>Date</th>
//                                     <th>Total cost</th>
//                                     <th>Paid</th>
//                                     <th>Delivered</th>
//                                     <th>Details</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {order.map((order)=>(
//                                     <tr key={order._id}>
//                                         <td>{order._id}</td>
//                                         <td>{order.createdAt.substring(0,10)}</td>
//                                         <td>{order.totalPrice}</td>
//                                         <td>{order.isPaid ? order.paidAt.substring(0,10) : 'No'}</td>
//                                         <td>{order.isDelivered ? order.DeliveredAt.substring(0,10):'No'}</td>
//                                         <td><button type='button' onClick={()=>{navigate(`/order/${order._id}`)}}>Details</button></td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                     </div>
//                 </div>
//             </div>
//         )}
//         </>
//   )
// }

// export default OrderHistory