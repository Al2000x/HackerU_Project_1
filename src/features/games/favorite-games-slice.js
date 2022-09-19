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
           const indx = state.favorite.findIndex(game => game.id === payload.id)
           state.favorite[indx] = !state.favorite[indx]
        },
        
    }
})