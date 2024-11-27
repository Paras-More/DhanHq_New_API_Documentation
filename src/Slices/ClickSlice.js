import { createSlice } from "@reduxjs/toolkit";


const ClickSlice = createSlice({
    name: 'click',
    initialState:{
        ShowMenu:false
    },
    reducers:{
        SetisMenuClicked:(state,action)=>{
            state.ShowMenu = !state.ShowMenu
        }
    }

})
export const {SetisMenuClicked} = ClickSlice.actions;
export const ClickReducers = ClickSlice.reducer;

