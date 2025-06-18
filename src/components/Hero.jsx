
import React from 'react';
import { Shield } from 'lucide-react';
import IconGrid from './IconGrid';
import Badge from './Badge';

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Icon Section */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <IconGrid />
          <div className="relative">
            <div className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-600/30">
              <Shield 
                size={48} 
                className="text-blue-300 mx-auto animate-pulse"
                strokeWidth={1.5}
              />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-cyan-300 rounded-full"></div>
            </div>
          </div>
          <div className="bg-blue-500/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-blue-400/20">
            <div className="text-white text-xl font-bold">⚡</div>
          </div>
        </div>

        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl font-bold mb-4">
            <span className="text-slate-100">WEB</span>
            <span className="text-slate-400 mx-4">·</span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              KRAFTERY
            </span>
          </h1>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Badge variant="dark" text="SECURE" />
          <Badge variant="primary" text="ADVANCED" />
          <Badge variant="light" text="FUTURE" />
        </div>

        {/* Subtle Animation Lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-pulse delay-1000"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
