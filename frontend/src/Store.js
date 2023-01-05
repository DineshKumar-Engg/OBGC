import {createContext, useReducer} from 'react'


export const Store = createContext()

const initialState={
    cart:{
        cartItem:localStorage.getItem('cartItem')? JSON.parse(localStorage.getItem('cartItem')):[],
    },
    wish:{
        wishItem:localStorage.getItem('wishItem')? JSON.parse(localStorage.getItem('wishItem')):[]
    },
    userInfo:{
        info:[]
    }
}

function reducer(state,action){
    switch(action.type){

        case "CART_ITEM":
            const NewItem = action.payload;
            const ExistItem= state.cart.cartItem.find((x)=> x._id===NewItem._id)
            const cartItem = ExistItem ? state.cart.cartItem.map((item)=>item._id===ExistItem._id ? NewItem:item):
            [...state.cart.cartItem,NewItem]
        //  return {...state,cart:{...state.cart,cartItem:[...state.cart.cartItem,action.payload]}}
            localStorage.setItem('cartItem',JSON.stringify(cartItem))
            return {...state,cart:{...state.cart,cartItem}};

        case "WISH_ITEM":
            {
            const NewItem = action.payload;
            const ExistItem= state.wish.wishItem.find((x)=> x._id===NewItem._id)
            const wishItem = ExistItem ? state.wish.wishItem.map((item)=>item._id===ExistItem._id ? NewItem:item):
            [...state.wish.wishItem,NewItem]
            localStorage.setItem('wishItem',JSON.stringify(wishItem))
            return {...state,wish:{...state.wish,wishItem:[...state.wish.wishItem,action.payload]}}
            }
            
        case "CART_REMOVE_ITEM":
            {
            const cartItem = state.cart.cartItem.filter((item)=>item._id !== action.payload._id);
            localStorage.setItem('cartItem',JSON.stringify(cartItem))
            return{...state,cart:{...state.cart,cartItem}}
            }
        case "WISH_REMOVE_ITEM":
            {
                const wishItem = state.wish.wishItem.filter((item)=>item._id !== action.payload._id);
                localStorage.setItem('wishItem',JSON.stringify(wishItem))
                return{...state,wish:{...state.wish,wishItem}}
            }
        case "USER_LOGIN":
            return{...state,userInfo:action.payload}
        default:
            return state;
    }
}


export function StoreProvider(props){

    const [state,dispatch]=useReducer(reducer,initialState)
    const value = {state,dispatch}

    return <Store.Provider value={value}>{props.children}</Store.Provider>
}