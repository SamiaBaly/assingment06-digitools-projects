import { Check } from 'lucide-react';
import React from 'react';

const FeatureList = ({ feature }) => {
  return (
    <div className="">
      <p className="flex gap-2 text-[#627382]">
        <Check />
        {feature}
      </p>
    </div>
  );
};

export default FeatureList;