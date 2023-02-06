import React, { useEffect, useState } from 'react';
import axios from 'redaxios';
import StatsBar from './StatsBar.component';



const PokemonCard = ({props}) => {
    const [pokemon, setPokemon] = useState([])

    const getPokemonStats= () => {
        const pokemonStats = []
        pokemon.stats?.map((stat)=>{
            pokemonStats.push(stat.base_stat)
        })
        return pokemonStats
    }
    useEffect(()=>{
        axios.get({
            url:props.url,
        }).then(response => { setPokemon(response.data)})
    },[])
    return (
        <div className="flex items-center justify-center mt-10">
            <div className="h-80 w-52 rounded-3xl bg-gray-200 drop-shadow-lg">
                <div className="flex flex-col items-center pt-8 space-y-2">
                    <div className="h-20 w-20 rounded-full border-4 border-amber-600" >
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}/>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-lg font-semibold text-slate-800"> {pokemon.name?.charAt(0).toUpperCase() + pokemon.name?.slice(1)} </p>
                        <div className='flex items-center justify-center'>
                            {
                                pokemon.types?.map((pokemonType)=>(
                                    <p className="text-sm text-slate-800 pr-1"> {pokemonType.type.name?.charAt(0).toUpperCase() + pokemonType.type.name?.slice(1)} </p>
                                ))
                            }
                        </div>
                        
                    </div>
                </div>
                {/* Chart horizontal del Pokemon */}
                <div className="flex items-stretch justify-start w-max-full">
                    <StatsBar stats={getPokemonStats()}/>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;