import React, { useEffect }from 'react'
import { useGenres} from '../app/store/gamesData'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import './item.css'

const GamesItemAction = () => {
  const nextP = useSelector(state =>state.page.pNum)
  useEffect(() => {
 
  }, [])
  

 
    const [games] = useGenres(nextP,"action")
    return games ? (
        <div className="item-Grid">
            {games.map(game=>{
          return(
            <div key={game.id} className="card" style={{width: '18rem'}}>
              <img className="card-img-top" src={game.background_image} alt="Card image cap"/>
              <div className="card-body">
              <h5 className="card-title">{game.name} </h5>
              <p className="card-text">{game.rating}</p>
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

export default GamesItemAction