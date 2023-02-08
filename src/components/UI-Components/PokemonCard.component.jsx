import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'redaxios';
import StatsBar from './StatsBar.component';
import TypeTag from './TypeTag.component';



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
            url:`https://pokeapi.co/api/v2/pokemon/${props.pokemon_species.name}`,
        }).then(response => { setPokemon(response.data)})
    },[])
    return (
        <div className="flex items-center justify-center mt-10">
            <Link to={`/details/${pokemon.id}`}>
                <div className="h-80 w-52 rounded-3xl bg-gray-200 drop-shadow-lg">
                    <div className="flex flex-col items-center pt-8 space-y-2">
                        <div className="h-20 w-20 rounded-full border-4 border-red-500" >
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}/>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="text-lg font-semibold text-slate-800"> {pokemon.name?.charAt(0).toUpperCase() + pokemon.name?.slice(1)} </p>
                            <div className='flex items-center justify-center px-2'>
                                {
                                    pokemon.types?.map((pokemonType)=>(
                                        <TypeTag type={pokemonType.type.name}/>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    {/* Chart horizontal del Pokemon */}
                    <div className="w-50 flex items-stretch">
                        <StatsBar stats={getPokemonStats()}/>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default PokemonCard;