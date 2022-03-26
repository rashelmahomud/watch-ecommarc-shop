import React from 'react';
import Carts from '../Cart-Info/Carts';
import './Cart.css';

const Cart = ({carts}) => {
    
    // console.log(props.cart);

    return (
        <div className='cart'>      
            <h1>Select Watch</h1>
            {
                carts.map(cart => <Carts cart={cart}></Carts>)
            }            
              <button className='choose-btn'>Choose</button><br/>
              <button className='choose-again'>Choose Again</button>
            
        </div>
    );
};

export default Cart;