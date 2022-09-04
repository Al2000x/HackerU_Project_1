import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "../../features/theme/theme-toggle-slice";
import NextPageSlice from "../../features/games/next-page-slice";

const store = configureStore({
    reducer:{
        theme: ThemeSlice,
        page: NextPageSlice,

    }
});
export default store