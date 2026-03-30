import React from 'react';

const WorkFlow = () => {
  return (
    <div className="bg-gradient">
      <div className="container mx-auto text-center px-3 py-4 md:py-[120px] text-white">
        <div>
          <h2 className="text-[30px] md:text-[48px] font-extrabold">
            Ready to Transform Your Workflow?
          </h2>
          <p className=" mt-2">
            Join thousands of professionals who are already using Digitools to
            work smarter. <br /> Start your free trial today.
          </p>
        </div>
        <div className='my-3'>
          <button className='bg-white m-2 px-4 py-3 rounded-4xl text-black'>Explore Products</button>
          <button className='text-white m-2 px-4 py-3 rounded-4xl text-black outline'>View Pricing</button>
        </div>
        <div>
          <p>
            14-day free trial • No
            credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;