import { useEffect, useState } from "react";
export const useGenres = (page_number, genre) => {
  const [games, setGames] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games?key=5b0cf7ee9af3428f8fd4844754db4b83&page_size=20&page=${page_number}&genres=${genre}`
    )
      .then((response) => response.json())
      .then((data) => {
        setGames(data.results);
      });
  }, [games]);
  return [games];
};