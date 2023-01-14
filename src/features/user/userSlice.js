import { createSlice } from "@reduxjs/toolkit";
    export const UserSlice = createSlice({
        name:'user',
        initialState:{
            user:null
        },
        reducers:{
            // takes the payload and saves it to user
            login:(state, action)=>{     
                state.user = action.payload   
            },
            // simply sets the user back to null
            logout:(state)=>{
                state.user=null;
            }
        }
    })
    export const {login, logout} = UserSlice.actions;
    export const selectUser = (state) => state.user.user
    export default UserSlice.reducer;