import React from 'react';
import { ShoppingCart, Menu, Search } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <Menu className="h-6 w-6 text-gray-600" />
          </button>

          {/* Logo */}
          <div className="flex-1 md:flex-none text-center md:text-left">
            <a href="/" className="text-2xl font-bold tracking-tight">
              THE FERAL FAM
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/shop" className="text-gray-600 hover:text-black">Shop</a>
            <a href="/about" className="text-gray-600 hover:text-black">About</a>
            <a href="/blog" className="text-gray-600 hover:text-black">Blog</a>
            <a href="/contact" className="text-gray-600 hover:text-black">Contact</a>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 relative">
              <ShoppingCart className="h-5 w-5 text-gray-600" />
              <span className="absolute top-0 right-0 h-4 w-4 bg-black text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}