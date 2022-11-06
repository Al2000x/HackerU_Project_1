import { useEffect, useState } from "react";
import axios from "axios";

export const useSearchQuary = (query) => {
  const [searchResults, setSearchResults] = useState(null)

 useEffect(() => {
    if(!query)return
      axios({
        method:"get",
        url:(`https://api.rawg.io/api/games?key=5b0cf7ee9af3428f8fd4844754db4b83&search=${query}}`)
      })
      .then(res=>{
        const result = res.data.results
        // console.log(result) 
        setSearchResults({result})
      }
      );
    }, [query])

    return[searchResults]

}