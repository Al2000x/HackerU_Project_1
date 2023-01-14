import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "../../features/theme/theme-toggle-slice";
import PageSlice from "../../features/games/page-slice";
import userReducer  from "../../features/user/userSlice";
import  genreReducer  from "../../features/games/category-slice";
import FavoriteSlice from "../../features/games/favorite-games-slice";

/**
 * here we connect all of the slices together
 * and distribute the information across the project using the provider in the index.js
 */

const store = configureStore({
    reducer:{
        theme: ThemeSlice,
        page: PageSlice,
        user: userReducer,
        genre: genreReducer, 
        fave :FavoriteSlice,
    }
});
export default store