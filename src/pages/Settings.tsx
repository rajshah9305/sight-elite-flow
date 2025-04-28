
import React, { useState } from 'react';
import Header from '@/components/dashboard/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FadeIn, GradientText } from '@/components/ui/motion';
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSaveChanges = () => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Settings saved",
        description: "Your changes have been successfully saved.",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-sole-dark text-white overflow-x-hidden">
      <Header />
      
      <main className="pt-16 pb-20">
        <div className="container mx-auto px-4">
          <FadeIn className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Account <GradientText text="Settings" /></h1>
            <p className="text-gray-400">Manage your account preferences and configurations</p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="bg-white/5 border-b border-white/10 w-full justify-start rounded-none mb-6 pb-0 h-auto">
                <TabsTrigger 
                  value="profile" 
                  className="data-[state=active]:border-b-2 data-[state=active]:border-sole-purple data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none px-4 py-2 text-gray-400 data-[state=active]:text-white"
                >
                  Profile
                </TabsTrigger>
                <TabsTrigger 
                  value="notifications" 
                  className="data-[state=active]:border-b-2 data-[state=active]:border-sole-purple data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none px-4 py-2 text-gray-400 data-[state=active]:text-white"
                >
                  Notifications
                </TabsTrigger>
                <TabsTrigger 
                  value="security" 
                  className="data-[state=active]:border-b-2 data-[state=active]:border-sole-purple data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none px-4 py-2 text-gray-400 data-[state=active]:text-white"
                >
                  Security
                </TabsTrigger>
                <TabsTrigger 
                  value="api" 
                  className="data-[state=active]:border-b-2 data-[state=active]:border-sole-purple data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none px-4 py-2 text-gray-400 data-[state=active]:text-white"
                >
                  API
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="profile">
                <Card className="border-white/5 bg-gradient-to-br from-sole-dark-accent to-sole-navy">
                  <div className="p-6">
                    <h2 className="text-xl font-medium mb-6">Personal Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">First Name</label>
                        <input 
                          type="text" 
                          defaultValue="John"
                          className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-sole-purple/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Last Name</label>
                        <input 
                          type="text" 
                          defaultValue="Doe"
                          className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-sole-purple/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                        <input 
                          type="email" 
                          defaultValue="john.doe@example.com"
                          className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-sole-purple/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Phone Number</label>
                        <input 
                          type="tel" 
                          defaultValue="+1 (555) 123-4567"
                          className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-sole-purple/50"
                        />
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-medium mb-6">Company Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Company Name</label>
                        <input 
                          type="text" 
                          defaultValue="SoleSight Inc."
                          className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-sole-purple/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Address</label>
                        <input 
                          type="text" 
                          defaultValue="123 Sneaker St."
                          className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-sole-purple/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">City</label>
                        <input 
                          type="text" 
                          defaultValue="New York"
                          className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-sole-purple/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Website</label>
                        <input 
                          type="url" 
                          defaultValue="https://solesight.com"
                          className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-sole-purple/50"
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button
                        onClick={handleSaveChanges}
                        disabled={loading}
                        className="bg-gradient-to-r from-sole-purple to-sole-electric-blue hover:opacity-90 text-white"
                      >
                        {loading ? "Saving..." : "Save Changes"}
                      </Button>
                    </div>
                  </div>
                </Card>
              </TabsContent>
              
              <TabsContent value="notifications">
                <Card className="border-white/5 bg-gradient-to-br from-sole-dark-accent to-sole-navy">
                  <div className="p-6">
                    <h2 className="text-xl font-medium mb-6">Notification Preferences</h2>
                    
                    <div className="space-y-6 mb-8">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="email-notifications"
                            type="checkbox"
                            defaultChecked
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-sole-purple/50"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="email-notifications" className="font-medium text-white">Email Notifications</label>
                          <p className="text-gray-400">Receive email updates about your account activity.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="product-updates"
                            type="checkbox"
                            defaultChecked
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-sole-purple/50"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="product-updates" className="font-medium text-white">Product Updates</label>
                          <p className="text-gray-400">Receive notifications about product updates and new releases.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="stock-alerts"
                            type="checkbox"
                            defaultChecked
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-sole-purple/50"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="stock-alerts" className="font-medium text-white">Stock Alerts</label>
                          <p className="text-gray-400">Get notified when inventory items are low or out of stock.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="marketing"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-sole-purple/50"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="marketing" className="font-medium text-white">Marketing & Promotions</label>
                          <p className="text-gray-400">Receive marketing emails and promotional offers.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button
                        onClick={handleSaveChanges}
                        disabled={loading}
                        className="bg-gradient-to-r from-sole-purple to-sole-electric-blue hover:opacity-90 text-white"
                      >
                        {loading ? "Saving..." : "Save Changes"}
                      </Button>
                    </div>
                  </div>
                </Card>
              </TabsContent>
              
              <TabsContent value="security">
                <Card className="border-white/5 bg-gradient-to-br from-sole-dark-accent to-sole-navy">
                  <div className="p-6">
                    <h2 className="text-xl font-medium mb-6">Password</h2>
                    
                    <div className="grid grid-cols-1 gap-6 mb-8">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Current Password</label>
                        <input 
                          type="password" 
                          placeholder="Enter current password"
                          className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-sole-purple/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">New Password</label>
                        <input 
                          type="password" 
                          placeholder="Enter new password"
                          className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-sole-purple/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Confirm New Password</label>
                        <input 
                          type="password" 
                          placeholder="Confirm new password"
                          className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-sole-purple/50"
                        />
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-medium mb-6">Two-Factor Authentication</h2>
                    
                    <div className="mb-8">
                      <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                          <input
                            id="enable-2fa"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-sole-purple/50"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="enable-2fa" className="font-medium text-white">Enable Two-Factor Authentication</label>
                          <p className="text-gray-400">Add an extra layer of security to your account.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button
                        onClick={handleSaveChanges}
                        disabled={loading}
                        className="bg-gradient-to-r from-sole-purple to-sole-electric-blue hover:opacity-90 text-white"
                      >
                        {loading ? "Saving..." : "Save Changes"}
                      </Button>
                    </div>
                  </div>
                </Card>
              </TabsContent>
              
              <TabsContent value="api">
                <Card className="border-white/5 bg-gradient-to-br from-sole-dark-accent to-sole-navy">
                  <div className="p-6">
                    <h2 className="text-xl font-medium mb-6">API Keys</h2>
                    
                    <div className="mb-8">
                      <p className="text-gray-400 mb-4">Use these API keys to authenticate requests with our API.</p>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Live API Key</label>
                          <div className="flex">
                            <input 
                              type="text" 
                              value="sk_live_7aB9cD0eF1gH2iJ3kL4mN5oP6qR7sT8uV9wX0yZ"
                              readOnly
                              className="w-full bg-white/5 border border-white/10 rounded-l-md px-4 py-2 text-white focus:outline-none"
                            />
                            <Button
                              onClick={() => {
                                navigator.clipboard.writeText("sk_live_7aB9cD0eF1gH2iJ3kL4mN5oP6qR7sT8uV9wX0yZ");
                                toast({
                                  title: "API Key Copied",
                                  description: "Live API key has been copied to clipboard.",
                                });
                              }}
                              className="bg-white/10 hover:bg-white/20 text-white rounded-l-none border border-white/10"
                            >
                              Copy
                            </Button>
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Test API Key</label>
                          <div className="flex">
                            <input 
                              type="text" 
                              value="sk_test_1aA2bB3cC4dD5eE6fF7gG8hH9iI0jJ1kK2lL"
                              readOnly
                              className="w-full bg-white/5 border border-white/10 rounded-l-md px-4 py-2 text-white focus:outline-none"
                            />
                            <Button
                              onClick={() => {
                                navigator.clipboard.writeText("sk_test_1aA2bB3cC4dD5eE6fF7gG8hH9iI0jJ1kK2lL");
                                toast({
                                  title: "API Key Copied",
                                  description: "Test API key has been copied to clipboard.",
                                });
                              }}
                              className="bg-white/10 hover:bg-white/20 text-white rounded-l-none border border-white/10"
                            >
                              Copy
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button
                        onClick={() => {
                          setLoading(true);
                          setTimeout(() => {
                            setLoading(false);
                            toast({
                              title: "API Keys Regenerated",
                              description: "Your API keys have been successfully regenerated.",
                            });
                          }, 1000);
                        }}
                        disabled={loading}
                        className="bg-gradient-to-r from-sole-purple to-sole-electric-blue hover:opacity-90 text-white"
                      >
                        {loading ? "Regenerating..." : "Regenerate API Keys"}
                      </Button>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </FadeIn>
        </div>
      </main>
    </div>
  );
};

export default Settings;
