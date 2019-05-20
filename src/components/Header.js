import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchInput from './SearchInput';

const Header = () => (
    <header>
        <NavLink to="/" exact={true} >Home</NavLink>
        <SearchInput />
    </header>
);

export default Header;