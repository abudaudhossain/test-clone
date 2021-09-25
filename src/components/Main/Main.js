import React from 'react';
import "./Main.css"
import Navbar from '../Navbar/Navbar';
import UnCart from '../UnCart/UnCart';
import Universite from '../Universitie/Universite';

const Main = () => {
    return (
        <main>
            <Navbar></Navbar>
            <div className="shop">
                <div className = "universites">
                <Universite></Universite>
                <Universite></Universite>
                <Universite></Universite>
                <Universite></Universite>
                <Universite></Universite>
                <Universite></Universite>
                </div>
                
                <UnCart></UnCart>
            </div>
        </main>
    );
};

export default Main;