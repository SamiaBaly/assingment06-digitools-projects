import React from 'react';
import Product from '../Product/Product';

const AvailableProducts = ({ products }) => {
  console.log(products);
  return (
    <div>
      <div>
        {
          products.map((product, ind)=>{
            return <Product key={ind} product={product}></Product>;
          })
          
        }
      </div>
    </div>
  );
};

export default AvailableProducts;