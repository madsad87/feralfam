import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Newsletter } from './components/Newsletter';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <Newsletter />
      </main>
      
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-400">© 2024 The Feral Fam. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;