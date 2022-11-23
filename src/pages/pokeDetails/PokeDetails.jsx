import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PokeData } from "../../components";
import { pokeDetailsUtils } from "./PokeDetails.utils";

export const PokeDetails = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await pokeDetailsUtils.getPokeData(name);

      setPokemon(response);
    };

    fetchData();
  }, [name]);

  if (!pokemon) return null;

  return (
    <>
      <PokeData pokemon={pokemon} />
    </>
  );
};
