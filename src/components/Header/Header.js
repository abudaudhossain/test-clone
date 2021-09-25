import React from 'react';
import './header.css'
import logo from "../../logo.png"

const Header = () => {
    return (
        <header>
            <h1>Top Universities In The World</h1>
            <p>Delivering courses predominantly in a traditional, face-to-face, non-distance education format</p>
            <img src={logo} alt="logoimg" />
        </header>
    );
};

export default Header;