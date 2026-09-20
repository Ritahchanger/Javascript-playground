import { configureStore } from "@reduxjs/toolkit";


import authSlice from "./Features/AuthSlice";


import cartSlice from "./Features/CartSlice";


import usersSlice from "./Features/UserSlice";

import productsSlice from "./Features/ProductSlice";

const Store = configureStore({


    reducer:{

        auth:authSlice.reducer,


        cart:cartSlice.reducer,


        users:usersSlice.reducer,

        products:productsSlice.reducer,

    }


})


export default Store