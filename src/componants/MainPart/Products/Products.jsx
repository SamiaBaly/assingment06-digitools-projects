import React, { use, useState } from 'react';
import AvailableProducts from '../AvailableProducts/AvailableProducts';
import SelectedProducts from '../SelectedProducts/SelectedProducts';

const Products = ({ productPromise, carts, setCarts }) => {

  const products=use(productPromise)
  console.log(productPromise);


  const [toggle, setToggle] = useState(true);
  


  return (
    <div className="py-[120px]">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <div>
            <h2 className="text-[48px] font-extrabold">
              Premium Digital Tools
            </h2>
            <p className="text-[#627382] mt-2">
              Choose from our curated collection of premium digital products
              designed <br /> to boost your productivity and creativity.
            </p>
          </div>
          <div className="bg-base-200 rounded-4xl inline-block  my-4  shadow-sm">
            <button
              onClick={() => setToggle(true)}
              className={`btn rounded-4xl text-[16px] font-bold ${toggle === true ? 'bg-gradient text-white' : ''}`}
            >
              Products
            </button>
            <button
              onClick={() => setToggle(false)}
              className={`btn rounded-4xl text-[16px] font-bold ${toggle === false ? 'bg-gradient text-white' : ''}`}
            >
              Cart ({carts.length})
            </button>
          </div>
        </div>

        {/* fetchpart */}

        <div>
          {toggle === true ? (
            <AvailableProducts
              products={products}
              carts={carts}
              setCarts={setCarts}
            ></AvailableProducts>
          ) : (
            <SelectedProducts carts={carts} setCarts={setCarts}></SelectedProducts>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;