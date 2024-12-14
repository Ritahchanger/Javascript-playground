import { configureStore } from '@reduxjs/toolkit';

import userSlice from '../features/User.slice';
import cartSlice from '../features/Cart.slice';
import productSlice from '../features/Product.slice';

export const store = configureStore({

    reducer:{

        user:userSlice.reducer,

        cart:cartSlice.reducer,

        product:productSlice.reducer
        

    }

})