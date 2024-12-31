import React from 'react'
import { useState } from 'react'
import { useLoaderData } from "react-router-dom";
import Header from '../components/header'
import PokedexInfo from '../components/PokedexInfo'
import '../styles/App.css'

const getPokemon = async (id) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data_1 = await data.json();
    return data_1;
};

export async function loader({ params }) {
  const pokemon = await getPokemon(params.pokemonId);
  return { pokemon };
}

function Pokedex() {
    const { pokemon } = useLoaderData();
    const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    const types = pokemon.types.map(t => t.type.name);
    const abilities = pokemon.abilities.map(a => a.ability.name);
    const description = `This pokemon has ${abilities.length} abilities: ${abilities}. Also, it has ${pokemon.moves.length} moves.`

    return (
        <>
            <div>
                <Header />
            </div>
            <br></br>
            <br></br>
            <br></br>
            {/* <h1>
                {name}
            </h1> */}
            <PokedexInfo
                number={pokemon.id}
                name={name}
                types={types}
                description={description}
                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                weight={pokemon.weight}
                height={pokemon.height}
            />
        </>
    )
}

export default Pokedex;