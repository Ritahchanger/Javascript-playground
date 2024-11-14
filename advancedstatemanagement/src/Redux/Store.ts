import { configureStore } from "@reduxjs/toolkit"


import todoSlice from "./Features/TodoSlice";


const store = configureStore({


    reducer:{

        todos:todoSlice.reducer,

    },


})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;


export default store;