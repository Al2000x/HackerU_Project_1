import { createSlice } from "@reduxjs/toolkit";

initialState = { favorite: [] }
const FavoriteSlice = createSlice({
    name:"favorite",
    initialState,
    reducers:{
        addFavorite(state, {payload}){
            state.favorite.push()
        }
    }
})