import React from 'react'
import useAllGames from './useAllGames'
import { useEffect } from 'react'

const GeneralGames = () => {
     const games = useAllGames(100)
    useEffect(() => {
        if(!games)
        console.log(games)
    },[games])

    if(!games) return <div>Loading.....</div>
    return (
      <div>{games.map(game => game.name)}</div>
    )
  }

export default GeneralGames
