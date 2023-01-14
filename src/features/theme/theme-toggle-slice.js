import { createSlice } from "@reduxjs/toolkit";

const initialState = { dark: true }
// darktheme logic just a simple dispatch changes from false to true
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


