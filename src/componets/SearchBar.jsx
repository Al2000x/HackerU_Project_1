import React, { useState } from "react";
import useAllGames from "./useAllGames";
import { useDispatch, useSelector } from "react-redux";
import { DisplayGame } from "../features/games/specific-game";
import { nextPage } from "../features/games/page-slice";

const SearchBar = () => {
  const gameSelector = useSelector((state) => state.specific);
  const dispatch = useDispatch();
  const specificGame = useAllGames(100);
  const [text, setText] = useState("");
  


  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
        name="text"
        value={text}
      />
      <button onClick={()=>{dispatch(nextPage())}}>submit</button>
    </div>
  );
};

export default SearchBar;
