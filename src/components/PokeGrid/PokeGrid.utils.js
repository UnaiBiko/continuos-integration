import { pokeServices } from "../../services/pokemon/pokemon.services";

const mapPokemonPromises = (pokemons) => {
  return pokemons.map(({ name }) => pokeServices.getPokeDetailsPromise(name));
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
