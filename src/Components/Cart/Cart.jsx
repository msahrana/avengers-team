/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css'

const Cart = ({selectedActors, remaining, totalCost}) => {

    return (
        <div>
            <h2 className='cart-container'>Total Cast : {selectedActors.length}</h2>
            <h4>Total Budget : $40000</h4>
            <h4>Total Cost : {totalCost}</h4>
            <h4>Remaining : {remaining}</h4>
            {
                selectedActors.map(actor =>(
                    <li key={actor.id}>{actor.name}</li>
                ))
            }
        </div>
    );
};

export default Cart;