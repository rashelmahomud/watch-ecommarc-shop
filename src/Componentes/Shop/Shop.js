import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    return (
        <div className='shops'>

          <div className='shop'>
          {
                 products.map(product => <Product 
                    key={product.id} 
                    product={product}  
                 ></Product>)
             }

          </div>
          <div className='product-select'>
              <h1>Select Watch</h1>
          </div>

             
        </div>
    );
};

export default Shop;