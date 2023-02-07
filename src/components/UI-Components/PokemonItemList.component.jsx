
import { useEffect, useState } from 'react';
import axios from 'redaxios';
import TypeTag from './TypeTag.component';

const PokemonItemList = ({props}) => {
    const [pokemon, setPokemon] = useState([])

    useEffect(()=>{
        axios.get({
            url:props.url,
        }).then(response => { setPokemon(response.data)})
    },[])

    return (
        <div className='flex items-center space-x-5 border-t-2 border-b-2 border-gray-300'>
            <div className='h-12 w-12'>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}/>
            </div>
            <div className='flex justify-between space-x-5'>
                <p className="text-lg font-semibold text-slate-500"> {pokemon.name?.charAt(0).toUpperCase() + pokemon.name?.slice(1)} </p>
                <p className="text-lg font-semibold text-slate-500"> {`Nº ${pokemon.id}`} </p>
                <div className='flex items-center justify-center'>
                                {
                                    pokemon.types?.map((pokemonType)=>(
                                        <TypeTag type={pokemonType.type.name}/>
                                    ))
                                }
                </div>
            </div>
        </div>
    );
};

export default PokemonItemList;