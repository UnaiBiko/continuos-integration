import { useState } from "react";
import "./PokeSearch.styles.css";

export const PokeSearch = ({ onSubmit }) => {
  const [pokeName, setPokeName] = useState("");

  const handleChange = (event) => {
    setPokeName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(pokeName);
  };

  return (
    <div className="pokeSearch">
      <form onSubmit={handleSubmit}>
        <label htmlFor="pokeName">Nombre del pokemon</label>
        <div className="pokeInput">
          <input name="pokeName" className="input" onChange={handleChange} />
          <button type="submit" className="searchButton">
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};
