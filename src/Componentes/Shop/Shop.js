import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // const [random, setRandom] = useState([]);


    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const hundelCart = (products) => {
        // console.log( products);
        const newCart = [...cart, products]
        if(newCart.length > 4){
            alert('Only Added Permission for your 4 items')
        } else{
            setCart(newCart);
        }   
    }

    // remove button hundeler
   const removeDetails = () =>{
       setCart([]); 
   }


//    random product 
//    const randomItem = () =>{
//        const randomCart = randomCart[Math.floor(Math.random() * randomCart.length)];
//        setRandom(randomCart);
//       }



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
                <Cart removeDetails={removeDetails} carts={cart}></Cart>

              
          </div>

             
        </div>
    );
};

export default Shop;