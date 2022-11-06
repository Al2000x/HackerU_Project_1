import React, { useEffect }from 'react'
import { useGenres} from '../app/custom_hooks/useGenres'
import {Link} from 'react-router-dom'
import {useSelector } from 'react-redux'
import { toggleFavorite } from '../features/games/favorite-games-slice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { FiHeart } from "react-icons/fi";
import '../css_work/item.css'

const GamesItem = ({category}) => {
  const [btnActive, setBtnActive] = useState({});   //{1:true}
  const nextP = useSelector(state =>state.page.pNum)
  const dispatch = useDispatch();
  useEffect(() => {
  }, [])
  // console.log(faveGameArr)
    const [games] = useGenres(nextP,category)

    const toggleActive = (game) => {
        btnActive[game.id] = !btnActive[game.id]
        setBtnActive({...btnActive})
    }
    return games ? (
        <div className="item-Grid">
            {games.map(game=>{
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
        <div>
          error 
        </div>
      )
}



export default GamesItem