import { useEffect, useState } from "react";
/**
 * this is a custom hook that helps us load all of the genre type games 
 * from the dropdown menu
 */
export const useGenres = (page_number, genre) => {
  const [games, setGames] = useState(null);
  useEffect(() => {
    //page page_number starts at 1 and is increased with the help of a slice and store 
    // the genre is injected with the help of games item component
    fetch(
      `https://api.rawg.io/api/games?key=71784e53f40a45f2a050c08e5f49c2c1&page_size=20&page=${page_number}&genres=${genre}`
    )
      .then((response) => response.json())
      .then((data) => {
        setGames(data.results);
      });
      //when games is changed it will start the useeffect func
  }, [games]);
  return [games];
};
