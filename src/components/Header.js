import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchInput from './SearchInput';

const Header = () => (
    <header>
        <div className="header__top">
            <h1 className="header__logo">TheMovieDB</h1>
            <SearchInput />
        </div>
        <div className="header__links-container">
            <NavLink to="/" className="header__link">Popular Movies</NavLink>
            <NavLink to="/new-releases" className="header__link">New Releases</NavLink>
        </div>
    </header>
);

export default Header;