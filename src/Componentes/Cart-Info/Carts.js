import React from 'react';
import './Carts.css';

const Carts = ({cart}) => {
    return (
        <div className='carts'>

        <img className='cart-img' src={cart.picture} alt="" />
        <h3>{cart.name}</h3>
            
        </div>
    );
};

export default Carts;