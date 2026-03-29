import React from 'react';

const SelectedProducts = ({ carts, setCarts }) => {

  const totalPrice =carts.reduce((sum, item)=>sum + item.price,0);
  console.log(totalPrice);

  
  const handleRemove=(cart)=>{
    const filterCarts=carts.filter(removeCart=>removeCart.name!=cart.name)
    setCarts(filterCarts);


    
  }
  return (
    <div className='bg-base-300 p-5 rounded-2xl'>
      <h2 className="text-4xl font-bold">Your Cart</h2>
      <div>
        <div>
          {carts.map((cart, inde) => (
            <div key={inde} className="flex justify-between items-center shadow-sm p-4 rounded-2xl my-4 bg-base-100">
              <div className="flex gap-4">
                <div className='w-12 h-12 border p-2 rounded-full'>
                  <img className='w-8 h-8' src={cart.icon} alt="" />
                </div>
                <div>
                  <h2 className='font-bold text-xl text-gray-500'>{cart.name}</h2>
                  <p>${cart.price}</p>
                </div>
              </div>
              <button onClick={()=>handleRemove(cart)} className="text-red-500 font-bold btn btn-soft btn-warning">
                Remove
              </button>
            </div>
          ))}
        </div>

        <div>
          <div className="bg-base-200 flex justify-between items-center text-2xl font-bold p-3 my-3 rounded-2xl">
            <h2>Total</h2>
            <h2>${totalPrice}</h2>
          </div>
          <button className="bg-gradient btn btn-block text-white text-xl rounded-4xl">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedProducts;