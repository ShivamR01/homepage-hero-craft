
import React from 'react';

const IconGrid = () => {
  return (
    <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-600/30">
      <div className="grid grid-cols-2 gap-2">
        <div className="w-3 h-3 bg-blue-300 rounded-sm"></div>
        <div className="w-3 h-3 bg-slate-500 rounded-sm"></div>
        <div className="w-3 h-3 bg-slate-500 rounded-sm"></div>
        <div className="w-3 h-3 bg-blue-300 rounded-sm"></div>
      </div>
    </div>
  );
};

export default IconGrid;
