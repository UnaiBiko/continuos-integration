import { useEffect, useState } from "react";
import { NotFoundState } from "../NotFoundState";
import { PokeItem } from "./components/PokeItem";
import "./PokeGrid.styles.css";
import { pokeGridUtils } from "./PokeGrid.utils";

export const PokeGrid = ({ pokemons, findValue }) => {
  const [completePokemons, setCompletePokemons] = useState([]);

  useEffect(() => {
    const fetchPokemonsDetails = async () => {
      const result = await pokeGridUtils.getPokemonsDetails({ pokemons });

      setCompletePokemons(result);
    };

    fetchPokemonsDetails();
  }, [pokemons]);

  if (pokemons.length === 0) return <NotFoundState findValue={findValue} />;

  return (
    <div className="pokeGrid">
      {completePokemons.map((pokemon) => {
        return <PokeItem {...pokemon} />;
      })}
    </div>
  );
};
