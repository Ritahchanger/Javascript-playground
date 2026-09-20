import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart:[],
    price:0,
    numberOfCartItems:0,
}


const cartSlice = createSlice({

    name:'cart',

    initialState,

    reducers:{

        addToCart:(state,action)=>{

            state.cart = [...state.cart, action.payload]

            const customCartItems = state.cart;

            state.numberOfCartItems = customCartItems.length

            const customPrices = customCartItems.map((item)=>item.price)

            state.price = customPrices.reduce((a,b)=>a+b,0);
            
        }

    }


})

export const { addToCart } = cartSlice.actions;

export default cartSlice