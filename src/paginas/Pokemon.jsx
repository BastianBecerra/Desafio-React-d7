import React, { useContext, useEffect, useState } from "react";
import CardPokemon from "../componentes/CardPokemon";
import Loader from "../componentes/Loading";
import { useParams } from "react-router-dom";
import { usePokemonContext } from "../PokemonProvider";

const Pokemon = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState();
  const getPokemon = usePokemonContext();

  const getPokemonData = async () => {
    try {
      const data = await getPokemon(name);
      setPokemon(data);
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    getPokemonData();
  }, []);

  return <div>{!pokemon ? <Loader /> : <CardPokemon pokemon={pokemon} />}</div>;
};
export default Pokemon;