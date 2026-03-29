import React from 'react';
import logoImg from "../../assets/logo.png"
import { ShoppingCart } from 'lucide-react';

const NavBar = ({carts}) => {
  return (
    <div className="bg-base-100 shadow-md">
      <div className="flex justify-between items-center container mx-auto py-4">
        <div className="mr-4">
          <img src={logoImg} alt="" />
        </div>
        <div>
          <ul className="flex justify-between items-center gap-4">
            <li>Products</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="flex justify-between items-center">
          <div className="relative ml-4">
            {carts.length === 0 ? (
              ''
            ) : (
              <span className=" px-2 py-1 bg-red-500 text-white rounded-full absolute -top-5 -right-2">
                {carts.length}
              </span>
            )}

            <p className="mr-3 cursor-pointer hover:scale-110">
              <ShoppingCart />
            </p>
          </div>
          <p className="flex gap-2 mx-3">Login</p>
          <button className="bg-gradient px-4 py-2 rounded-3xl text-white font-bold btn">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;