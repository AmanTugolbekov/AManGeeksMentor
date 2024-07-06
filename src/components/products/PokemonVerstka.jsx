import axios from "axios";
import React, { useEffect, useState } from "react";

const PokemonVerstka = ({ pokemon }) => {
  const [elemPokemon, setElemPokemon] = useState();
  const amin = async () => {
    const { data } = await axios(pokemon.url);
    setElemPokemon(data.sprites.front_default);
    console.log(data);
  };
  useEffect(() => {
    amin();
  }, []);
  return (
    <div
      className="pokemonCard"
      style={{
        display: "flex",
        backgroundColor: "lightblue",
        width: "25rem",
        height: "10rem",
        borderRadius: "1rem",
        justifyContent: "center",
        alignItems: "center",
        gap: "9rem",
        cursor: "pointer",
      }}
    >
      <img style={{ height: "6rem" }} src={elemPokemon} alt={pokemon.name} />
      <span style={{ fontWeight: "700", fontSize: "130%" }}>
        {pokemon.name}
      </span>
    </div>
  );
};

export default PokemonVerstka;
