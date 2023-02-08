import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './UI-Components/Header.component';
import Pagination from './UI-Components/Pagination.component';
import SearchBar from './UI-Components/SearchBar.component';

const MainView = () => {
    return (
        <>
            <Header/>
            <SearchBar/>
            <Outlet/>
{/*             <Pagination/> */}
        </>
    );
};

export default MainView;