import { createSlice } from "@reduxjs/toolkit";

const initialState = { dark: true }

const ThemeSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        changeTheme(state){
         state.dark = !state.dark;
        },
    }
})
export const {changeTheme} = ThemeSlice.actions
export default ThemeSlice.reducer


// <img onClick={()=>{
//                 dispatch(changeTheme())
//               }} src={state ? darkImg : lightImg }/>

