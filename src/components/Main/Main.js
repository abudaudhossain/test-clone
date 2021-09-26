import React, { useEffect, useState } from 'react';
import "./Main.css"
import Navbar from '../Navbar/Navbar';
import UnCart from '../UnCart/UnCart';
import Universite from '../Universitie/Universite';

const Main = () => {
    const [universites, setUniversites] = useState([]);
    const [selectedItems, setSelectedItem] = useState([])

    useEffect(() => {
        // load data 
        fetch("./output.JSON").then(res => res.json()).then(data => setUniversites(data));
    }, []);

    /* =============================
     add cart hendle function 
    ============================== */
    const handleAddToCart = (id) => {
        const selectedItem = universites.find(item => item.id === id);
        if (selectedItems.indexOf(selectedItem) === -1) {
            const newItemsArray = [...selectedItems, selectedItem]
            setSelectedItem(newItemsArray);
        }

    }

    /*===============================
     Remove select item form Cart
     ==============================  */
    const hendleRemoveItem = (id) => {
        const remaining = selectedItems.filter(item => item.id !== id);
        setSelectedItem(remaining);
    }

    /* ====================
     reset select item 
    ===================== */
    const HeandleBuyItem = () => {
        setSelectedItem([]);
    }



    return (
        <main>
            <Navbar></Navbar>
            <div className="shop">
                <div className="universites">
                    {
                        // display ui all universite information
                        universites.map(universite => <Universite
                            key={universite.id}
                            universite={universite}
                            handleAddToCart={handleAddToCart}></Universite>)
                    }
                </div>

                <UnCart
                    selectedItems={selectedItems}
                    hendleRemoveItem={hendleRemoveItem}
                    HeandleBuyItem={HeandleBuyItem}></UnCart>
            </div>
        </main>
    );
};

export default Main;