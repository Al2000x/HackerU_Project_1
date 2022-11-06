import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSearchQuary } from "../app/custom_hooks/useSearchQuary";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../features/games/favorite-games-slice";
import { FiHeart } from "react-icons/fi";

// state dependent component
// type script
const SearchBar = () => {
  const [btnActive, setBtnActive] = useState(false);  
  const dispatch = useDispatch
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
         
                {/* <Hearts isClick={isClick} onClick={() => setClick(!isClick)} /> */}
                <button  onClick={()=> dispatch(toggleFavorite(game))}></button>
                <div btnActive={btnActive} onClick={() => setBtnActive(!btnActive)} className='text-center mb-1'> 
                <FiHeart  className={btnActive ? "heartActive":"heartInactive"} ></FiHeart>                         
              </div>
                <button className="glow-on-hover loginButton buttonWidthChanger">
                  <Link to={'/gameDetails'} state={game}>
                Show details
                </Link>
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
