
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'redaxios';
import TypeTag from './TypeTag.component';

const PokemonItemList = ({props}) => {
    const [pokemon, setPokemon] = useState([])

    useEffect(()=>{
        axios.get({
            url:`https://pokeapi.co/api/v2/pokemon/${props.pokemon_species.name}`,
        }).then(response => { setPokemon(response.data)})
    },[])

    return (
        <Link className='flex items-center justify-center space-x-5 w-1/2' to={`/details/${pokemon.id}`}>
        <div className='flex items-center space-x-5 border-t-2 w-full border-gray-300'>
                <div className='h-12 w-12'>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}/>
                </div>
                <p className="text-lg font-semibold text-slate-500 flex-1"> {pokemon.name?.charAt(0).toUpperCase() + pokemon.name?.slice(1)} </p>
                <p className="text-lg font-semibold text-slate-500 flex-1"> {`Nº ${pokemon.id}`} </p>
                <div className='flex items-center justify-end flex-col  mt-4 space-y-1 w-1/'>
                                    {
                                        pokemon.types?.map((pokemonType)=>(
                                            <TypeTag type={pokemonType.type.name}/>
                                        ))
                                    }
                </div>
        </div>
        </Link>
    );
};

export default PokemonItemList;