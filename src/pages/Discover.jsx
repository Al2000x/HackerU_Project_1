import React from 'react'
import GeneralGames from '../componets/GeneralGames'
import "../css_work/pages.css"

import SearchBar from '../componets/SearchBar'
const Discover = () => {
 //combines all of the discover all games page
  return(<div className='pageCustom'>
    <SearchBar />
    <GeneralGames/> 
    <br />
</div>)
}

export default Discover