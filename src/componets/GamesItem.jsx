import React, { useEffect }from 'react'
import { useGenres} from '../app/custom_hooks/useGenres'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../css_work/item.css'

const GamesItem = ({category}) => {
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
              <div className="card-body ">
              <h5 className="card-title">{game.name} </h5>
              <p className="card-text">General rating: {game.rating}/5</p>
              <button  onClick={()=>{
                // dispatch(toggleFavorite(game.id))  
              }}></button>
              <button className='glow-on-hover loginButton'>

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
        <div>
          error 
        </div>
      )
}



export default GamesItem