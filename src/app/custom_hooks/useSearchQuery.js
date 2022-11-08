import { useEffect, useState } from "react";
import axios from "axios";

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