import React from 'react'
import GeneralGames from '../componets/GeneralGames'
import "../css_work/pages.css"
import Pages from '../componets/Pages'

import SearchBar from '../componets/SearchBar'
const Discover = () => {
 
  return(<div className='pageCustom'>
     <SearchBar />
  <GeneralGames/> 
  <Pages  />   
</div>)
}

export default Discover