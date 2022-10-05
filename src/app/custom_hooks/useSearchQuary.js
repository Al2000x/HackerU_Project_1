import { useEffect, useState } from "react";
import axios from "axios";

export const useSearchQuary = (quary) => {
 const [searchQuary, setSearchQuary] = useState(null)
    useEffect(() => {
      axios({
        method:"get",
        url:(`https://api.rawg.io/api/games?key=6c94fd57d797402f9b6628980ff9dc14&&search=${quary}`)
      })
      .then(res=>{
        const result = res.data.results
        console.log(result) 
       setSearchQuary({result})
      }
      );    
    }, [setSearchQuary])
    return[searchQuary]
    
 
}