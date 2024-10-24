import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    user: null


}


const authSlice = createSlice({

    name:'auth',

    initialState,

    reducers:{

        login:(state,action)=>{

            state.user = action.payload;

            localStorage.setItem('user',JSON.stringify(action.payload));

        },
        logout:(state)=>{

            state.user = null;

            localStorage.removeItem('user');
        },

        loadUserFromLocalStorage:(state)=>{

            const savedUser = localStorage.getItem('user');

            if(savedUser){

                state.user = JSON.parse(savedUser);

            }

        }

    }

})

export const { login,logout,loadUserFromLocalStorage } = authSlice.actions;


export default authSlice