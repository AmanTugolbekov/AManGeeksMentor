import React, { useEffect, useState } from "react";
import { API } from "../../helpers/const";
import PokemonVerstka from "./PokemonVerstka";
import axios from "axios";
import nerd from "../../assets/nerd.png";
const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const APIfunc = async () => {
    const { data } = await axios(API);
    const { results } = data;
    console.log(results);
    setPokemon(results);
  };
  useEffect(() => {
    APIfunc();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "2rem",
        backgroundColor: "yellow",
        flexWrap: "wrap",
        gap: "2rem",
        paddingLeft: "6rem",
      }}
    >
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "80rem",
          marginBottom: "2rem",
          paddingBottom: "1rem",
          borderBottom: "1px solid #D1D5DB",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <img
            alt="logo"
            src={nerd}
            style={{ width: "2.5rem", height: "2.5rem" }}
          />
          <span style={{ fontSize: "2rem", fontWeight: "bold" }}>GEEKS</span>
        </div>
      </header>

      {pokemon.map((elem) => (
        <PokemonVerstka key={elem.id} pokemon={elem} />
      ))}
    </div>
  );
};

export default Pokemon;
