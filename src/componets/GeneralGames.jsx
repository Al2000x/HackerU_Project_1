import React from 'react'
import useAllGames from './useAllGames'
import { toggleFavorite } from '../features/games/favorite-games-slice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FiHeart } from "react-icons/fi";
import { Link } from 'react-router-dom'
const GeneralGames = () => {
  const [btnActive, setBtnActive] = useState({});
     const { generalResultFiltered } = useAllGames()
     const dispatch = useDispatch();
     const toggleActive = (game) => {
      btnActive[game.id] = !btnActive[game.id]
      setBtnActive({...btnActive})
  }
  //because we wrapped the app with the context we can extract the info and map it here
    return generalResultFiltered ? (
      <div className="item-Grid">
          {generalResultFiltered.map(game=>{
        return(
            <div key={game.id} className="card" style={{width: '18rem'}}>
              <img className="card-img-top" src={game.background_image} alt="Card image cap"/>
              <div className="card-body ">
              <h5 className="card-title">{game.name} </h5>
              <p className="card-text">General rating: {game.rating}/5</p>
              <div  onClick={() => toggleActive(game)} className='text-center mb-1'> 
              <FiHeart  className={btnActive[game.id] ? "heartActive":"heartInactive"}  onClick={()=> dispatch(toggleFavorite(game))}></FiHeart>                         
              </div>
              <p className='text-center'>add to favorites!</p>
              <button className='glow-on-hover loginButton buttonWidthChanger'>

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
