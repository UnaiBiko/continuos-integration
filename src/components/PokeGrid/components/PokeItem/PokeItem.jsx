import { useNavigate } from "react-router-dom";
import { stringUtils } from "../../../../utils";
import "./PokeItem.styles.css";

export const PokeItem = ({ name, sprites }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(name);
  };

  return (
    <div className="pokeItem" onClick={handleClick}>
      <img src={sprites?.front_default} alt={name} width="180" height="180" />
      <p className="pokeName">{stringUtils.capitalize(name)}</p>
    </div>
  );
};
