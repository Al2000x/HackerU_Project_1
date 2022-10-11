import { useEffect, useState } from "react";
import axios from "axios";
export const useSearchQuary = (query) => {
 
  const [searchResults, setSearchResults] = useState(null)

 useEffect(() => {
    if(!query)return
      axios({
        method:"get",
        url:(`https://api.rawg.io/api/games?key=6c94fd57d797402f9b6628980ff9dc14&&search=${query}`)
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