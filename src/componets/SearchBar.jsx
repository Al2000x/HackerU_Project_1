import React from "react";
import useAllGames from "./useAllGames";
import { BiSearchAlt } from "react-icons/bi";

import "../css_work/SearchBar.css";
// state dependent component
//using context we can give the query the param it needs to fetch the info
const SearchBar = () => {
  const { setQuery } = useAllGames();
  const handleSubmit = (text) => {
    setQuery(text);
  };
  return (
    <div className="text-center serchDiv">
   
      <input placeholder="Search..." class="js-search text-center" type="text"
        onChange={(e) => {
          handleSubmit(e.target.value);
          // this is what sends to the setquery the value and therefore it's no longer null
        }}/>
      <span>
        <BiSearchAlt className="MagEye" color="black" size="2rem" />
      </span>
    </div>
  );
};

export default SearchBar;
