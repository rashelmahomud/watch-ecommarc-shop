import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const hundelCart = (products) => {
        console.log( products);
        const newCart = [...cart, products]
        setCart(newCart);
    }

    return (
        <div className='shops'>

          <div className='shop'>
          {
                 products.map(product => <Product 
                    key={product.id} 
                    product={product}
                    hundelCart = {hundelCart}
                 ></Product>)
             }

          </div>
          <div className='product-select'>
              <h1>Select Watch</h1>
              <h3>{cart.length}</h3>
              <button className='choose-btn'>Choose</button><br/>
              <button className='choose-again'>Choose Again</button>
          </div>

             
        </div>
    );
};

export default Shop;