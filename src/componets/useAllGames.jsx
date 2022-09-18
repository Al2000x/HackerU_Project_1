  import { useEffect } from 'react'
  import { useState } from 'react'
async function getAllGames(amount) {
    const nextPage = (i) => `https://api.rawg.io/api/games?key=71784e53f40a45f2a050c08e5f49c2c1&page_size=40&page=${i}`
    const pArray = []
    for(let i = 1; i <= amount;i++) 
        pArray.push(fetch(nextPage(i)))
   const responseArray = (await Promise.all(pArray)).map(response => (response.json()))
   const arrayOfResultsArray  = (await Promise.all(responseArray))
   const resultsArray =  arrayOfResultsArray.map(dataObject => dataObject.results)
   return resultsArray.reduce((prev,next) => [...prev,...next],[])
}


const useAllGames = (amountOfPages) => {
    const [games,setGames] = useState()
    useEffect(() => {
        (async () => {
            const gamesResult = await getAllGames(amountOfPages)
            setGames(gamesResult)
        })()
      }, []);
      return games
}

  // const Test = () => {
  //   const games = getAllGames(100)
  //   useEffect(() => {
  //       if(!games)
  //       console.log(games)
  //   },[games])

  //   if(!games) return <div>Loading.....</div>
  //   return (
  //     <div>{games.map(game => game.name)}</div>
  //   )
  // }

  // export default Test

export default useAllGames