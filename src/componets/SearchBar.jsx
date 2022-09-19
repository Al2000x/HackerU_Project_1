import React,{useState} from 'react'
import useAllGames from './useAllGames';

const SearchBar = () => {
    const specificGame =  useAllGames(1)
    const [text,setText]=useState("");
    console.log(text)

    let arr = [{name: 'moshe'},{name:'israel'}];
    

    const handleSreach = ()=>{
const findName = specificGame.find(val=> val.slug.toLowerCase() === text.toLowerCase());
if(!findName){
    console.log(specificGame)
    return;
}
console.log(findName) //{}
    }
  return (
    <div>
        <input type="text" onChange={(e)=>{setText(e.target.value.trim())}} name="text" value={text} />
        <button onClick={handleSreach}>submit</button>
    </div>
  )
}

export default SearchBar