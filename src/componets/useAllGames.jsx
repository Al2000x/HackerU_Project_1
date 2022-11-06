import { useEffect } from 'react'
  import { useState } from 'react'
  import axios from 'axios'
const useAllGames = (pageNum) => {
  const [generalResult, setGeneralResult] = useState()
  useEffect(() => {
    axios({
      method:"get",
      url: `https://api.rawg.io/api/games?key=5b0cf7ee9af3428f8fd4844754db4b83&page_size=40&page=${pageNum}`
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