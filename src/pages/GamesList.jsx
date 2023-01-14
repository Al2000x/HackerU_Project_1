import React from 'react'
import GamesItem from '../componets/GamesItem'
import Pages from '../componets/Pages'
import { useSelector } from 'react-redux'
const GamesList = () => {
  //depending on what category you pressed the GamesItem component is going to be made accordingly 
  const SelectGenre = useSelector((state) => state.genre);

  return(<div>
    <GamesItem category={SelectGenre.genre}/>
    <Pages/>
    </div>
  )
        
  
}

export default GamesList