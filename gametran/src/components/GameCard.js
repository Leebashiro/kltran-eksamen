export default function GameCard({ name, background_image }) {
    return (
      <article className="gameCard">
        <img src={background_image} alt={`${name} background`} />
        <h3>{name}</h3>
      </article>
    );
  }