
import React from 'react';

const IconGrid = () => {
  return (
    <div className="bg-slate-800 rounded-xl p-3 sm:p-4 shadow-lg">
      <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-400 rounded-sm"></div>
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-slate-600 rounded-sm"></div>
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-slate-600 rounded-sm"></div>
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-400 rounded-sm"></div>
      </div>
    </div>
  );
};

export default IconGrid;
