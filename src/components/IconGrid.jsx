
import React from 'react';

const IconGrid = () => {
  return (
    <div className="bg-slate-800 rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
      <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
        <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-blue-400 rounded-sm"></div>
        <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-slate-600 rounded-sm"></div>
        <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-slate-600 rounded-sm"></div>
        <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-blue-400 rounded-sm"></div>
      </div>
    </div>
  );
};

export default IconGrid;
