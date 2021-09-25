import React, {useEffect, useState } from 'react';
import "./Main.css"
import Navbar from '../Navbar/Navbar';
import UnCart from '../UnCart/UnCart';
import Universite from '../Universitie/Universite';

const Main = () => {
    const [universites, setUniversites] = useState([]);
    const [selectedItems, setSelectedItem] = useState([])

    useEffect(() =>{
        // load data 
        fetch("./output.JSON").then(res=> res.json()).then(data => setUniversites(data));
    } ,[]);

    // add cart hendle function 
    const handleAddToCart = (id) =>{
        const selectedItem = universites.find(item => item.id === id);
        if(selectedItems.indexOf(selectedItem) === -1){
            const newItemsArray = [...selectedItems, selectedItem]
            setSelectedItem(newItemsArray);
        }
       
    }

    return (
        <main>
            <Navbar></Navbar>
            <div className="shop">
                <div className = "universites">
                    {
                        universites.map(universite => <Universite key ={universite.id} universite = {universite} handleAddToCart = {handleAddToCart}></Universite>)
                    }
                </div>
                
                <UnCart selectedItems ={selectedItems}></UnCart>
            </div>
        </main>
    );
};

export default Main;