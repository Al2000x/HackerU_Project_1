import { useEffect, useState } from "react";
export const useGenres = (page_number, genre) => {
  const [games, setGames] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games?key=81cb0fcca14b427e9a003d8259ba7c0b&page_size=20&page=${page_number}&genres=${genre}`
    )
      .then((response) => response.json())
      .then((data) => {
        setGames(data.results);
      });
  }, [games]);
  return [games];
};