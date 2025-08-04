import { combineReducers } from "@reduxjs/toolkit";
import appReducer from "../slices/app/appSlice";
import productReducer from "../slices/product/productSlice";


const rootReducer = combineReducers({
    app:appReducer,
    product: productReducer
})

export default rootReducer;