import { User } from 'lucide-react';
import React from 'react';
import userImg from "../../assets/user.png"
import boxImg from "../../assets/package.png"
import rocketImg from "../../assets/rocket.png"

const GetStarted = () => {
  return (
    <div className="bg-base-200">
      <div className="container mx-auto text-center md:py-[120px] p-6">
        <div>
          <h2 className="text-[32px] md:text-[48px] font-extrabold">Get Started in 3 Steps</h2>
          <p className="text-[#627382] mt-2">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        <div className="my-[40px] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex flex-col justify-center items-center bg-base-100 shadow-md pt-20 relative rounded-2xl">
            <div className="text-center absolute top-5 right-5">
              <button className="w-8 h-8 rounded-full text-white font-bold bg-gradient ">
                01
              </button>
            </div>
            <div>
              <span className="flex justify-center items-center bg-blue-200/20 py-7 rounded-full w-30 mx-auto mb-3">
                <img src={userImg} alt="" />
              </span>
              <h2 className="text-2xl font-bold">Create Account</h2>
              <p className="text-[12px] text-gray-400 mt-2 mb-20">
                Sign up for free in seconds. No credit card <br /> required to
                get started.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-base-100 shadow-md pt-20 relative rounded-2xl">
            <div className="text-center absolute top-5 right-5">
              <button className="w-8 h-8 rounded-full text-white font-bold bg-gradient ">
                02
              </button>
            </div>
            <div>
              <span className="flex justify-center items-center bg-blue-200/20 py-7 rounded-full w-30 mx-auto mb-3">
                <img src={boxImg} alt="" />
              </span>
              <h2 className="text-2xl font-bold">Choose Products</h2>
              <p className="text-[12px] text-gray-400 mt-2 mb-20">
                Browse our catalog and select the toolsthat fit your needs.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-base-100 shadow-md pt-20 relative rounded-2xl">
            <div className="text-center absolute top-5 right-5">
              <button className="w-8 h-8 rounded-full text-white font-bold bg-gradient ">
                03
              </button>
            </div>
            <div>
              <span className="flex justify-center items-center bg-blue-200/20 py-7 rounded-full w-30 mx-auto mb-3">
                <img src={rocketImg} alt="" />
              </span>
              <h2 className="text-2xl font-bold">Start Creating</h2>
              <p className="text-[12px] text-gray-400 mt-2 mb-20">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;