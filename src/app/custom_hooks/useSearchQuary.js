import { useEffect, useState } from "react";
import axios from "axios";
export const useSearchQuary = (query) => {
 
  const [searchResults, setSearchResults] = useState(null)

 useEffect(() => {
    if(!query)return
      axios({
        method:"get",
        url:(`https://api.rawg.io/api/games?key=81cb0fcca14b427e9a003d8259ba7c0b&search=${query}`)
      })
      .then(res=>{
        const result = res.data.results
        console.log(result) 
        setSearchResults({result})
      }
      );    
    }, [query])

    return[searchResults]    

}