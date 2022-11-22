const POKE_API_URL = "https://pokeapi.co/api/v2/pokemon";

const mapPokemonPromises = (pokemons) => {
  return pokemons.map((pokemon) => {
    return fetch(`${POKE_API_URL}/${pokemon.name}`).then((response) =>
      response.json()
    );
  });
};

const getPokemonsDetails = async ({ pokemons }) => {
  const promisesPokemons = mapPokemonPromises(pokemons);

  return await Promise.allSettled(promisesPokemons).then((allResponses) => {
    const allPokemons = allResponses.reduce((allPokemons, response) => {
      if (response.status === "rejected") return allPokemons;
      allPokemons.push(response.value);
      return allPokemons;
    }, []);

    return allPokemons;
  });
};

export const pokeGridUtils = { getPokemonsDetails };
