const POKE_API_URL = "https://pokeapi.co/api/v2/pokemon";

const getData = async ({ pokeName = "", setPokemons, setFindValue }) => {
  setFindValue(pokeName);
  const isUniquePokemon = !!pokeName;

  await fetch(`${POKE_API_URL}/${pokeName}`)
    .then((response) => response.json())
    .then((data) => {
      const currentData = isUniquePokemon ? [data] : data.results;
      setPokemons(currentData);
    })
    .catch(() => setPokemons([]));
};

export const pokedexUtils = { getData };
