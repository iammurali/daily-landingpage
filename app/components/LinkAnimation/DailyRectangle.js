import React from 'react';

const DailyRectangle = () => {
  return (
    <div className="flex justify-center items-center bg-white rounded-3xl w-32 h-32 dailyRectangle">
      <h1 className="text-black font-bold text-2xl pb-4">Daily<span className='text-dailycolor font-bold text-5xl'>.</span></h1>
    </div>
  );
};

export default DailyRectangle;