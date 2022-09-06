import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "../../features/theme/theme-toggle-slice";
import NextPageSlice from "../../features/games/next-page-slice";
import UserSlice  from "../../features/user/userSlice";

const store = configureStore({
    reducer:{
        theme: ThemeSlice,
        page: NextPageSlice,
        user: UserSlice,

    }
});
export default store