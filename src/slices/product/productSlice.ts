import {createSlice } from "@reduxjs/toolkit";
import { getProduct } from "../../thunks/productThunk";

const initialState = {
    products:[],
    loader:false
}



const productSlice = createSlice({
    name:"productSlice",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getProduct.pending,(state)=>{
            state.loader = true;
        })
        .addCase(getProduct.fulfilled,(state,{payload})=>{
            state.loader = false;
            state.products = payload.products;
        })
        .addCase(getProduct.rejected,(state)=>{
            state.loader = false;
        })
    }
})

export default productSlice.reducer;