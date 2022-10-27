import { useEffect } from 'react'
  import { useState } from 'react'
  import axios from 'axios'
const useAllGames = (pageNum) => {
  const [generalResult, setGeneralResult] = useState()
  useEffect(() => {
    axios({
      method:"get",
      url: `https://api.rawg.io/api/games?key=81cb0fcca14b427e9a003d8259ba7c0b&page_size=40&page=${pageNum}`
    })
    .then(res=>{
      const result = res.data.results
      // console.log(result)
      setGeneralResult(result)
      console.log(generalResult)
    })
  }, [pageNum])
    return [generalResult]
}
export default useAllGames