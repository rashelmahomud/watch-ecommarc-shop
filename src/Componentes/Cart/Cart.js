import React from 'react';
import Carts from '../Cart-Info/Carts';
import './Cart.css';

const Cart = ({carts, removeDetails,randomItem}) => {
    // console.log(randomItem)

    return (
        <div className='cart'>      
            <h1>Select Watch</h1>
            {
                carts.map(cart => <Carts cart={cart}></Carts>)
            }   

                  
              <button  className='choose-btn'>Choose 1</button><br/>
              <button onClick={removeDetails} className='choose-again' >Choose Again</button>
                <h4 className='random'>Random:</h4> 
        </div>
    );
};

export default Cart;