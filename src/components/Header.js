import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => (
    <header>
        <NavLink to="/" exact={true} >Home</NavLink>
        <NavLink to="/search" >Search</NavLink>
    </header>
);

export default Header;