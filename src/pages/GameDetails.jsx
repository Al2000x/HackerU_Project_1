import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router";
import "../css_work/GameDetails.css";
import DOMPurify from "dompurify";

import { useState } from "react";
const GameDetails = () => {
  const [data, setData] = useState();

  const location = useLocation();
  const game = location.state;
  const gameKey = game.id;

  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games/${gameKey}?key=71784e53f40a45f2a050c08e5f49c2c1`
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
        <h3>{game.tags[0].name}</h3>
      </div>
      <div>
        {data ? (
          <div>
            <p>{data.id}</p>
            {
              data.platforms.filter((p) => p.requirements != null)[0]
                .requirements.minimum
            }
            <br />
            {
              data.platforms.filter((p) => p.requirements != null)[0]
                .requirements.recommended
            }
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
      <div></div>
    </div>
  ) : (
    <Navigate to="/flappy" />
  );
};

export default GameDetails;
