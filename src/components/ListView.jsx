import {useEffect,useState} from 'react';
import axios from 'redaxios'
import PokemonItemList from './UI-Components/PokemonItemList.component';

const ListView = () => {
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
            <div className='flex items-center justify-between mr-80 ml-80'>
                <button onClick={ ()=> previousPage()} className='text-lg underline decoration-2'>Previous</button>
                <button onClick={ ()=> nextPage()} className='text-lg underline decoration-2'>Next</button>
            </div>

            <div className='flex items-center justify-center flex-col space-y-2 mt-5'>
                {
                    pokemons?.map((pokemon,index)=>(
                            <PokemonItemList key={index} props={pokemon}/>
                    )).slice(currentPage,limit)
                }
            </div>
        </div>
    );
};

export default ListView;