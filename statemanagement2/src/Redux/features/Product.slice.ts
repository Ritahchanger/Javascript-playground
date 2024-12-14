import {createSlice,PayloadAction} from '@reduxjs/toolkit';

import { Product } from '../../types/Product.interface';

interface ProductState{

    products:Product[];

    loading:boolean;

}

const initialState:ProductState = {

    products:[],

    loading:false,

}

const productSlice = createSlice({


    name:'products',

    initialState,

    reducers:{

        setProducts(state,action:PayloadAction<Product[]>){

            state.products = action.payload

        },

        setlLoading(state,action:PayloadAction<boolean>){

            state.loading = action.payload;

        }

    }

})

export const { setlLoading,setProducts } = productSlice.actions;


export default productSlice;