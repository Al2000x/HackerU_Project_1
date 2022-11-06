import React from 'react'
import useAllGames from './useAllGames'
import { toggleFavorite } from '../features/games/favorite-games-slice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const GeneralGames = () => {
  const pageNum = useSelector(state=>state.page)
     const [generalResult] = useAllGames(pageNum.pNum)
     const dispatch = useDispatch();
    return generalResult ? (
      <div className="item-Grid">
          {generalResult.map(game=>{
        return(
          <div key={game.id} className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src={game.background_image} alt="Card image cap"/>
            <div className="card-body ">
            <h5 className="card-title">{game.name} </h5>
            <p className="card-text">General rating: {game.rating}/5</p>
            <button  onClick={()=>{
              dispatch(toggleFavorite(game))  
            }}></button>
            <button  className='glow-on-hover loginButton card-button'>
            <Link to={'/gameDetails'} state={game}>
              Show details
            </Link>
            </button>
          </div>
        </div>)
          })}
        </div>
    ):
    (
      <div>err  </div>
    )
  }

export default GeneralGames
