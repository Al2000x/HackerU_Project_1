import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { 
  actionGenre,
  advenrtureGenre,
  fightingGenre,
  shooterGenre,
  casualGenre,
  puzzleGenre,
  racingGenre,  
} from '../features/games/category-slice'

const GameCategory = () => {
  const dispatch = useDispatch()
  return (
    <div>

    <div>choose your category</div>
    <Link onClick={()=>{
     dispatch(actionGenre()) 
    }} to="/category/action">
      <h1>action</h1>
    </Link>
     <Link onClick={()=>{
     dispatch(racingGenre()) 
    }} to="/category/racing">
      <h1>racing</h1>
    </Link>
    </div>


  )
}

export default GameCategory