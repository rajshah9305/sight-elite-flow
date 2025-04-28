
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { FadeIn, GradientText, HoverScale, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart2, LineChart, PieChart, Search, Share2, Tag, TrendingUp, Image } from 'lucide-react';

const FeatureCard = ({ 
  title, 
  description, 
  icon, 
  delay = 0, 
  gradient = "from-sole-purple/20 to-sole-electric-blue/20"
}) => {
  return (
    <FadeIn delay={delay}>
      <HoverScale className="h-full">
        <Card className="border-white/5 bg-sole-dark-accent h-full relative overflow-hidden group">
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
          <div className="p-6 relative z-10">
            <div className="bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-sole-purple">
              {icon}
            </div>
            <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
          </div>
        </Card>
      </HoverScale>
    </FadeIn>
  );
};

const FeatureGrid = () => {
  const features = [
    {
      title: "Real-time Analytics",
      description: "Track your inventory, sales, and performance metrics in real-time.",
      icon: <BarChart2 size={24} />,
      delay: 0.1,
      gradient: "from-sole-purple/20 to-sole-electric-blue/20"
    },
    {
      title: "Market Trends",
      description: "Stay ahead with predictive analytics and market trend forecasting.",
      icon: <TrendingUp size={24} />,
      delay: 0.2,
      gradient: "from-sole-teal/20 to-sole-electric-blue/20"
    },
    {
      title: "Performance Insights",
      description: "Detailed insights into your sales performance and customer behavior.",
      icon: <LineChart size={24} />,
      delay: 0.3,
      gradient: "from-sole-purple/20 to-sole-neon/20"
    },
    {
      title: "Visual Analytics",
      description: "Beautiful, interactive charts and graphs for better data interpretation.",
      icon: <PieChart size={24} />,
      delay: 0.4,
      gradient: "from-sole-neon/20 to-sole-electric-blue/20"
    },
    {
      title: "Product Tracking",
      description: "Monitor product performance and inventory levels with precision.",
      icon: <Tag size={24} />,
      delay: 0.5,
      gradient: "from-sole-purple/20 to-sole-teal/20"
    },
    {
      title: "Market Research",
      description: "Access comprehensive market research and competitor analysis.",
      icon: <Search size={24} />,
      delay: 0.6,
      gradient: "from-sole-electric-blue/20 to-sole-teal/20"
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="grid-pattern h-full w-full"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-sole-dark via-transparent to-sole-dark"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Powerful <GradientText text="Features" /> for Data-Driven Decisions
          </h2>
          <p className="text-gray-400 text-lg">
            Our comprehensive analytics platform provides you with all the tools you need to make informed decisions and grow your sneaker business.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={feature.delay}
              gradient={feature.gradient}
            />
          ))}
        </div>
        
        <FadeIn delay={0.7} className="text-center">
          <Button 
            className="bg-gradient-to-r from-sole-purple to-sole-electric-blue hover:opacity-90 text-white px-6 h-12"
          >
            Explore All Features
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </FadeIn>
      </div>
    </section>
  );
};

export default FeatureGrid;
