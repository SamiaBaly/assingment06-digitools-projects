import React from 'react';
import bannerImg from "../../assets/banner.png"
import baseImg from "../../assets/base.png"
import { Play } from 'lucide-react';

const Banner = () => {
  return (
    <div>
      <div className="flex justify-between items-center container mx-auto py-[85px] gap-[60px]">
        <div className="">
          <div className="flex gap-2 bg-blue-200 rounded-2xl py-2 px-2 items-center w-[300px] font-bold">
            <img src={baseImg} alt="" />
            <p className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              New: AI-Powered Tools Available
            </p>
          </div>
          <h1 className="sm:text-[30px] md:text-[50px] lg:text-[72px] font-extrabold my-[16px]">
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p className="text-[#627382] text-[18px] mb-[32px]">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
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
        <div>
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;