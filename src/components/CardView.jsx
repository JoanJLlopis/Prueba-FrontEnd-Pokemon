import React, { useEffect, useState } from 'react';
import axios from 'redaxios';
import PokemonCard from './UI-Components/PokemonCard.component';

const CardView = () => {
    const [pokemons, setPokemons] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [limit, setLimit] = useState(5);

    const nextPage = () =>{
        if(limit < 151) {
            setCurrentPage(currentPage + 5)
            setLimit(limit + 5);
        }
    }

    const previousPage = () =>{
        if(currentPage > 0){
            setCurrentPage(currentPage - 5)
            setLimit(limit - 5);
        }
    }

    useEffect(()=>{
        axios.get({
            url:`https://pokeapi.co/api/v2/pokedex/5/`,
        }).then(response => { setPokemons(response.data.pokemon_entries)})
    },[]);

    return (
            <div>
                <div className='flex items-center justify-between mr-24 ml-24'>
                    <button onClick={ ()=> previousPage()} className='text-lg underline decoration-2'>Previous</button>
                    <button onClick={ ()=> nextPage()} className='text-lg underline decoration-2'>Next</button>
                </div>
                <div className="flex items-center justify-center flex-wrap space-x-5 space-y-5">
                    {
                        pokemons?.map((pokemon,index)=>(
                            
                                <PokemonCard key={index} props={pokemon}/>
                        )).slice(currentPage,limit)
                    }
                </div>
            </div>
    );
};

export default CardView;