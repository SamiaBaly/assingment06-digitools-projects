import { Check } from 'lucide-react';
import React from 'react';

const PricingSection = () => {
  return (
    <div>
      <div className="container mx-auto text-center md:py-[120px] p-6">
        <div>
          <h2 className="text-[32px] md:text-[48px] font-extrabold">
            Simple, Transparent Pricing
          </h2>
          <p className="text-[#627382] mt-2">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>
        <div className="my-[40px] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
          <div className="bg-base-200 p-6 rounded-2xl shadow-md ">
            <div className="my-2">
              <h2 className="text-xl font-bold">Starter</h2>
              <p className="text-gray-400">Perfect for getting started</p>
            </div>
            <div className="flex items-end my-8">
              <h2 className="text-3xl font-bold">$0</h2>
              <p className="text-gray-400">/Month</p>
            </div>
            <ul className="my-2">
              <li className="flex gap-2 my-1">
                <Check className="text-green-500"></Check>Access to 10 free
                tools
              </li>
              <li className="flex gap-2 my-1">
                <Check className="text-green-500"></Check>Basic templates
              </li>
              <li className="flex gap-2 my-1">
                <Check className="text-green-500"></Check>Community support
              </li>
              <li className="flex gap-2 my-1">
                <Check className="text-green-500"></Check>1 project per month
              </li>
            </ul>
            <button className="bg-gradient w-full text-white py-2 rounded-2xl font-bold">
              Get Started Free
            </button>
          </div>

          <div className="bg-base-200 p-6 rounded-2xl shadow-md text-white bg-gradient relative">
            <div className="badge badge-soft badge-warning absolute -top-3 left-[35%] md:left-35 lg:left-48 bg-yellow-200">Most Popular</div>
            <div className="my-2">
              <h2 className="text-xl font-bold">Pro</h2>
              <p className="text-gray-400">Best for professionals</p>
            </div>
            <div className="flex items-end my-8">
              <h2 className="text-3xl font-bold">$29</h2>
              <p className="text-gray-400">/Month</p>
            </div>
            <ul className="my-2">
              <li className="flex gap-2 my-1">
                <Check></Check>Access to all premium tools
              </li>
              <li className="flex gap-2 my-1">
                <Check></Check>Unlimited templates
              </li>
              <li className="flex gap-2 my-1">
                <Check></Check>Priority support
              </li>
              <li className="flex gap-2 my-1">
                <Check></Check>Unlimited projects
              </li>
              <li className="flex gap-2 my-1">
                <Check></Check>Cloud sync
              </li>
              <li className="flex gap-2 my-1">
                <Check></Check>Advanced analytics
              </li>
            </ul>
            <button className="bg-white w-full  py-2 rounded-2xl font-bold">
              <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                Get Started Free
              </span>
            </button>
          </div>

          <div className="bg-base-200 p-6 rounded-2xl shadow-md">
            <div className="my-2">
              <h2 className="text-xl font-bold">Enterprise</h2>
              <p className="text-gray-400">For teams and businesses</p>
            </div>
            <div className="flex items-end my-8">
              <h2 className="text-3xl font-bold">$99</h2>
              <p className="text-gray-400">/Month</p>
            </div>
            <ul className="my-2">
              <li className="flex gap-2 my-1">
                <Check className="text-green-500"></Check>Everything in Pro
              </li>
              <li className="flex gap-2 my-1">
                <Check className="text-green-500"></Check>Team collaboration
              </li>
              <li className="flex gap-2 my-1">
                <Check className="text-green-500"></Check>Custom integrations
              </li>
              <li className="flex gap-2 my-1">
                <Check className="text-green-500"></Check>Dedicated support
              </li>
              <li className="flex gap-2 my-1">
                <Check className="text-green-500"></Check>SLA guarantee
              </li>
              <li className="flex gap-2 my-1">
                <Check className="text-green-500"></Check>Custom branding
              </li>
            </ul>
            <button className="bg-gradient w-full text-white py-2 rounded-2xl font-bold">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;