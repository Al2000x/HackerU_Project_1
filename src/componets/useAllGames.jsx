import { useEffect } from 'react'
  import { useState } from 'react'
  import axios from 'axios'
import { useSelector } from 'react-redux'
import { createContext } from 'react'
import { useContext } from 'react'

const GamesContext = createContext(null)

export const GamesContextProvider = ({children}) => {

  const pageNum = useSelector(state=> state.page)
  const [generalResultFiltered, setGeneralResultFiltered] = useState()
  const [query, setQuery] = useState(null)

  useEffect(() => {
    if(!query) {
      return
    }
    axios({
      method:"get",
      url: `https://api.rawg.io/api/games?key=71784e53f40a45f2a050c08e5f49c2c1&page_size=40&search=${query}`
    })
    .then(res=>{
      const result = res.data.results
      setGeneralResultFiltered(result)
    })
  }, [query])

  useEffect(() => {
    if(query)  {
      return
    }
    axios({
      method:"get",
      url: `https://api.rawg.io/api/games?key=71784e53f40a45f2a050c08e5f49c2c1&page_size=40&page=${pageNum.pNum}`
    })
    .then(res=>{
      const result = res.data.results
      setGeneralResultFiltered(result)
    })
  }, [pageNum,query])

  return <GamesContext.Provider value={{ generalResultFiltered, setQuery }} >
      {children}
  </GamesContext.Provider>
}
const useAllGames = () => {
    const context = useContext(GamesContext)
    return context
}
export default useAllGames