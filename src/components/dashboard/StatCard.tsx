
import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, HoverScale } from '@/components/ui/motion';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowUpRight, TrendingUp, TrendingDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

type StatCardProps = {
  title: string;
  value: string;
  change: number;
  icon?: React.ReactNode;
  isLoading?: boolean;
  className?: string;
  link?: string;
};

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  icon,
  isLoading = false,
  className,
  link,
}) => {
  const isPositive = change > 0;
  const { toast } = useToast();
  
  const handleCardClick = () => {
    if (!link) {
      toast({
        title: title,
        description: `Current value: ${value}, Change: ${change}%`,
      });
    }
  };
  
  const CardContent = () => (
    <div className="p-6 relative z-10">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-sm font-medium text-gray-400">{title}</h3>
          {isLoading ? (
            <div className="h-8 w-24 animate-pulse bg-white/10 rounded mt-1"></div>
          ) : (
            <p className="text-2xl font-bold text-white mt-1">{value}</p>
          )}
        </div>
        
        <div className="bg-white/5 rounded-lg p-2.5">
          {icon || (isPositive ? <TrendingUp size={20} className="text-sole-electric-blue" /> : <TrendingDown size={20} className="text-red-500" />)}
        </div>
      </div>
      
      <div className="flex items-center">
        <span 
          className={cn(
            "text-sm font-medium flex items-center gap-1",
            isPositive ? "text-green-400" : "text-red-400"
          )}
        >
          {isPositive ? '+' : ''}{change}%
          {isPositive ? 
            <ArrowUpRight size={14} /> : 
            <motion.div
              animate={{ rotate: 90 }}
              transition={{ duration: 0 }}
            >
              <ArrowUpRight size={14} />
            </motion.div>
          }
        </span>
        <span className="text-xs text-gray-400 ml-2">vs last period</span>
      </div>
      
      {/* Decorative Line */}
      <div className={cn(
        "absolute bottom-0 left-0 h-1 w-full",
        isPositive ? "bg-sole-electric-blue/30" : "bg-red-500/30"
      )}>
        <div className={cn(
          "h-full",
          isPositive ? "bg-sole-electric-blue" : "bg-red-500"
        )} style={{ width: `${Math.min(Math.abs(change) * 2, 100)}%` }}></div>
      </div>
    </div>
  );
  
  const cardElement = (
    <Card 
      className={cn(
        "overflow-hidden relative border-white/5 bg-gradient-to-br from-sole-dark-accent to-sole-navy cursor-pointer",
        className
      )}
      onClick={handleCardClick}
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 opacity-50">
        <div className={cn(
          "absolute -inset-1 rounded-full blur-xl opacity-20",
          isPositive ? "bg-sole-electric-blue" : "bg-red-500"
        )}></div>
      </div>
      
      <CardContent />
    </Card>
  );
  
  return (
    <HoverScale>
      {link ? (
        <Link to={link}>
          {cardElement}
        </Link>
      ) : (
        cardElement
      )}
    </HoverScale>
  );
};

type StatCardGridProps = {
  className?: string;
};

export const StatCardGrid: React.FC<StatCardGridProps> = ({ className }) => {
  const stats = [
    { title: "Total Revenue", value: "$24,312", change: 12.5, icon: <span className="text-xl font-bold">$</span>, link: "/dashboard" },
    { title: "New Customers", value: "1,240", change: 18.2, link: "/analytics" },
    { title: "Conversion Rate", value: "4.3%", change: -2.4, link: "/analytics" },
    { title: "Active Listings", value: "312", change: 8.1, link: "/products" }
  ];

  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", className)}>
      {stats.map((stat, index) => (
        <FadeIn key={stat.title} delay={0.2 + index * 0.1}>
          <StatCard {...stat} />
        </FadeIn>
      ))}
    </div>
  );
};

export default StatCard;
