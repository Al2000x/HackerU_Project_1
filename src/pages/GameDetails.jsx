import React, { useEffect } from 'react'
import { Navigate, useLocation } from 'react-router'

const GameDetails = () => {

  const location = useLocation()
  const game = location.state
  return game ?  (
    <div>{game.name}
    <img src={game.background_image} alt="" />
    </div>
   
  ) : <Navigate to= "/flappy"/>
}

export default GameDetails