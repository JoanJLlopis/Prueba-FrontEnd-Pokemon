import React, { useEffect, useState } from 'react';
import axios from 'redaxios';
import PokemonCard from './UI-Components/PokemonCard.component';

const CardView = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(()=>{
        axios.get({
            url:`https://pokeapi.co/api/v2/pokedex/5/`,
        }).then(response => { setPokemons(response.data.pokemon_entries)})
    },[]);

    return (
        <div className="flex items-center justify-center flex-wrap space-x-5 space-y-5">
            {
                pokemons?.map((pokemon,index)=>(
                    <PokemonCard key={index} props={pokemon}/>
                ))
            }
        </div>

    );
};

export default CardView;