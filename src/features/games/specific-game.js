import { createSlice } from "@reduxjs/toolkit";

const initialState = { foundgame:[] }
const SpecificGame = createSlice({
    name:"specific game",
    initialState,
    reducers:{
        DisplayGame(state){
            state.foundgame.push()
            console.log(state.foundgame)
            console.log("first")
        }
    }
})
export default SpecificGame.reducer 
export const {DisplayGame} = SpecificGame.actions