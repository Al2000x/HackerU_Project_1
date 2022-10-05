import { createSlice } from "@reduxjs/toolkit";

const initialState = { foundgame:""}
const SpecificGame = createSlice({
    name:"specific game",
    initialState,
    reducers:{
        DisplayGame(state, action){
           state.foundgame=action.payload
           console.log(state.foundgame)
        }
    }
})
export default SpecificGame.reducer 
export const {DisplayGame} = SpecificGame.actions