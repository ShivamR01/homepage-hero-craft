
import React from 'react';

const Badge = ({ variant, text }) => {
  const baseClasses = "px-6 py-2 rounded-full font-semibold text-sm tracking-wider transition-all duration-300 hover:scale-105 backdrop-blur-sm";
  
  const variantClasses = {
    dark: "bg-slate-800/80 text-slate-100 hover:bg-slate-700/80 border border-slate-600/30",
    primary: "bg-blue-600/80 text-white hover:bg-blue-500/80 shadow-lg border border-blue-400/20",
    light: "bg-slate-600/50 text-slate-200 hover:bg-slate-500/60 border border-slate-400/20"
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]}`}>
      {text}
    </span>
  );
};

export default Badge;
