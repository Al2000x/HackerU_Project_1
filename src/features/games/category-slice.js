import { createSlice } from "@reduxjs/toolkit";

const initialState = { genre: "" };
export const SelectGenre = createSlice({
  name: "genre",
  initialState,
  reducers: {
    actionGenre: (state) => {
      state.genre = "action";
      console.log(state.genre)
    },
    advenrtureGenre: (state) => {
      state.genre = "adventure";
    },
    fightingGenre: (state) => {
      state.genre = "fighting";
    },
    shooterGenre: (state) => {
      state.genre = "shooter";
    },
    casualGenre: (state) => {
      state.genre = "casual";
    },
    puzzleGenre: (state) => {
      state.genre = "puzzle";
    },
    racingGenre: (state) => {
      state.genre = "racing";
    },
  },
});
export const {
  actionGenre,
  advenrtureGenre,
  fightingGenre,
  shooterGenre,
  casualGenre,
  puzzleGenre,
  racingGenre,
} = SelectGenre.actions;
export default SelectGenre.reducer;
