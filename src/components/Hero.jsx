
import React from 'react';
import { Shield } from 'lucide-react';
import IconGrid from './IconGrid';
import Badge from './Badge';

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4 py-8 relative">
      {/* Dark themed background box */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-5xl h-3/4 bg-slate-900/20 backdrop-blur-sm rounded-3xl border border-slate-200/20"></div>
      </div>
      
      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* Icon Section with blur effect */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="relative">
            <IconGrid />
            {/* Vertical blur overlay for half of the icon grid */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-slate-900/30 backdrop-blur-md rounded-t-xl"></div>
          </div>
          
          <div className="relative">
            <div className="bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-700">
              <Shield 
                size={40} 
                className="text-blue-400 mx-auto animate-pulse sm:w-12 sm:h-12"
                strokeWidth={1.5}
              />
              <div className="absolute -top-2 -right-2 w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full animate-ping"></div>
              <div className="absolute -bottom-2 -left-2 w-2 h-2 sm:w-3 sm:h-3 bg-cyan-400 rounded-full"></div>
            </div>
            {/* Vertical blur overlay for half of the shield */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-slate-900/40 backdrop-blur-md rounded-b-2xl"></div>
          </div>
          
          <div className="bg-blue-600 rounded-xl p-3 sm:p-4 shadow-lg relative">
            <div className="text-white text-lg sm:text-xl font-bold">⚡</div>
            {/* Vertical blur overlay for part of the lightning bolt */}
            <div className="absolute top-0 left-0 w-full h-1/3 bg-slate-900/30 backdrop-blur-sm rounded-t-xl"></div>
          </div>
        </div>

        {/* Main Title with partial blur effect */}
        <div className="mb-6 sm:mb-8 relative">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 px-2">
            <span className="text-slate-800">WEB</span>
            <span className="text-slate-400 mx-2 sm:mx-4">·</span>
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent relative">
              KRAFTERY
              {/* Vertical blur overlay for part of KRAFTERY */}
              <div className="absolute top-0 left-0 w-full h-2/5 bg-slate-900/25 backdrop-blur-sm"></div>
            </span>
          </h1>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-4">
          <Badge variant="dark" text="SECURE" />
          <Badge variant="primary" text="ADVANCED" />
          <Badge variant="light" text="FUTURE" />
        </div>

        {/* Subtle Animation Lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-16 sm:w-32 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-12 sm:w-24 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent animate-pulse delay-1000"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
