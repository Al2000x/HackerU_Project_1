import React, {useState} from 'react'
import useAllGames from './useAllGames';
import { useDispatch } from 'react';
import { DisplayGame } from '../features/games/specific-game';

const SearchBar = () => {
  const dispastch = useDispatch();
    const specificGame =  useAllGames(1)
    const [text,setText]=useState("");
    console.log(text)
    const handleSreach = ()=>{
const findName = specificGame.find(val=> val.slug.toLowerCase() === text.toLowerCase());
if(!findName){ 
    return;
}
dispastch(DisplayGame(findName))
    }
    
  return (
    <div>
        <input type="text" onChange={(e)=>{setText(e.target.value.trim())}} name="text" value={text} />
        <button onClick={handleSreach}>submit</button>
    </div>
  )
}

export default SearchBar