import React from 'react';
import searchIcon from '../../assets/Icons/SearchIcon.png'
const SearchBar = () => {
    return (
        <div className='flex items-center justify-center'>
            <div class="relative w-96">
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-gray-300 focus:border-gray-300 block w-full pl-10 p-2.5 " placeholder="Search " ></input>
                <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <img src={searchIcon} className="w-8 h-8" alt="Search Icon"/>
                </button>
            </div>
        </div>
    );
};

export default SearchBar;