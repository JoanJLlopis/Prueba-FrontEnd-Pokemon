import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './UI-Components/Header.component';
import SearchBar from './UI-Components/SearchBar.component';

const MainView = () => {
    return (
        <div>
            <Header/>
            <SearchBar/>
            <Outlet/>
        </div>
    );
};

export default MainView;