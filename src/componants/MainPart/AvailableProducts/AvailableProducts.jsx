import React from 'react';
import Product from '../Product/Product';

const AvailableProducts = ({ products, carts, setCarts }) => {
  
  return (
    <div className="">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, ind) => {
          return (
            <Product
              key={ind}
              product={product}
              carts={carts}
              setCarts={setCarts}
            ></Product>
          );
        })}
      </div>
    </div>
  );
};

export default AvailableProducts;