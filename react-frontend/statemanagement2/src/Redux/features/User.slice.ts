import { createSlice, PayloadAction } from "@reduxjs/toolkit";



import { User } from "../../types/User.interface";

interface UserState{

    user:User | null;

    loggedIn:boolean;

}

const initialState:UserState = {

    user:null,

    loggedIn:false,

}


const userSlice = createSlice({

    name:'user',

    initialState,

    reducers:{


        login(state,action:PayloadAction<User>){

            state.user = action.payload;

            state.loggedIn = true;


        },

        logout(state){


            state.user = null;

            state.loggedIn = false

        }


    }


})

export const { login,logout } = userSlice.actions

export default userSlice;