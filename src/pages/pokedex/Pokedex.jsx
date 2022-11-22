import { useEffect, useState } from "react";
import { PokeGrid, PokeSearch } from "../../components";
import { pokedexUtils } from "./Pokedex.utils";

export const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [findValue, setFindValue] = useState([]);

  const fetchPokemons = async (pokeName = "") => {
    const result = await pokedexUtils.getData(pokeName);

    setPokemons(result);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  const handleChange = async (pokeName) => {
    setFindValue(pokeName);
    fetchPokemons(pokeName);
  };

  return (
    <>
      <h1>Buscador de Pokemons</h1>
      <PokeSearch onSubmit={handleChange} />
      <PokeGrid pokemons={pokemons} findValue={findValue} />
    </>
  );
};
