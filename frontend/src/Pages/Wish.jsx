import React, { useContext } from 'react'
import { Store } from '../Store'
import '../Styles/Wish.css'


const Wish = () => {


  const {state,dispatch:Dispatch}=useContext(Store)

  const {wish:{wishItem}}=state


  return (
    <div className='wishContainer'>
    <div className='wishRow'>

    </div>
    <div className='wishRow'>
    <div className="wishCol">
      
    </div>
    </div>
  </div>
  )
}

export default Wish