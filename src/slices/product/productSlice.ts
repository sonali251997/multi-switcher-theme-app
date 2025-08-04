import { asyncThunkCreator, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
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
            console.log("pending");
        })
        .addCase(getProduct.fulfilled,(state,{payload})=>{
            console.log("payload",payload.products)
            state.loader = false;
            state.products = payload.products;
            console.log("aciton",payload);
        })
        .addCase(getProduct.rejected,(state,action)=>{
            state.loader = false;
            console.log("rejected");
        })
    }
})

export default productSlice.reducer;