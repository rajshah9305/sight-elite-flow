
import React from 'react';
import Header from '@/components/dashboard/Header';
import HeroSection from '@/components/dashboard/HeroSection';
import { StatCardGrid } from '@/components/dashboard/StatCard';
import DataVisual from '@/components/dashboard/DataVisual';
import FeatureGrid from '@/components/dashboard/FeatureGrid';
import { FadeIn, GradientText } from '@/components/ui/motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-sole-dark text-white overflow-x-hidden">
      <Header />
      
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Stats Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <FadeIn className="mb-8">
              <h2 className="text-3xl font-bold">Performance <GradientText text="Overview" /></h2>
              <p className="text-gray-400">Key metrics from your dashboard</p>
            </FadeIn>
            
            <StatCardGrid />
          </div>
        </section>
        
        {/* Data Visualization Section */}
        <DataVisual />
        
        {/* Features Grid */}
        <FeatureGrid />
        
        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-sole-navy to-sole-dark opacity-90"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(155,135,245,0.1),transparent_70%)]"></div>
          </div>
          
          <div className="container mx-auto px-4">
            <FadeIn className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">
                Ready to Transform Your <GradientText text="Sneaker Business" />?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Join thousands of successful entrepreneurs who have taken their business to the next level with SoleSight Analytics.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/dashboard">
                  <Button 
                    className="bg-gradient-to-r from-sole-purple to-sole-electric-blue hover:opacity-90 text-white px-6 h-12"
                  >
                    Get Started Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/analytics">
                  <Button 
                    variant="outline" 
                    className="border-white/10 text-white hover:bg-white/5 h-12"
                  >
                    View Analytics
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="bg-sole-dark-accent border-t border-white/5 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <FadeIn className="flex items-center gap-2 mb-6 md:mb-0">
                <Link to="/" className="flex items-center gap-2">
                  <div className="relative h-8 w-8">
                    <div className="absolute inset-0 bg-gradient-to-tr from-sole-purple to-sole-electric-blue rounded-full"></div>
                    <div className="absolute inset-0 h-8 w-8 bg-sole-dark-accent rounded-full flex items-center justify-center transform translate-x-0.5 translate-y-0.5">
                      <span className="text-white font-bold text-lg">S</span>
                    </div>
                  </div>
                  <span className="text-xl font-bold text-white">SoleSight</span>
                </Link>
              </FadeIn>
              
              <FadeIn className="text-center md:text-right">
                <p className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} SoleSight Analytics. All rights reserved.
                </p>
              </FadeIn>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
