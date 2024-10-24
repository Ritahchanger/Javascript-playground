import { createSlice } from "@reduxjs/toolkit";



const loadCartFromLocalStorage = () =>{

    const savedCart = localStorage.getItem('cart');

    return savedCart ? JSON.parse(savedCart) : { items: [] };


}

const saveCartToLocalStorage = (cart) =>{

    localStorage.setItem('cart',JSON.stringify(cart));

}


const initialState = loadCartFromLocalStorage();

const cartSlice = createSlice({

    name:'cart',

    initialState,


    reducers:{

        addItem:(state,action)=>{

            state.items.push(action.payload);

            saveCartToLocalStorage(state);

        },

        removeItems:(state,action)=>{

            state.items = state.items.filter((item)=>item.id!==action.payload.id);

            saveCartToLocalStorage(state);

        },

        clearCart:(state) =>{


            state.items = [];

            saveCartToLocalStorage(state);

        }

    }

})


export const { addItem,removeItems,clearCart } = cartSlice.actions

export default cartSlice