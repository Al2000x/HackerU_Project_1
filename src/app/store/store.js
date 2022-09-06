import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "../../features/theme/theme-toggle-slice";
import NextPageSlice from "../../features/games/next-page-slice";
import userReducer  from "../../features/user/userSlice";

const store = configureStore({
    reducer:{
        theme: ThemeSlice,
        page: NextPageSlice,
        user: userReducer,

    }
});
export default store