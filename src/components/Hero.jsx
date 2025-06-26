
import React from 'react';
import { Shield } from 'lucide-react';
import IconGrid from './IconGrid';
import Badge from './Badge';

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4 py-8">
      <div className="text-center max-w-4xl mx-auto">
        {/* Icon Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
          <IconGrid />
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
          </div>
          <div className="bg-blue-600 rounded-xl p-3 sm:p-4 shadow-lg">
            <div className="text-white text-lg sm:text-xl font-bold">⚡</div>
          </div>
        </div>

        {/* Main Title */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 px-2">
            <span className="text-slate-800">WEB</span>
            <span className="text-slate-400 mx-2 sm:mx-4">·</span>
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              KRAFTERY
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
