import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Personajes() {
  const { name, url } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPokemonDetails(data));
  }, [url]);

  return (
    <div>
      <h1>Detalles del Pokémon</h1>
      {pokemonDetails ? (
        <div>
          <p>Nombre: {name}</p>
          <p>URL: {url}</p>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetails.id}.png`}
            alt={name}
          />
        
        </div>
      ) : (
        <p>Cargando...⌛️</p>
      )}
    </div>
  );
}

