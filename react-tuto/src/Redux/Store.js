import { configureStore } from "@reduxjs/toolkit";
import PreloaderSlice from "./Features/PreloaderSlice";
import cartSlice from "./Features/CartSlice";
const Store = configureStore({
 
    reducer:{
        preloader:PreloaderSlice.reducer,
        cart:cartSlice.reducer
    }
})


export default Store;