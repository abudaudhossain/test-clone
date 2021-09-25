import React from 'react';
import "./universite.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'

const Universites = () => {
    return (
        <div className= "cart">
            <img src="https://www.4icu.org/i/screenshots/6835.jpg" alt="" />
            <h2>University of Michigan</h2>
            <p>Artes, Scientia, Veritas</p>
            <p>Country: Untae sute</p>
            <h4>Tuition Range: $20000</h4>
            <button><FontAwesomeIcon icon={faCartPlus} />Add Cart</button>
        </div>
    );
};

export default Universites;