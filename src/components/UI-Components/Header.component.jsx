import React from 'react';
import MoonIcon from '../../assets/Icons/MoonIcon.png'
import PokemonLogo from '../../assets/Icons/PokemonLogo.png'
import FavoritesIcon from '../../assets/Icons/FavoritesIcon.png'

const Header = () => {
    return (
        <div>
            <div className="bg-red-500 p-2.5 flex items-center justify-between h-84">
                <img src={MoonIcon} className="fas fa-lg fa-arrow-left ml-6 sm:ml-10 md:mr-15 lg:mr-25 xl:mr-35" />
                <img src={FavoritesIcon} className="fas fa-lg fa-arrow-right mr-6 sm:mr-10 md:mr-15 lg:mr-25 xl:mr-35" />
            </div>
            <div className='flex justify-center'>
                <img src={PokemonLogo} alt="Header Logo" className="w-48  sm:w-48 md:w-64 lg:w-70 xl:w-80   -mt-12 sm:-mt-12 md:-mt-16 lg:-mt-16 xl:-mt-20"/> 
            </div>
        </div>

    );
};

export default Header;