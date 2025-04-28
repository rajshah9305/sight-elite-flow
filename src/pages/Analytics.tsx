
import React from 'react';
import Header from '@/components/dashboard/Header';
import { Card } from '@/components/ui/card';
import { FadeIn, GradientText, HoverScale } from '@/components/ui/motion';
import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Analytics = () => {
  const salesData = [
    { month: 'Jan', sales: 1200, profit: 300, loss: 100 },
    { month: 'Feb', sales: 1900, profit: 400, loss: 150 },
    { month: 'Mar', sales: 1300, profit: 300, loss: 120 },
    { month: 'Apr', sales: 1700, profit: 350, loss: 140 },
    { month: 'May', sales: 2100, profit: 500, loss: 180 },
    { month: 'Jun', sales: 1500, profit: 320, loss: 110 },
    { month: 'Jul', sales: 1800, profit: 380, loss: 130 },
    { month: 'Aug', sales: 2200, profit: 520, loss: 200 },
    { month: 'Sep', sales: 2500, profit: 600, loss: 220 },
    { month: 'Oct', sales: 2300, profit: 550, loss: 210 },
    { month: 'Nov', sales: 2700, profit: 650, loss: 230 },
    { month: 'Dec', sales: 3000, profit: 700, loss: 250 }
  ];

  const pieData = [
    { name: 'Nike', value: 400 },
    { name: 'Adidas', value: 300 },
    { name: 'Jordan', value: 300 },
    { name: 'Yeezy', value: 200 },
    { name: 'Other', value: 100 }
  ];

  const COLORS = ['#6E59A5', '#33C3F0', '#9b87f5', '#4CC3D9', '#FFC154'];

  return (
    <div className="min-h-screen bg-sole-dark text-white overflow-x-hidden">
      <Header />
      
      <main className="pt-16 pb-20">
        <div className="container mx-auto px-4">
          <FadeIn className="mb-12">
            <h1 className="text-4xl font-bold mb-2">Advanced <GradientText text="Analytics" /></h1>
            <p className="text-gray-400">Comprehensive data insights for your business</p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <FadeIn delay={0.1}>
              <HoverScale>
                <Card className="border-white/5 bg-gradient-to-br from-sole-dark-accent to-sole-navy p-6 h-full">
                  <h3 className="text-xl font-medium mb-4">Annual Sales Trend</h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={salesData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                          <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#6E59A5" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#6E59A5" stopOpacity={0.1} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} />
                        <Tooltip contentStyle={{ backgroundColor: '#1E2A45', borderColor: 'rgba(255,255,255,0.1)', color: 'white', borderRadius: 8 }} />
                        <Area type="monotone" dataKey="sales" stroke="#6E59A5" fillOpacity={1} fill="url(#colorSales)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              </HoverScale>
            </FadeIn>

            <FadeIn delay={0.2}>
              <HoverScale>
                <Card className="border-white/5 bg-gradient-to-br from-sole-dark-accent to-sole-navy p-6 h-full">
                  <h3 className="text-xl font-medium mb-4">Profit & Loss</h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={salesData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} />
                        <Tooltip contentStyle={{ backgroundColor: '#1E2A45', borderColor: 'rgba(255,255,255,0.1)', color: 'white', borderRadius: 8 }} />
                        <Bar dataKey="profit" fill="#33C3F0" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="loss" fill="#FE4A49" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              </HoverScale>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.3} className="lg:col-span-2">
              <HoverScale>
                <Card className="border-white/5 bg-gradient-to-br from-sole-dark-accent to-sole-navy p-6 h-full">
                  <h3 className="text-xl font-medium mb-4">Market Trends</h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={salesData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} />
                        <Tooltip contentStyle={{ backgroundColor: '#1E2A45', borderColor: 'rgba(255,255,255,0.1)', color: 'white', borderRadius: 8 }} />
                        <Line type="monotone" dataKey="sales" stroke="#9b87f5" strokeWidth={2} dot={{ r: 4, strokeWidth: 2, fill: '#0A0E17' }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              </HoverScale>
            </FadeIn>

            <FadeIn delay={0.4}>
              <HoverScale>
                <Card className="border-white/5 bg-gradient-to-br from-sole-dark-accent to-sole-navy p-6 h-full">
                  <h3 className="text-xl font-medium mb-4">Brand Distribution</h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: '#1E2A45', borderColor: 'rgba(255,255,255,0.1)', color: 'white', borderRadius: 8 }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              </HoverScale>
            </FadeIn>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analytics;
