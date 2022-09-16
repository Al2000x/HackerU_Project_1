import React, { useEffect }from 'react'
import { useGenres} from '../app/store/gamesData'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {toggleFavorite} from '../features/games/favorite-games-slice'


import './item.css'

const GamesItem = ({category}) => {
  const dispatch = useDispatch();
  const nextP = useSelector(state =>state.page.pNum)
  useEffect(() => {
  }, [])

 
    const [games] = useGenres(nextP,category)
    return games ? (
        <div className="item-Grid">
            {games.map(game=>{
          return(
            <div key={game.id} className="card" style={{width: '18rem'}}>
              <img className="card-img-top" src={game.background_image} alt="Card image cap"/>
              <div className="card-body">
              <h5 className="card-title">{game.name} </h5>
              <p className="card-text">{game.rating}</p>
              <button onClick={()=>{
                // dispatch(toggleFavorite(game.id))  
              }}></button>
              <Link to={'/gameDetails'} state={game}>
                Show details
              </Link>
              {/* < href="/" className="btn btn-primary">Show more details</NavLink> */}
            </div>
          </div>)
            })}
          </div>
      ):
      (
        <div>
          error 
        </div>
      )
}



export default GamesItem