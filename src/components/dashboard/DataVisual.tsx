
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeIn, GradientText, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend, AreaChart, Area } from 'recharts';
import { Button } from '@/components/ui/button';

const mockData = [
  { name: 'Jan', sales: 400, visits: 2400, orders: 240 },
  { name: 'Feb', sales: 300, visits: 1398, orders: 139 },
  { name: 'Mar', sales: 200, visits: 9800, orders: 980 },
  { name: 'Apr', sales: 278, visits: 3908, orders: 390 },
  { name: 'May', sales: 189, visits: 4800, orders: 480 },
  { name: 'Jun', sales: 239, visits: 3800, orders: 380 },
  { name: 'Jul', sales: 349, visits: 4300, orders: 430 },
  { name: 'Aug', sales: 470, visits: 5200, orders: 520 },
  { name: 'Sep', sales: 358, visits: 4300, orders: 430 },
  { name: 'Oct', sales: 410, visits: 6000, orders: 600 },
  { name: 'Nov', sales: 450, visits: 5000, orders: 500 },
  { name: 'Dec', sales: 520, visits: 7000, orders: 700 }
];

const timeFrames = ['1D', '1W', '1M', '3M', '1Y', 'All'];

const DataVisual = () => {
  const [activeTimeFrame, setActiveTimeFrame] = useState('1M');

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Market <GradientText text="Analytics" /></h2>
              <p className="text-gray-400">Comprehensive view of your performance metrics</p>
            </div>
            <div className="flex flex-wrap mt-4 sm:mt-0 gap-2 bg-white/5 p-1 rounded-lg">
              {timeFrames.map((frame) => (
                <Button
                  key={frame}
                  variant={activeTimeFrame === frame ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveTimeFrame(frame)}
                  className={activeTimeFrame === frame 
                    ? "bg-sole-purple text-white" 
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                  }
                >
                  {frame}
                </Button>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Tabs defaultValue="sales" className="w-full">
            <TabsList className="bg-white/5 border-b border-white/10 w-full justify-start rounded-none mb-6 pb-0 h-auto">
              <TabsTrigger 
                value="sales" 
                className="data-[state=active]:border-b-2 data-[state=active]:border-sole-purple data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none px-4 py-2 text-gray-400 data-[state=active]:text-white"
              >
                Sales
              </TabsTrigger>
              <TabsTrigger 
                value="traffic" 
                className="data-[state=active]:border-b-2 data-[state=active]:border-sole-purple data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none px-4 py-2 text-gray-400 data-[state=active]:text-white"
              >
                Traffic
              </TabsTrigger>
              <TabsTrigger 
                value="orders" 
                className="data-[state=active]:border-b-2 data-[state=active]:border-sole-purple data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none px-4 py-2 text-gray-400 data-[state=active]:text-white"
              >
                Orders
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="sales" className="mt-0">
              <Card className="border-white/5 bg-gradient-to-br from-sole-dark-accent to-sole-navy overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="text-xl font-medium text-white">Sales Overview</h3>
                      <p className="text-gray-400">Monthly sales performance</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-white">$24,312</p>
                      <p className="text-green-400 text-sm">↑ 12.5% vs last period</p>
                    </div>
                  </div>
                  
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={mockData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                          <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#6E59A5" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#6E59A5" stopOpacity={0.1}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
                        <XAxis 
                          dataKey="name" 
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                        />
                        <YAxis 
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                        />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#1E2A45', 
                            borderColor: 'rgba(255,255,255,0.1)',
                            color: 'white',
                            fontSize: 12,
                            borderRadius: 8,
                          }} 
                        />
                        <Area 
                          type="monotone" 
                          dataKey="sales" 
                          stroke="#6E59A5" 
                          fillOpacity={1} 
                          fill="url(#colorSales)" 
                          strokeWidth={2}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="traffic">
              <Card className="border-white/5 bg-gradient-to-br from-sole-dark-accent to-sole-navy overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="text-xl font-medium text-white">Traffic Overview</h3>
                      <p className="text-gray-400">Monthly visitor metrics</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-white">54,218</p>
                      <p className="text-green-400 text-sm">↑ 8.3% vs last period</p>
                    </div>
                  </div>
                  
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={mockData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
                        <XAxis 
                          dataKey="name" 
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                        />
                        <YAxis 
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                        />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#1E2A45', 
                            borderColor: 'rgba(255,255,255,0.1)',
                            color: 'white',
                            fontSize: 12,
                            borderRadius: 8,
                          }} 
                        />
                        <Line 
                          type="monotone" 
                          dataKey="visits" 
                          stroke="#33C3F0" 
                          strokeWidth={2}
                          dot={{ r: 3, strokeWidth: 2, fill: '#0A0E17' }}
                          activeDot={{ r: 5, stroke: '#33C3F0', strokeWidth: 1, fill: '#0A0E17' }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="orders">
              <Card className="border-white/5 bg-gradient-to-br from-sole-dark-accent to-sole-navy overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="text-xl font-medium text-white">Orders Overview</h3>
                      <p className="text-gray-400">Monthly order performance</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-white">5,421</p>
                      <p className="text-green-400 text-sm">↑ 15.2% vs last period</p>
                    </div>
                  </div>
                  
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={mockData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
                        <XAxis 
                          dataKey="name" 
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                        />
                        <YAxis 
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                        />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#1E2A45', 
                            borderColor: 'rgba(255,255,255,0.1)',
                            color: 'white',
                            fontSize: 12,
                            borderRadius: 8,
                          }} 
                        />
                        <Bar 
                          dataKey="orders" 
                          fill="#9b87f5"
                          radius={[4, 4, 0, 0]}
                          barSize={30}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </FadeIn>
      </div>
    </section>
  );
};

export default DataVisual;
