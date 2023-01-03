import {createContext, useReducer} from 'react'

export const Store = createContext()

const initialState={
    cart:{
        cartItem:[],
    },
}

const reducer=(state,action)=>{
    switch(action.type){
        case "CART_ITEM":
            return {...state,cart:{...state.cart,cartItem:[...state.cart.cartItem,action.payload]}}
        default:
            return state
    }
}


export function StoreProvider(props){

    const [state,dispatch]=useReducer(reducer,initialState)
    const value = {state,dispatch}

    return <StoreProvider value={value}>{props.children}</StoreProvider>
}