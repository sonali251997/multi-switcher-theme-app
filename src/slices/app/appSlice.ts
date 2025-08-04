import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme:"theme1"
}

const appSlice = createSlice({
    name:"appSlice",
    initialState,
    reducers:{
        setTheme:(state,{payload})=>{
            state.theme = payload;
        }
    }
})


export const {setTheme} = appSlice.actions;
export default appSlice.reducer;