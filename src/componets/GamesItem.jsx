import React from "react";
import { useGenres } from "../app/custom_hooks/useGenres";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toggleFavorite } from "../features/games/favorite-games-slice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FiHeart } from "react-icons/fi";
import "../css_work/item.css";

const GamesItem = ({ category }) => {
  //by you clicking the certain link you will inject the parameter 
  //through GameList and by that it will know what category to map
  //using the custom hook useGenres
  const [btnActive, setBtnActive] = useState({});
  const nextP = useSelector((state) => state.page.pNum);
  //simple pagination
  const dispatch = useDispatch();
  const [games] = useGenres(nextP, category);
  const toggleActive = (game) => {
    //using the game id we can make the button switch between booleans
    //and it's creating an array of the chosen liked with the heartActive  && heartInactive
    btnActive[game.id] = !btnActive[game.id];
    setBtnActive({ ...btnActive });
  };
  return games ? (
    //we got the games from the custom hook
    //and here we are already mapping it acordingly
    <div className="item-Grid">
      {games.map((game) => {
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
              <div
                onClick={() => toggleActive(game)}
                className="text-center mb-1"
              >
                <FiHeart
                  className={
                    btnActive[game.id] ? "heartActive" : "heartInactive"
                  }
                  onClick={() => dispatch(toggleFavorite(game))}
                ></FiHeart>
              </div>
              <p className="text-center">add to favorites!</p>
              <button className="glow-on-hover loginButton buttonWidthChanger">
                <Link to={"/gameDetails"} state={game}>
                  Show details
                </Link>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <div>error</div>
  );
};

export default GamesItem;
