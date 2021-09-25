import React from 'react';
import "./UnCart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket , faTimes} from '@fortawesome/free-solid-svg-icons'

const UnCart = (props) => {

    const totolTuitionRange = props.selectedItems.reduce((previous, current) => previous + current.tuitionRange, 0);
    return (
        <div>
            <div className="addCart">
                <h3>Total Select: <span>{props.selectedItems.length}</span></h3>
                <h3>Total Tuition: <span> ${totolTuitionRange}</span></h3>
                <button> <FontAwesomeIcon icon={faShoppingBasket}/> Buy Now</button>
            </div>
            <ul>
               {
                   props.selectedItems.map(item =>  <li key ={item.name}>{item.name} <span><FontAwesomeIcon icon={faTimes}/></span></li>)
               }
            </ul>
        </div>

    );
};

export default UnCart;