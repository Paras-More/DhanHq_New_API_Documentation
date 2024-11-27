import { configureStore } from '@reduxjs/toolkit';        // Creates a store
import { ClickReducers } from '../Slices/ClickSlice';

const store = configureStore({
    reducer:{
        ClickStatus:ClickReducers
    }
})

export default store
