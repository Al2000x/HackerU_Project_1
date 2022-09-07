import React from 'react'
import GamesItem from '../componets/GamesItem'
import Pages from '../componets/Pages'
import { useSelector } from 'react-redux'
const GamesList = () => {
  const SelectGenre = useSelector((state) => state.genre);

  return(<div>
    <GamesItem category={SelectGenre.genre}/>
    <Pages/>
    </div>
  )
        
  
}

export default GamesList