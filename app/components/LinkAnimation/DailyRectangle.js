import React from 'react';

const DailyRectangle = () => {
  return (
    <div className="flex justify-center items-center bg-white rounded-3xl h-28 w-28 md:w-32 md:h-32 dailyRectangle">
      <h1 className="text-black font-bold text-2xl pb-4">Daily<span className='text-dailycolor font-bold text-5xl'>.</span></h1>
    </div>
  );
};

export default DailyRectangle;