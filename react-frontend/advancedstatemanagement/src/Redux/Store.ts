import { configureStore } from "@reduxjs/toolkit"


import todoSlice from "./Features/TodoSlice";
import userSlice from "./Features/UserSlice";


const store = configureStore({


    reducer:{

        todos:todoSlice.reducer,

        users:userSlice.reducer

    },


})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;


export default store;