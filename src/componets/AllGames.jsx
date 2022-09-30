import React from 'react'
import useAllGames from './useAllGames'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AllGames = () => {
    const pageNum = useSelector(state => state.page.pNum)
   const {games}= useAllGames(pageNum)
  return (
    <div className="item-Grid">
        
    {games && games.map(game=>{
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
      {/* < href="/" className="btn btn-primary">Show more details</NavLink> */}
    </div>
  </div>)
    })}
  </div>
  )
}

export default AllGames
