import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchInput from './SearchInput';

const Header = () => (
    <header>
        <SearchInput />
        <div>
            <NavLink to="/">Popular Movies</NavLink>
            <NavLink to="/new-releases">New Releases</NavLink>
        </div>
    </header>
);

export default Header;