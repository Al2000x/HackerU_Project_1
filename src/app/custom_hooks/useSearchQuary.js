import { useEffect, useState } from "react";
import axios from "axios";
export const useSearchQuary = (query) => {
 
  const [searchResults, setSearchResults] = useState(null)

 useEffect(() => {
    if(!query)return
      axios({
        method:"get",
        url:(`https://api.rawg.io/api/games?key=465b7885862b453a981e6a3296631ba9&search=${query}`)
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