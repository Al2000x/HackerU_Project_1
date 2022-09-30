import { createSlice } from "@reduxjs/toolkit";

const initialState = {page:1, counter: 1 , num:1}
const AllGamesPageDefiner = createSlice({
name: "page definer",
initialState,
reducers:{
    NextCounter(state, action){
        state.num++
        if(state.num % 2==1){
            state.counter++
        }
    },    
}

})