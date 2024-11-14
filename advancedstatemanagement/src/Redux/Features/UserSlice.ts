import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios"

import { User } from "../../Types/User";

import { UsersUseState } from "../../Types/UsersUseState";

export const fetchUsers = createAsyncThunk('users/fetchusers',async()=>{

    const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');

    return response.data;

})


const initialState:UsersUseState = {

    users:[],

    loading:false,

    error:null

}

const userSlice = createSlice({

    name:'users',

    initialState,


    reducers:{},

    extraReducers:(builder)=>{

        builder
        .addCase(fetchUsers.pending,(state)=>{
            state.loading = true;

            state.error = null;

        })

        .addCase(fetchUsers.fulfilled,(state,action)=>{

            state.loading = false;

            state.users = action.payload

        })

        .addCase(fetchUsers.rejected,(state,action)=>{

            state.loading = false;

            state.error = action.error.message || 'Failed to fetch users'

        })

    }

})

export default userSlice