import React, { useEffect } from 'react'
import { Navigate, useLocation } from 'react-router'
import '../componets/GameDetails.css'
import img from '../media/gamestick_dark_mode.png'

const GameDetails = () => {

  const location = useLocation()
  const game = location.state
  return game ?  (
   <div>

    <div className="block">
        <h1 className="GameDetailHeading">{game.name}
    </h1>
      <img className="gameDetailImg" src={game.background_image}  alt="" />
   </div>
   <div style={{ 
      backgroundImage: `url(${game.short_screenshots.image})` 
    }}>
      <h3>{game.tags[1].name}</h3>
    </div>
      </div>

   
  ) : <Navigate to= "/flappy"/>
}

export default GameDetails