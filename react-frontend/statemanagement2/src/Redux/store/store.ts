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

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;