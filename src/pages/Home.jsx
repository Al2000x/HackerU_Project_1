import React from 'react'
import SearchBar from '../componets/SearchBar'
import SearchedGames from '../componets/SearchedGames'
import { useSelector } from 'react-redux'

const Home = () => {
  const quary  = useSelector(state=> state.specific)
  return (
    <div>hello to our site
      <SearchBar/>
      <SearchedGames Quary={quary.foundgame}/>
    </div>
  )
}

export default Home