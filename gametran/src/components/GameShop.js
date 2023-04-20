import React, { useState } from "react";
import GameCard from "./GameCard";
import { Link } from "react-router-dom";

export default function FrontPage({ games }) {
  const [latestGames, setLatestGames] = useState([]);

  const fetchLatestGames = async () => {
    const response = await fetch(
      "https://api.rawg.io/api/games?key=6971e514cb3f4acaaac0d86b97575afb&dates=2019-09-01,2019-09-30&ordering=-released&page_size=10"
    );
    const data = await response.json();
    setLatestGames(data.results);
  };

  const displayGames = latestGames.length ? latestGames : games.slice(0, 3);

  return (
    <>
      <h2 id="shopDashBoardTitle">GameShop</h2>
      <section className="shopDashBoard">
        {displayGames.map((game) => (
          <GameCard
            key={game.id}
            name={game.name}
            background_image={game.background_image}
          />
        ))}
        <Link to="/gameshop" onClick={fetchLatestGames}>
          Visit Shop
        </Link>
      </section>
    </>
  );
}