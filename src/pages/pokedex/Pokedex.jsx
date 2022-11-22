import { useEffect, useState } from "react";
import { PokeGrid, PokeSearch } from "../../components";
import { pokedexUtils } from "./Pokedex.utils";

export const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [findValue, setFindValue] = useState([]);

  useEffect(() => {
    pokedexUtils.getData({ setPokemons, setFindValue });
  }, []);

  const handleChange = async (pokeName) => {
    await pokedexUtils.getData({ pokeName, setPokemons, setFindValue });
  };

  return (
    <>
      <h1>Buscador de Pokemons</h1>
      <PokeSearch onSubmit={handleChange} />
      <PokeGrid pokemons={pokemons} findValue={findValue} />
    </>
  );
};
