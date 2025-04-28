
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FadeIn, GradientText, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!bgRef.current) return;
    
    const { clientX, clientY } = e;
    const { width, height, left, top } = bgRef.current.getBoundingClientRect();
    
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    
    controls.start({
      x: x * 20,
      y: y * 20,
      transition: { type: 'spring', stiffness: 50, damping: 30 }
    });
  };

  return (
    <section 
      className="relative min-h-[80vh] pt-24 flex items-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Elements */}
      <div ref={bgRef} className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-sole-dark to-sole-navy opacity-80"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        
        {/* Animated Blobs */}
        <motion.div 
          animate={controls}
          className="absolute top-1/4 right-1/4 h-64 w-64 bg-sole-purple opacity-10 rounded-full filter blur-3xl"
        />
        <motion.div 
          animate={controls}
          initial={{ x: 100, y: 100 }}
          className="absolute bottom-1/4 left-1/3 h-80 w-80 bg-sole-teal opacity-10 rounded-full filter blur-3xl"
        />
      </div>
      
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Hero Content */}
        <div>
          <FadeIn y={30} delay={0.2}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 mb-6">
              <span className="h-2 w-2 rounded-full bg-sole-purple"></span>
              Dashboard Analytics 2.0
            </div>
          </FadeIn>
          
          <FadeIn y={30} delay={0.3}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Elevate Your <GradientText text="Sneaker Business" className="font-extrabold" /> Analytics
            </h1>
          </FadeIn>
          
          <FadeIn y={30} delay={0.4}>
            <p className="text-gray-300 text-lg mb-8">
              Transform your data into actionable insights with our cutting-edge analytics platform designed specifically for sneaker resellers and collectors.
            </p>
          </FadeIn>
          
          <FadeIn y={30} delay={0.5}>
            <div className="flex flex-wrap items-center gap-4">
              <Button 
                className="bg-gradient-to-r from-sole-purple to-sole-electric-blue hover:opacity-90 text-white px-6 h-12"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                variant="outline" 
                className="border-white/10 text-white hover:bg-white/5 h-12"
              >
                Learn More
              </Button>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.6} className="mt-12">
            <div className="flex flex-wrap items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-white mb-1">98%</p>
                <p className="text-gray-400 text-sm">Accuracy Rate</p>
              </div>
              <div className="h-10 w-px bg-white/10"></div>
              <div>
                <p className="text-3xl font-bold text-white mb-1">24/7</p>
                <p className="text-gray-400 text-sm">Market Monitoring</p>
              </div>
              <div className="h-10 w-px bg-white/10"></div>
              <div>
                <p className="text-3xl font-bold text-white mb-1">5K+</p>
                <p className="text-gray-400 text-sm">Active Users</p>
              </div>
            </div>
          </FadeIn>
        </div>
        
        {/* Hero Image/Visualization */}
        <FadeIn delay={0.4} className="relative">
          <div className="relative aspect-square max-w-md mx-auto">
            {/* Main Dashboard Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="absolute inset-0 bg-gradient-to-br from-sole-dark-accent to-sole-navy border border-white/10 rounded-xl p-4 shadow-xl z-10 overflow-hidden"
            >
              {/* Dashboard Card Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="h-3 w-24 bg-white/10 rounded-full"></div>
                <div className="flex gap-1">
                  <div className="h-2 w-2 rounded-full bg-sole-purple"></div>
                  <div className="h-2 w-2 rounded-full bg-white/20"></div>
                  <div className="h-2 w-2 rounded-full bg-white/20"></div>
                </div>
              </div>
              
              {/* Dashboard Card Content */}
              <div className="space-y-4">
                {/* Chart */}
                <div className="h-32 bg-white/5 rounded-lg overflow-hidden relative">
                  <div className="absolute bottom-0 left-0 right-0 h-24">
                    {/* Simplified Chart Visual */}
                    <svg width="100%" height="100%" viewBox="0 0 100 24">
                      <defs>
                        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#6E59A5" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#6E59A5" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path 
                        d="M0,24 L0,12 C5,15 10,6 15,7 C20,8 25,4 30,2 C35,0 40,5 45,7 C50,9 55,12 60,10 C65,8 70,2 75,4 C80,6 85,10 90,9 C95,8 100,6 100,6 L100,24 Z" 
                        fill="url(#chartGradient)" 
                      />
                      <path 
                        d="M0,12 C5,15 10,6 15,7 C20,8 25,4 30,2 C35,0 40,5 45,7 C50,9 55,12 60,10 C65,8 70,2 75,4 C80,6 85,10 90,9 C95,8 100,6 100,6" 
                        fill="none" 
                        stroke="#6E59A5" 
                        strokeWidth="0.5" 
                      />
                    </svg>
                  </div>
                </div>
                
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white/5 rounded-md p-2">
                      <div className="h-2 w-12 bg-white/10 rounded-full mb-2"></div>
                      <div className="h-4 w-8 bg-white/20 rounded-md"></div>
                    </div>
                  ))}
                </div>
                
                {/* Data Table */}
                <div className="bg-white/5 rounded-lg p-2">
                  <div className="grid grid-cols-4 gap-2 mb-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-2 w-full bg-white/10 rounded-full"></div>
                    ))}
                  </div>
                  {[1, 2, 3].map((row) => (
                    <div key={row} className="grid grid-cols-4 gap-2 mb-2">
                      {[1, 2, 3, 4].map((col) => (
                        <div key={col} className="h-3 w-full bg-white/5 rounded-full"></div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Decorative Elements */}
            <motion.div 
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 0.7 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="absolute -bottom-6 -right-6 h-32 w-32 bg-sole-purple opacity-20 rounded-full filter blur-xl"
            />
            <motion.div 
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 0.5 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="absolute -top-4 -left-4 h-24 w-24 bg-sole-electric-blue opacity-20 rounded-full filter blur-lg"
            />
            
            {/* Floating Card Elements */}
            <motion.div 
              initial={{ x: 30, y: -20, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute top-0 right-0 transform -translate-y-1/4 translate-x-1/4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 w-36 z-20"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="h-4 w-4 rounded-full bg-sole-purple"></div>
                <div className="h-2 w-16 bg-white/20 rounded-full"></div>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full mb-1.5"></div>
              <div className="h-2 w-3/4 bg-white/10 rounded-full"></div>
            </motion.div>
            
            <motion.div 
              initial={{ x: -30, y: 20, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute bottom-0 left-0 transform translate-y-1/4 -translate-x-1/4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-2 w-32 z-20"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="h-3 w-8 bg-white/20 rounded-full"></div>
                <div className="h-3 w-3 rounded-full bg-sole-electric-blue"></div>
              </div>
              <div className="h-6 w-full bg-white/5 rounded-md mb-2"></div>
              <div className="h-2 w-full bg-white/10 rounded-full"></div>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
