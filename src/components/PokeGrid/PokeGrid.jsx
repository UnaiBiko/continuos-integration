import { useEffect, useState } from "react";
import { NotFoundState } from "../NotFoundState";
import { PokeItem } from "./components/PokeItem";
import "./PokeGrid.styles.css";
import { pokeGridUtils } from "./PokeGrid.utils";

export const PokeGrid = ({ pokemons, findValue }) => {
  const [completePokemons, setCompletePokemons] = useState([]);

  const fetchPokemonsDetails = async (pokemons) => {
    const result = await pokeGridUtils.getPokemonsDetails({ pokemons });

    setCompletePokemons(result);
  };

  useEffect(() => {
    fetchPokemonsDetails(pokemons);
  }, [pokemons]);

  if (completePokemons.length === 0)
    return <NotFoundState findValue={findValue} />;

  return (
    <div className="pokeGrid">
      {completePokemons?.map((pokemon, index) => {
        return <PokeItem key={`${pokemon.name}${index}`} {...pokemon} />;
      })}
    </div>
  );
};
