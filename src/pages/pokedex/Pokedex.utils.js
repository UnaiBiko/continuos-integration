const POKE_API_URL = "https://pokeapi.co/api/v2/pokemon";

const getData = async (pokeName = "") => {
  const isUniquePokemon = !!pokeName;

  return await fetch(`${POKE_API_URL}/${pokeName}`)
    .then((response) => response.json())
    .then((data) => {
      const currentData = isUniquePokemon ? [data] : data.results;
      return currentData;
    })
    .catch(() => []);
};

export const pokedexUtils = { getData };
