import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <div className='nav'>
            <Link className='logo' to='/'>My Gym</Link>
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/explore">Explore</Link>
            <Link className='link' to="/plans">Plans</Link>
            <Link className='link' to="/join">Join</Link>   
        </div>
    )
}

export default Navbar;
