import React, { useState } from "react";
import useAllGames from "./useAllGames";


// state dependent component
// type script
const SearchBar = () => {
  const [btnActive, setBtnActive] = useState({}); 
  const { setQuery } = useAllGames();
  const toggleActive = (game) => {
    btnActive[game.id] = !btnActive[game.id]
    setBtnActive({...btnActive})
}
  const handleSubmit = (text) => {
    setQuery(text);
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          handleSubmit(e.target.value);
        }}
        name="text"
      />
      
    </div>
  );
};

export default SearchBar;
// .map{results && JSON.stringify(results.result)}
