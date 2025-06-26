
import React from 'react';
import { Shield } from 'lucide-react';
import IconGrid from './IconGrid';
import Badge from './Badge';

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4 py-8">
      <div className="text-center max-w-6xl mx-auto">
        {/* Icon Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
          <IconGrid />
          <div className="relative">
            <div className="bg-slate-800 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl border border-slate-700">
              <Shield 
                size={60} 
                className="text-blue-400 mx-auto animate-pulse sm:w-16 sm:h-16 lg:w-20 lg:h-20"
                strokeWidth={1.5}
              />
              <div className="absolute -top-3 -right-3 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-blue-500 rounded-full animate-ping"></div>
              <div className="absolute -bottom-3 -left-3 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 bg-cyan-400 rounded-full"></div>
            </div>
          </div>
          <div className="bg-blue-600 rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <div className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold">⚡</div>
          </div>
        </div>

        {/* Main Title */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 px-2">
            <span className="text-slate-800">WEB</span>
            <span className="text-slate-400 mx-3 sm:mx-5 lg:mx-6">·</span>
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              KRAFTERY
            </span>
          </h1>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 lg:gap-6 px-4">
          <Badge variant="dark" text="SECURE" />
          <Badge variant="primary" text="ADVANCED" />
          <Badge variant="light" text="FUTURE" />
        </div>

        {/* Subtle Animation Lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-20 sm:w-40 lg:w-48 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-16 sm:w-32 lg:w-40 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent animate-pulse delay-1000"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
