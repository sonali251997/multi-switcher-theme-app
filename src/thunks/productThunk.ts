import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk('getProduct',async ()=>{
    let res = await axios.get('https://fakestoreapi.in/api/products');
    console.log("data",res);
    return res.data;
})



