import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "../../features/theme/theme-toggle-slice";
import NextPageSlice from "../../features/games/next-page-slice";
import userReducer  from "../../features/user/userSlice";
import  genreReducer  from "../../features/games/category-slice";

const store = configureStore({
    reducer:{
        theme: ThemeSlice,
        page: NextPageSlice,
        user: userReducer,
        genre: genreReducer, 

    }
});
export default store