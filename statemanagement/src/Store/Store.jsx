import { configureStore } from "@reduxjs/toolkit";


import authSlice from "./Features/AuthSlice";

import cartSlice from "./Features/CartSlice";


const Store = configureStore({


    reducer:{

        auth:authSlice.reducer,

        cart:cartSlice.reducer

    }


})


export default Store