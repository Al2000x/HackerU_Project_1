import React, { useState } from "react";
import useAllGames from "./useAllGames";
import { useDispatch, useSelector } from "react-redux";
import { DisplayGame } from "../features/games/specific-game";

const SearchBar = () => {
  const gameSelector = useSelector((state) => state.specific);
  const dispastch = useDispatch();
  const specificGame = useAllGames(100);
  const [text, setText] = useState("");

  const handleSreach = () => {
    const findName = specificGame.games.find(
      (val) => val.name.toLowerCase() === text.toLowerCase().trim()
    );

    if (!findName) {
      return;
    }
    if (findName !== gameSelector.foundgame) dispastch(DisplayGame(findName));
  };

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
      <button onClick={handleSreach()}>submit</button>
    </div>
  );
};

export default SearchBar;
