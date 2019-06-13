import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchInput from './SearchInput';

const Header = () => (
    <header>
        <div className="header__top">
            <h1 className="header__logo">TheMovieDB</h1>

        </div>
        <div className="header__bottom">
            <div className="header__links-container">
                <NavLink
                    to="/"
                    className="header__link"
                    activeClassName="header__link--active"
                    exact={true}
                >
                    Popular
                </NavLink>
                <NavLink
                    to="/upcoming"
                    className="header__link"
                    activeClassName="header__link--active"
                >
                    Upcoming
                </NavLink>
                <NavLink
                    to="/top-rated"
                    className="header__link"
                    activeClassName="header__link--active"
                >
                    Top Rated
                </NavLink>
            </div>
            <SearchInput />
        </div>
    </header>
);

export default Header;