import axios from 'redaxios'
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import TypeTag from './UI-Components/TypeTag.component';
import StatsBar from './UI-Components/StatsBar.component';
import Header from './UI-Components/Header.component';

import WeightIcon from '../assets/Icons/weightIcon.png'
import HeightIcon from '../assets/Icons/heightIcon.png'
const DetailView = () => {
    const location = useLocation();
    const id = location.pathname.split("/").slice(1);
    const [pokemonSpecies, setPokemonSpecies] = useState([])
    const [pokemon, setPokemon] = useState([])
    const [weaknessTypes, setWeaknessTypes] = useState([])
    const [evolutionChain, setEvolutionChain] = useState([])

    const getEvolutionChain = (url) => {
        axios.get({
            url:url,
        }).then(response => {
            setEvolutionChain(response.data.chain)
        }) 
    }

    const getAbilityDescription = (url) => {
        axios.get({
            url:url,
        }).then(response => {
            return(response.data.effect_entries[1].short_effect )
        }) 
    }

    const getWeakness = (types) => {
        types?.map((type)=>(
            axios.get({
                url:type.type.url,
            }).then(response => {
                setWeaknessTypes(response.data.damage_relations.double_damage_from)
            }) 
        ))
    }

    const getPokemon = (name)=>{
        axios.get({
            url:`https://pokeapi.co/api/v2/pokemon/${name}`,
        }).then(response => {
            setPokemon(response.data)
            getWeakness(response.data.types)
        })
    }

    const getPokemonStats= () => {
        const pokemonStats = []
        pokemon.stats?.map((stat)=>{
            pokemonStats.push(stat.base_stat)
        })
        return pokemonStats
    }

        useEffect(()=>{
            axios.get({
                url:`https://pokeapi.co/api/v2/pokemon-species/${id[1]}/`,
            })
            .then(response => { 
                setPokemonSpecies(response.data)
                getEvolutionChain(response.data.evolution_chain.url)
                getPokemon(response.data.name)
            })
        },[]);

    return (
        <div>
            <Header/>
                <div className='flex items-center justify-center p-10 space-x-10 -mt-24'>
                    <div className='flex flex-col items-center space-y-1 '>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}/>
                        <p className='text-2xl font-bold'>{pokemon.name?.charAt(0).toUpperCase() + pokemon.name?.slice(1)}</p>
                        <p className='text-xl text-gray-600 font-semibold'>Nº{pokemon.id}</p>
                        <div className='flex items-center justify-center'>
                            {
                                pokemon.types?.map((pokemonType)=>(
                                    <TypeTag type={pokemonType.type.name}/>
                                ))
                            }
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <div>
                            <p className='text-2xl font-bold'>Weakness</p>
                            <div className='flex items-center'>
                                {
                                    weaknessTypes?.map((weakness)=>(
                                        <TypeTag type={weakness.name}/>
                                    ))
                                }
                            </div>
                        </div>
                        <div>
                            <p className='text-2xl font-bold'>Abilities</p>
                                <div>
                                    {
                                        pokemon.abilities?.map((ability)=>(
                                            <div>
                                                <p className='text-lg text-gray-600 font-semibold'>{ability.ability.name?.charAt(0).toUpperCase() + ability.ability.name?.slice(1)}</p>
                                                {getAbilityDescription(ability.ability.url)}
                                            </div>
                                        ))
                                    }
                                </div>
                        </div>
                        <div>
                            <p className='text-2xl font-bold'>Evolution Chain</p>
                                            <div>
                                                <p className='text-lg text-gray-600 font-semibold'>{evolutionChain.species?.name.charAt(0).toUpperCase() + evolutionChain.species?.name.slice(1)}</p>
                                                {
                                                    evolutionChain.evolves_to?.map((evolution)=>(
                                                        <div>
                                                        <p className='text-lg text-gray-600 font-semibold'>{evolution.species?.name.charAt(0).toUpperCase() + evolution.species?.name.slice(1)}</p>
                                                            {
                                                                evolution.evolves_to?.map((evolution2)=>(
                                                                    <p className='text-lg text-gray-600 font-semibold'>{evolution2.species?.name.charAt(0).toUpperCase() + evolution2.species?.name.slice(1)}</p>
                                                                ))
                                                            }
                                                        </div>
                                                    ))
                                                }
                                            </div>
                        </div>
                        <div className='flex items-center justify-start'>
                            <div>
                                <p className='text-2xl font-bold'>Base-Stats</p>
                                <div className="w-50 flex items-stretch">
                                    <StatsBar stats={getPokemonStats()}/>
                                </div>
                            </div>
                            <div className='flex flex-col items-center h-44'>
                                <p className='text-2xl font-bold'>About</p>
                                <div className='flex items-center space-x-4'>
                                    <div className='flex flex-col items-center'>
                                        <div className='flex items-center'>
                                            <img src={WeightIcon}/>
                                            <p>{pokemon.weight/10} kg</p>
                                        </div>
                                        <p>Weight</p>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <div className='flex items-center'>
                                            <img src={HeightIcon}/>
                                            <p>{pokemon.height/10} m</p>
                                        </div>
                                        <p>Height</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className='flex justify-end mr-10 mb-20'>
                <Link to="/">
                    <div className=' flex items-center justify-center h-8 w-20 bg-red-500  rounded-lg'>
                        <p className='text-white'>Back</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default DetailView;