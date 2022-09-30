import { useEffect } from "react";
import { useState } from "react";

export const useGenres = (page_number, genre) => {
  const [games, setGames] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games?key=6c94fd57d797402f9b6628980ff9dc14&page_size=20&page=${page_number}&genres=${genre}`
    )
      .then((response) => response.json())
      .then((data) => {
        setGames(data.results);
      });
  }, [
    `https://api.rawg.io/api/games?key=6c94fd57d797402f9b6628980ff9dc14&page_size=20&page=${page_number}&genres=${genre}`,
  ]);
  return [games];
};



