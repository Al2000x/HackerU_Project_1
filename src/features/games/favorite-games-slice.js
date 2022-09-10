import { createSlice } from "@reduxjs/toolkit";

const initialState = {
favorite: [],
error:'',
loading: false
}

const FavoriteSlice = createSlice({ 
    name:"favorite",
    initialState,
    reducers:{
        toggleFavorite: (state, { payload }) => {
            state.movies.findIndex(m => m.id === payload)
        },
        
    }
})