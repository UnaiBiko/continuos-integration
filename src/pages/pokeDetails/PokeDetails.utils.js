import { pokeServices } from "../../services/pokemon/pokemon.services";

const getPokeData = async (pokeName) => {
  const promise = pokeServices.getPokeDetailsPromise(pokeName);

  return await promise.then((data) => data).catch((error) => ({}));
};

export const pokeDetailsUtils = { getPokeData };
