import React from 'react';
import "./UnCart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket , faTimes} from '@fortawesome/free-solid-svg-icons'

const UnCart = () => {
    return (
        <div>
            <div className="addCart">
                <h3>Total Select: <span>4</span></h3>
                <h3>Total Tuition: <span> $60000</span></h3>
                <button> <FontAwesomeIcon icon={faShoppingBasket}/> Buy Now</button>
            </div>
            <ul>
                <li>add item <span><FontAwesomeIcon icon={faTimes}/></span></li>
            </ul>
        </div>

    );
};

export default UnCart;