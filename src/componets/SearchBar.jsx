import React, { useState } from "react";
import useAllGames from "./useAllGames";
import { useSelector } from "react-redux";
import { useSearchQuary } from "../app/custom_hooks/useSearchQuary";



// state dependent component
// type script
const SearchBar = () => {
  const gameSelector = useSelector((state) => state.specific)
  const [text , setText] = useState();
  const [results] = useSearchQuary(text)
  const handleSubmit= (text)=>{
    setText(text)
  }
  return (
    <div>
      <input
        type="text"
        onChange={(e) => { handleSubmit(e.target.value)   }}
        name="text"
      />
      {results && JSON.stringify(results.result)}
    </div>
  );
};

export default SearchBar;
