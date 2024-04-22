import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Pokemones() {
  const [pokemones, setPokemones] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => {
        setPokemones(data.results);
        setSelectedPokemon(data.results[0]); // Establecer el primer Pokémon como seleccionado por defecto
      });
  }, []);

  const irAPersonajes = () => {
       navigate(`/personajes/${(selectedPokemon.name)}/${encodeURIComponent(selectedPokemon.url)}`);
};

  const handleSelectChange = (e) => {
    const selected = pokemones.find((pokemon) => pokemon.name === e.target.value);
    setSelectedPokemon(selected);
  };

  return (
    <div className="mt-5">
      <h1>Selecciona un Pokémon</h1>
      <select value={selectedPokemon.name} onChange={handleSelectChange}>
        {pokemones.map((pokemon, index) => (
          <option key={index} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
      <button onClick={irAPersonajes}>Ver Detalle</button>
    </div>
  );
}
