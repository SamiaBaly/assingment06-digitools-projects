import React from 'react';
import bannerImg from "../../assets/banner.png"
import baseImg from "../../assets/base.png"
import { Play } from 'lucide-react';

const Banner = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center container mx-auto py-[85px] gap-[60px]">
        <div className=" flex flex-col justify-center items-left px-6">
          <div className="flex gap-2 bg-blue-200 rounded-2xl py-2 px-4 md:px-2 items-center w-[350px] font-bold">
            <img src={baseImg} alt="" />
            <p className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              New: AI-Powered Tools Available
            </p>
          </div>
          <h1 className="text-[35px] md:text-[40px] lg:text-[72px] font-extrabold my-[16px] md:text-left">
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p className="text-[#627382] text-[18px] mb-[32px] text-left text-center md:text-left">
            Access premium AI tools, design assets, templates, and productivity
            software—all <br /> in one place. Start creating faster today. Explore
            Products
          </p>
          <div className="flex sm:flex-col md:flex-row lg:flex-row gap-2">
            <button className="bg-gradient gap-2 px-4 py-2 rounded-2xl text-white cursor-pointer hover:scale-101">
              Explore Products
            </button>
            <button className=" border flex gap-2 px-4 py-2 rounded-2xl cursor-pointer hover:scale-101 ">
              <Play />
              <p className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent ">
                Watch Demo
              </p>
            </button>
          </div>
        </div>
        <div className='px-4 md:px-0 '>
          <img className='w-[400px] md:w-full' src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;