import "./PokeItem.styles.css";

export const PokeItem = ({ name, sprites }) => {
  return (
    <div className="pokeItem">
      <img src={sprites?.front_default} alt={name} width="180" height="180" />
      <p className="pokeName">{name}</p>
    </div>
  );
};
