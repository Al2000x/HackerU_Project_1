import React, { useState } from "react";
import useAllGames from "./useAllGames";
import { useSelector } from "react-redux";
import { useSearchQuary } from "../app/custom_hooks/useSearchQuary";

// state dependent component
// type script
const SearchBar = () => {
  const gameSelector = useSelector((state) => state.specific);
  const [text, setText] = useState();
  const [results] = useSearchQuary(text);

  const handleSubmit = (text) => {
    setText(text);
  };

  const ItemGrid = () => {
    if (!results || !results.result) return null;
    return (
      <div className="item-Grid">
        {results.result.map((game) => {
          return (
            <div key={game.id} className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={game.background_image}
                alt="Card image cap"
              />
              <div className="card-body ">
                <h5 className="card-title">{game.name} </h5>
                <p className="card-text">General rating: {game.rating}/5</p>
                {/* <button  onClick={()=>{
                dispatch(toggleFavorite(game.id))  
              }}></button>                           */}
                <button className="glow-on-hover loginButton buttonWidthChanger">
                  {/* <Link to={'/gameDetails'} state={game}>
                Show details
              </Link> */}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
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
      <ItemGrid />
    </div>
  );
};

export default SearchBar;
// .map{results && JSON.stringify(results.result)}
