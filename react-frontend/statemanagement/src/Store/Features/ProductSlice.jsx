import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products/fetchProducts',async () =>{


    const response = await fetch('https://fakestoreapi.com/products');

    if(!response.ok){

        throw new Error('Failed to fetch products');

    }

    return await response.json();


} );


const productsSlice = createSlice({

    name:'products',

    initialState:{

        products:[],

        loading:false,

        error:null,

    },

    extraReducers:(builder) =>{

        builder

        .addCase(fetchProducts.pending, (state) =>{

            state.loading = true;

            state.error = null;

        } )

        .addCase(fetchProducts.fulfilled, (state,action)=>{

            state.loading = false;

            state.products = action.payload;

        })

        .addCase( fetchProducts.rejected, (state,action) =>{

            state.loading = false;

            state.error = action.error.message

        } )


    }

})



export const selectProducts = (state) => state.products.products;


export const selectProductLoading = (state) =>state.products.loading;


export default productsSlice