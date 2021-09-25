import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
           <div>
           <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/more">More</a>
           </div>
           <div>
               <input type="text" name="" id="" placeholder ="Search Universities ..."/>
           </div>
        </nav>
    );
};

export default Navbar;