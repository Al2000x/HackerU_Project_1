import { createSlice } from "@reduxjs/toolkit";

const initialState = { pNum: 1 }
const PageSlice = createSlice({
    name:"favorite",
    initialState,
    reducers:{
        nextPage(state){
            state.pNum++
            console.log(state.pNum)
        },
        previousPage(state){
            state.pNum--
            console.log(state.pNum)
        }
    }
})
export default PageSlice.reducer 
export const {nextPage, previousPage} = PageSlice.actions