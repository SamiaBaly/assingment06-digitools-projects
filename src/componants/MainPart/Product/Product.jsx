import React, { useState } from 'react';
import FeatureList from './FeatureList';
import { Check, TurkishLira } from 'lucide-react';
import { toast } from 'react-toastify';

const Product = ({ product, carts, setCarts }) => {
  const { name, description, price, period, tag, icon, features } = product;
  const badgeColor =
    tag.toLowerCase() === 'new'
      ? 'badge-success'
      : tag === 'popular'
        ? 'badge-primary'
        : tag === 'best seller'
          ? 'badge-warning'
          : '';

  const [selected, setSelected] = useState(false);

  const handleSelected = () => {
const findProducts = carts.find(find => find.name === product.name);
     if (findProducts) {
       
      toast.warning('this card already added');
       return;
     } else {
      toast.success('Add to cart succesfully');
       setCarts([...carts, product]);
     }
    

    setSelected(true);

    
    
  
       
    
  };

  return (
    <div className="card bg-base-100 shadow-sm p-4 bg-base-200 space-y-4">
      <div className="text-end">
        <button className={`badge badge-soft ${badgeColor}`}>{tag}</button>
      </div>
      <div className="w-[70px] border flex justify-center rounded-full p-4">
        <img className="w-[60px]" src={icon} alt="" />
      </div>
      <h2 className="text-3xl font-bold">{name} </h2>
      <p className="text-[16px] text-[#627382]">{description}</p>
      <div className="flex items-end gap-1">
        <p className="text-3xl font-bold">${price}</p>
        <p>/{period}</p>
      </div>
      <div>
        {features.map((feature, index) => (
          <FeatureList key={index} feature={feature}></FeatureList>
        ))}
      </div>
      <button
        onClick={handleSelected}
        className={`btn  btn-block ${selected === true ? 'bg-success' : 'bg-gradient'} text-white rounded-4xl`}
      >
        {selected === true ? (
          <>
            <Check />
            add to cart successfully
          </>
        ) : (
          'Buy Now'
        )}
      </button>
    </div>
  );
};

export default Product;