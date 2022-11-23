const POKE_API_URL = "https://pokeapi.co/api/v2/pokemon";

const getPokeDetailsPromise = (name) => {
  return fetch(`${POKE_API_URL}/${name}`).then((response) => response.json());
};

export const pokeServices = { getPokeDetailsPromise };
