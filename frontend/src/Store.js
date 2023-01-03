import {createContext, useReducer} from 'react'

export const Store = createContext()

const initialState={
    cart:{
        cartItem:[],
    },
    wish:{
        wishItem:[]
    }
}

function reducer(state,action){
    switch(action.type){

        case "CART_ITEM":
            const NewItem = action.payload;
            const ExistItem= state.cart.cartItem.find((x)=> x._id===NewItem._id)
            const cartItem = ExistItem ? state.cart.cartItem.map((item)=>item._id===ExistItem._id?NewItem:item):
            [...state.cart.cartItem,NewItem]
        //  return {...state,cart:{...state.cart,cartItem:[...state.cart.cartItem,action.payload]}}
            return {...state,cart:{...state.cart,cartItem}};

        case "WISH_ITEM":
            return {...state,wish:{...state.wish,wishItem:[...state.wish.wishItem,action.payload]}}
            
        default:
            return state;
    }
}


export function StoreProvider(props){

    const [state,dispatch]=useReducer(reducer,initialState)
    const value = {state,dispatch}

    return <Store.Provider value={value}>{props.children}</Store.Provider>
}