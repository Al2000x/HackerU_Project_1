import React from 'react'
import GamesItem from '../componets/GamesItemAction'
import NextPage from '../componets/NextPage'
import { useSelector } from 'react-redux'
const GamesList = () => {
  const SelectGenre = useSelector((state) => state.genre);

  return(<div>
    <GamesItem category={SelectGenre.genre}/>
    <NextPage/>
    </div>
  )
        
  
}

export default GamesList