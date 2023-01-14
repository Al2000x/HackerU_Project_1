import DOMPurify from "dompurify";
//the api has some html elements to convert 
//so we're using dompurify to make it safer
import "../css_work/GameDetails.css";
import { Navigate, useLocation } from "react-router";
import React, { useEffect } from "react";
import { toggleFavorite } from '../features/games/favorite-games-slice'
import { FiHeart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { SocialIcon } from "react-social-icons";
import { useState } from "react";
const GameDetails = () => {
  //this page fetches a specific game because this is the only way to get a more in depth
  //info of this specific game
  const [btnActive, setBtnActive] = useState({});
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const location = useLocation();
  //Returns the current navigation action which describes how the router came to
  // the current location, either by a pop, push, or replace on the history stack.
  const game = location.state;
  const gameKey = game.id;
  const toggleActive = (game) => {
    btnActive[game.id] = !btnActive[game.id]
    setBtnActive({...btnActive})
}
  useEffect(() => {
    fetch(
      //the gameKey is the id which we fetch by
      `https://api.rawg.io/api/games/${gameKey}?key=6c94fd57d797402f9b6628980ff9dc14`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return game ? (
    <div>
      <div className="padder">

      <div className="block ">
        <h1 className="GameDetailHeading">{game.name}</h1>
        <img className="gameDetailImg" src={game.background_image} alt="" />
      </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${game.short_screenshots.image})`,
        }}
      >
      <div  onClick={() => toggleActive(game)} className='text-center mb-1'> 
              <p className=" fave-i">
              <FiHeart  className={btnActive[game.id] ? "heartActive":"heartInactive"}  onClick={()=> dispatch(toggleFavorite(game))}></FiHeart>                         
              </p>
              </div>
      <div>
        <h3>{game.tags[0].name}</h3>
        <div> 
         <h3>realeased {game.released}</h3> 
        </div>
        <div> 
         <h3>{game.reddit_name}</h3> 
        </div>
      </div>
        {data ? (
          <div>
            <p>{data.id}</p>  
            {data.reddit_url==""  ?  (
             <h1></h1>
            ):(
              <div>          
              <a  className="m-2">
                <SocialIcon className="l-icone" url={data.reddit_url} target={"_blank"} />
              </a >
              <p>check out the reddit!</p>
              </div> 
            )}
            {
              data.platforms.filter((p) => p.requirements != null)[0]
                .requirements.minimum
            }
            {
              data.platforms.filter((p) => p.requirements != null)[0]
                .requirements.minimum
            }
            <br />
            {
              data.platforms.filter((p) => p.requirements != null)[0]
                .requirements.recommended
            }
            <br />
            
            <h4>
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(data.description),
                }}
              />
            </h4>
          </div>
        ) : null}
      </div>
    </div>
  ) : (
    <Navigate to="/flappy" />
  );
};

export default GameDetails;
