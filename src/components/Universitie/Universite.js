import React from 'react';
import "./universite.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Universites = (props) => {
    const { id, name, country, motto, image, tuitionRange, rank } = props.universite;
    return (
        <div className="cart">
            <img src={image} alt="" />
            <h2>{name}</h2>
            <h3><span className="title">Rank: </span>{rank}</h3>
            <p><span className="title">Moto:</span>{motto}</p>
            <p><span className="title">Country:</span>{country}</p>
            <h3><span className="title">Tuition Range: </span>${tuitionRange}</h3>
            <button onClick={() => props.handleAddToCart(id)}><FontAwesomeIcon icon={faCartPlus} /> Add Cart</button>
        </div>
    );
};

export default Universites;