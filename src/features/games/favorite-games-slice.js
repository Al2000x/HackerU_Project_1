import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorite: [],
    error:'',
    loading: false
}
// the logic for building an array of favorit by using the current payload id of a game
const FavoriteSlice = createSlice({ 
    name:"favorite",
    initialState,
    reducers:{
        toggleFavorite: (state, { payload }) => {
           const indx = state.favorite.findIndex(game => game.id === payload.id)
           console.log(state.favorite)
            console.log(payload)
           if(indx === -1) {
               state.favorite = [...state.favorite, payload]
           }else           
                state.favorite.splice(indx, 1)    
        },
    }
})
export default FavoriteSlice.reducer
export const {toggleFavorite} = FavoriteSlice.actions