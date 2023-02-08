import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

import searchIcon from '../../assets/Icons/SearchIcon.png'
import listIcon from '../../assets/Icons/listIcon.png'
import cardIcon from '../../assets/Icons/CardIcon.png'

const SearchBar = () => {
    const location = useLocation();
    const [path, setPath] = useState("")

    const getIcon = () => {
        if(path[0] === "list"){
            return cardIcon
        }
        return listIcon
    }

    const getUrl = () => {
        if(path[0] === "list"){
            return "/"
        }
        return "/list"
    }

    useEffect(()=>{
        setPath(location.pathname.split("/").slice(1))
    },[location])

    return (
        <div className='flex items-center justify-center'>
            <div className="relative w-96 mr-4">
                <input type="text" className="bg-gray-50 border border-grey text-gray-900 text-xl rounded-lg focus:ring-gray-300 focus:border-grey block w-full pl-10 p-2.5 " placeholder="Search " ></input>
                <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <img src={searchIcon} className="w-8 h-8" alt="Search Icon"/>
                </button>
            </div>
            <Link to={getUrl()}><img src={getIcon()}/></Link>
        </div>
    );
};

export default SearchBar;