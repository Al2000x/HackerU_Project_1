import { createSlice } from "@reduxjs/toolkit";

const initialState = { pNum: [1] }
const NextPageSlice = createSlice({
    name:"favorite",
    initialState,
    reducers:{
        nextPage(state){
            state.pNum++
            console.log(state.pNum)
        }
    }
})
export default NextPageSlice.reducer;
export const {nextPage} = NextPageSlice.actions