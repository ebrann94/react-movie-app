import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchInput from './SearchInput';

const Header = () => (
    <header>
        <h1 className="header__logo">TheMovieDB</h1>
        <nav>
            <div className="header__section">
                <h3>Movies</h3>
            </div>
            <div className="header__links-container">
                <NavLink
                to="/"
                className="header__link"
                activeClassName="header__link--active"
                exact={true}
            >
                <span>Popular</span>
            </NavLink>
                <NavLink
                    to="/upcoming"
                    className="header__link"
                    activeClassName="header__link--active"
                >
                    <span>Upcoming</span>
                </NavLink>
                <NavLink
                    to="/top-rated"
                    className="header__link"
                    activeClassName="header__link--active"
                >
                    Top Rated
                </NavLink>
            </div>
        </nav>
        <nav>
            <div className="header__section">
                <h3>TV</h3>
            </div>
            <div className="header__links-container">
                <NavLink
                    to="/"
                    className="header__link"
                    activeClassName="header__link--active"
                    exact={true}
                >
                    <span>Popular</span>
                </NavLink>
                <NavLink
                    to="/upcoming"
                    className="header__link"
                    activeClassName="header__link--active"
                >
                    <span>Upcoming</span>
                </NavLink>
                <NavLink
                    to="/top-rated"
                    className="header__link"
                    activeClassName="header__link--active"
                >
                    Top Rated
                </NavLink>
            </div>
        </nav>
        <SearchInput />
    </header>
);

export default Header;