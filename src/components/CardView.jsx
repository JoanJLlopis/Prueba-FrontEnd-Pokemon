import React, { useEffect, useState } from 'react';
import axios from 'redaxios';
import PokemonCard from './UI-Components/PokemonCard.component';

const CardView = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(()=>{
        axios.get({
            url:`https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`,
        }).then(response => { setPokemons(response.data.results)})
    },[]);

    return (
        <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 grid-rows-1">
            {
                pokemons?.map((pokemon)=>(
                    <PokemonCard key={pokemon.id} props={pokemon}/>
                ))
            }
        </div>

    );
};

export default CardView;