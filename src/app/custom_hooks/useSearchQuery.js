import { useEffect, useState } from "react";
import axios from "axios";
/**
 * this is the hook that helps us load all of the searh related results
 * for example from the input
 */
export const useSearchQuery = (query) => {
  const [searchResults, setSearchResults] = useState(null)

 useEffect(() => {
    if(!query){
      setSearchResults(null)
      return
    }
      axios({
        method:"get",
        url:(`https://api.rawg.io/api/games?key=71784e53f40a45f2a050c08e5f49c2c1&search=${query}}`)
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