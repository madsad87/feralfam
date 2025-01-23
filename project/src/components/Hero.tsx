import React from 'react';

export function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Embrace Your Wild Side
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Discover our collection of sustainable, ethical fashion for the free-spirited
          </p>
          <a
            href="/shop"
            className="inline-block bg-white text-black px-8 py-3 text-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}