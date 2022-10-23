import { useEffect, useState } from "react";
export const useGenres = (page_number, genre) => {
  const [games, setGames] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games?key=465b7885862b453a981e6a3296631ba9&page_size=20&page=${page_number}&genres=${genre}`
    )
      .then((response) => response.json())
      .then((data) => {
        setGames(data.results);
      });
  }, [games]);
  return [games];
};