import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "../../features/theme/theme-toggle-slice";
import PageSlice from "../../features/games/page-slice";
import userReducer  from "../../features/user/userSlice";
import  genreReducer  from "../../features/games/category-slice";
import favoriteGamesSlice from "../../features/games/favorite-games-slice";


const store = configureStore({
    reducer:{
        theme: ThemeSlice,
        page: PageSlice,
        user: userReducer,
        genre: genreReducer, 
        favorite: favoriteGamesSlice

    }
});
export default store