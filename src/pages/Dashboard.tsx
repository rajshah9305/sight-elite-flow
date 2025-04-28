
import React from 'react';
import Header from '@/components/dashboard/Header';
import { StatCardGrid } from '@/components/dashboard/StatCard';
import DataVisual from '@/components/dashboard/DataVisual';
import { FadeIn, GradientText } from '@/components/ui/motion';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-sole-dark text-white overflow-x-hidden">
      <Header />
      
      <main className="pt-16">
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
      </main>
    </div>
  );
};

export default Dashboard;
