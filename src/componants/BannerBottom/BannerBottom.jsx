import React from 'react';

const BannerBottom = () => {
  return (
    <div className='bg-gradient'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center py-[60px]'>
        <div className='text-center'>
          <h1 className='text-[35px] md:text-[60px] font-extrabold text-white'>50K+</h1>
          <p className='text-white'>Active users</p>
        </div>
        <div className='md:w-px h-20 bg-white/40'></div>
        <div className='text-center'>
          <h1 className='text-[35px] md:text-[60px] font-extrabold text-white'>200K+</h1>
          <p className='text-white'>Premium Tools</p>
        </div>
        <div className='md:w-px h-20 bg-white/40'></div>
        <div className='text-center'>
          <h1 className='text-[35px] md:text-[60px] font-extrabold text-white'>4.9</h1>
          <p className='text-white'>Rating</p>
        </div>
        
      </div>
    </div>
  );
};

export default BannerBottom;