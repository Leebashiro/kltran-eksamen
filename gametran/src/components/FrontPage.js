import GameCard from "./GameCard";
import { Link } from "react-router-dom";

export default function FrontPage ({games}) {
    return (
        <>
          <h2 id="shopDashBoardTitle">GameShop</h2>
          <section className="shopDashBoard">
            {games?.map((game) => (
              <GameCard key={game.id} name={game.name} background_image={game.background_image} />
            ))}
            <Link to="/gameshop">Visit Shop</Link>
          </section>
        </>
      );
    }