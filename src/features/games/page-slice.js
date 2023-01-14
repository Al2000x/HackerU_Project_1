import { createSlice } from "@reduxjs/toolkit";
// a reducer for the pagination
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
        },
        pageDefaulter(state){
            state.pNum=1
            console.log(state.pNum)
        }
    }
})
export default PageSlice.reducer 
export const {nextPage, previousPage, pageDefaulter} = PageSlice.actions