import { createSlice } from "@reduxjs/toolkit";


const appSlice=createSlice({
    name:"app",
    initialState:{
        isToggle:true
    },
    reducers:{
        toggleItem:(state)=>{
            state.isToggle= !state.isToggle;
        },
    },
});

export const {toggleItem} =appSlice.actions;
export default appSlice.reducer;