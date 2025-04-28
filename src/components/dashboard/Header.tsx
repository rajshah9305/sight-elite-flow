
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FadeIn, HoverScale } from '@/components/ui/motion';
import { Search, BellIcon, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navItems = [
    { name: 'Dashboard', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Products', href: '#' },
    { name: 'Settings', href: '#' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-sole-dark/80 backdrop-blur-lg border-b border-white/5">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <FadeIn className="flex items-center gap-1" duration={0.6} delay={0.1}>
          <div className="relative h-8 w-8">
            <div className="absolute inset-0 bg-gradient-to-tr from-sole-purple to-sole-electric-blue rounded-full animate-pulse-soft"></div>
            <div className="absolute inset-0 h-8 w-8 bg-sole-dark rounded-full flex items-center justify-center transform translate-x-0.5 translate-y-0.5">
              <span className="text-white font-bold text-lg">S</span>
            </div>
          </div>
          <span className="ml-2 text-xl font-bold text-white">SoleSight</span>
        </FadeIn>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <FadeIn className="flex items-center gap-8" delay={0.2}>
            {navItems.map((item, index) => (
              <HoverScale key={item.name}>
                <a 
                  href={item.href} 
                  className="text-gray-300 hover:text-white transition-colors relative group py-1"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sole-purple to-sole-electric-blue group-hover:w-full transition-all duration-300"></span>
                </a>
              </HoverScale>
            ))}
          </FadeIn>
        </nav>
        
        {/* Action Buttons */}
        <FadeIn className="hidden md:flex items-center gap-4" delay={0.3}>
          <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5">
            <Search className="h-5 w-5" />
          </button>
          <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5 relative">
            <BellIcon className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-sole-purple rounded-full"></span>
          </button>
          <div className="h-9 w-9 bg-gradient-to-tr from-sole-purple to-sole-electric-blue rounded-full p-0.5">
            <div className="h-full w-full bg-sole-dark rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
          </div>
        </FadeIn>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleMenu}
            className="text-gray-400 hover:text-white p-1.5"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-sole-navy border-b border-white/5 shadow-lg"
          >
            <nav className="container mx-auto py-4 px-4 flex flex-col">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="py-3 px-4 text-gray-200 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/10">
                <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5">
                  <Search className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5 relative">
                  <BellIcon className="h-5 w-5" />
                  <span className="absolute top-1 right-1 h-2 w-2 bg-sole-purple rounded-full"></span>
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
