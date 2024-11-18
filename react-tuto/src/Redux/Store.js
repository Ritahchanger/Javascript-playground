import { configureStore } from "@reduxjs/toolkit";
import PreloaderSlice from "./Features/PreloaderSlice";
const Store = configureStore({
 
    reducer:{
        preloader:PreloaderSlice.reducer,
    }
})


export default Store;