
import React, { useState } from 'react';
import Header from '@/components/dashboard/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FadeIn, GradientText, HoverScale, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { Search, Plus, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();

  const products = [
    { id: 1, name: 'Nike Air Max 90', sku: 'NKE-AM90-001', category: 'Running', brand: 'Nike', price: 120, stock: 45, status: 'In Stock', trend: 'up' },
    { id: 2, name: 'Adidas Ultraboost 22', sku: 'ADS-UB22-002', category: 'Running', brand: 'Adidas', price: 180, stock: 32, status: 'In Stock', trend: 'up' },
    { id: 3, name: 'Jordan 1 Retro High', sku: 'JRD-1RH-003', category: 'Basketball', brand: 'Jordan', price: 170, stock: 12, status: 'Low Stock', trend: 'up' },
    { id: 4, name: 'Yeezy Boost 350 V2', sku: 'YZY-B350-004', category: 'Lifestyle', brand: 'Adidas', price: 230, stock: 8, status: 'Low Stock', trend: 'down' },
    { id: 5, name: 'New Balance 990', sku: 'NB-990-005', category: 'Lifestyle', brand: 'New Balance', price: 175, stock: 27, status: 'In Stock', trend: 'up' },
    { id: 6, name: 'Puma RS-X', sku: 'PMA-RSX-006', category: 'Lifestyle', brand: 'Puma', price: 110, stock: 0, status: 'Out of Stock', trend: 'down' },
    { id: 7, name: 'Vans Old Skool', sku: 'VNS-OS-007', category: 'Skateboarding', brand: 'Vans', price: 65, stock: 53, status: 'In Stock', trend: 'down' },
    { id: 8, name: 'Converse Chuck Taylor', sku: 'CNV-CT-008', category: 'Lifestyle', brand: 'Converse', price: 55, stock: 41, status: 'In Stock', trend: 'down' }
  ];

  const filteredProducts = searchQuery 
    ? products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products;

  const handleAddProduct = () => {
    toast({
      title: "Add Product",
      description: "This feature is coming soon!",
    });
  };

  const handleProductClick = (product: any) => {
    toast({
      title: `${product.name}`,
      description: `SKU: ${product.sku} | Price: $${product.price}`,
    });
  };

  return (
    <div className="min-h-screen bg-sole-dark text-white overflow-x-hidden">
      <Header />
      
      <main className="pt-16 pb-20">
        <div className="container mx-auto px-4">
          <FadeIn className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Product <GradientText text="Inventory" /></h1>
            <p className="text-gray-400">Manage your sneaker collection</p>
          </FadeIn>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div className="relative mb-4 sm:mb-0 w-full sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-md w-full text-white focus:outline-none focus:ring-2 focus:ring-sole-purple/50"
              />
            </div>
            <Button
              onClick={handleAddProduct}
              className="bg-gradient-to-r from-sole-purple to-sole-electric-blue hover:opacity-90 text-white"
            >
              <Plus className="mr-2 h-4 w-4" /> Add Product
            </Button>
          </div>

          <StaggerContainer className="grid grid-cols-1">
            <Card className="border-white/5 bg-white/5 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-white/5 border-b border-white/10">
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Product</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">SKU</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Category</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Price</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Stock</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Trend</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filteredProducts.map((product) => (
                      <StaggerItem key={product.id}>
                        <tr 
                          className="hover:bg-white/5 cursor-pointer transition-colors"
                          onClick={() => handleProductClick(product)}
                        >
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="font-medium text-white">{product.name}</div>
                            <div className="text-xs text-gray-400">{product.brand}</div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">{product.sku}</td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">{product.category}</td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-white font-medium">${product.price}</td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">{product.stock}</td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              product.status === 'In Stock' ? 'bg-green-500/20 text-green-400' :
                              product.status === 'Low Stock' ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-red-500/20 text-red-400'
                            }`}>
                              {product.status}
                            </span>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            {product.trend === 'up' ? (
                              <div className="flex items-center text-green-400">
                                <ArrowUpRight size={16} />
                                <span className="ml-1 text-xs">2.5%</span>
                              </div>
                            ) : (
                              <div className="flex items-center text-red-400">
                                <ArrowDownRight size={16} />
                                <span className="ml-1 text-xs">1.8%</span>
                              </div>
                            )}
                          </td>
                        </tr>
                      </StaggerItem>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </StaggerContainer>
        </div>
      </main>
    </div>
  );
};

export default Products;
