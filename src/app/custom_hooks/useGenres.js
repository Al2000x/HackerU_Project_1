import { useEffect, useState } from "react";
export const useGenres = (page_number, genre) => {
  const [games, setGames] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games?key=71784e53f40a45f2a050c08e5f49c2c1&page_size=20&page=${page_number}&genres=${genre}`
    )
      .then((response) => response.json())
      .then((data) => {
        setGames(data.results);
      });
  }, [games]);
  return [games];
};
