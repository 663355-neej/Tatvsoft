import React from 'react';
import { NavLink } from 'react-router-dom';
const Menu = () => {
    return (
        <>
            <NavLink to="/">Home</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink to="/about">About</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink to="/contact">Contact</NavLink>
        </>
    )
}
export default Menu;