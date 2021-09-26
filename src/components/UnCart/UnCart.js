import React from 'react';
import "./UnCart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faTimes, faUniversity } from '@fortawesome/free-solid-svg-icons'

const UnCart = (props) => {
    //  calculat totolTuitionRange
    const totolTuitionRange = props.selectedItems.reduce((previous, current) => previous + current.tuitionRange, 0);
    return (
        <div>
            <div className="addCart">
                <h3><span><FontAwesomeIcon icon={faUniversity} /> Total Select:</span> <span>{props.selectedItems.length}</span></h3>
                <h3>Total Tuition: <span> ${totolTuitionRange}</span></h3>
                <button onClick = {props.HeandleBuyItem}> <FontAwesomeIcon icon={faShoppingBasket} /> Buy Now</button>
            </div>
            <ul>
                {
                    props.selectedItems.map(item => <li key={item.name} onClick={() => props.hendleRemoveItem(item.id)}>{item.name} <span><FontAwesomeIcon icon={faTimes} /></span></li>)
                }
            </ul>
        </div>

    );
};

export default UnCart;