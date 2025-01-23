import React from 'react';

export function Newsletter() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Pack</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter for exclusive offers, new arrivals, and wild inspiration.
        </p>
        
        <form className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 font-medium hover:bg-gray-900 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}