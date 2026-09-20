import { createSlice, PayloadAction }  from "@reduxjs/toolkit";


import { CartItem } from "../../types/Cart.interface";


interface CartState{

    items:CartItem[];
 
}

const initialState:CartState={

    items:[],

}



const cartSlice = createSlice({
    name:'cart',

    initialState,

    reducers:{

        addToCart(state,action:PayloadAction<CartItem>){

            const existingItem = state.items.find((item)=>{

                return item.productId === action.payload.productId;

            })

            if(existingItem){

                alert('This item is already in the cart, quantity incremented')

                existingItem.quantity += action.payload.quantity;

            }else{

                state.items.push(action.payload);

            }

        },

        removeFromCart(state,action:PayloadAction<string>){


            state.items = state.items.filter((item)=>item.productId !== action.payload);


        },

        clearCart(state){

            state.items = [];

        }



    }
})


export const { clearCart,addToCart,removeFromCart } = cartSlice.actions;


export default cartSlice