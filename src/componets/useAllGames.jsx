import { useEffect } from 'react'
  import { useState } from 'react'
  import axios from 'axios'
import { useSelector } from 'react-redux'
import { createContext } from 'react'
import { useContext } from 'react'
//this hook helps us decide what info we want to extract
//because each fetch gives different info i had to make to api fetches with different params
const GamesContext = createContext(null)

export const GamesContextProvider = ({children}) => {
//using children we can provide the info throughout the project by wrapping the app with context
  const pageNum = useSelector(state=> state.page)
  const [generalResultFiltered, setGeneralResultFiltered] = useState()
  //depending what is being fetched it will set the usestate acordingly
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
  //will be refetched when one of these happen

  return <GamesContext.Provider value={{ generalResultFiltered, setQuery }} >
    {/* this will provide the final fetch using the two params */}
      {children}
  </GamesContext.Provider>
}
const useAllGames = () => {
    const context = useContext(GamesContext)
    return context
}
export default useAllGames