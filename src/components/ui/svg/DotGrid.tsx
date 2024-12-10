import React from 'react';

const DotGrid = () => {
  return (
    <svg
      viewBox='0 0 52 24'
      fill='currentColor'
      className='text-blue-gray-100 absolute left-0 top-0 z-0 -ml-20 -mt-8 hidden w-32 sm:block lg:-ml-28 lg:-mt-10 lg:w-32'
    >
      <defs>
        <pattern id='2feffae2-9edf-414e-ab8c-f0e6396a0fc1' x='0' y='0' width='.135' height='.30'>
          <circle cx='1' cy='1' r='.7' />
        </pattern>
      </defs>
      <rect fill='url(#2feffae2-9edf-414e-ab8c-f0e6396a0fc1)' width='52' height='24' />
    </svg>
  );
};

export default DotGrid;
