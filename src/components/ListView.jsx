import {useEffect,useState} from 'react';
import axios from 'redaxios'
import PokemonItemList from './UI-Components/PokemonItemList.component';

const ListView = () => {
    const [pokemons, setPokemons] = useState([]);
    useEffect(()=>{
        axios.get({
            url:`https://pokeapi.co/api/v2/pokemon?limit=200&offset=0`,
        }).then(response => { setPokemons(response.data.results)})
    },[]);

    return (
        <div className='flex items-center justify-center'>
            <div className='flex items-start flex-col space-y-4 mt-5'>
                    {
                        pokemons?.map((pokemon,index)=>(
                            <PokemonItemList key={index} props={pokemon}/>
                        ))
                    }
            </div>
        </div>
    );
};

export default ListView;