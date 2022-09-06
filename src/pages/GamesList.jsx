import React from 'react'
import GamesItemAction from '../componets/GamesItemAction'
import NextPage from '../componets/NextPage'
import { useSelector } from 'react-redux'
const GamesList = () => {
  const SelectGenre = useSelector((state) => state.genre);

  return(<div>
    <GamesItemAction category={SelectGenre.genre}/>
    <NextPage/>
    </div>
  )
        
  
}

export default GamesList