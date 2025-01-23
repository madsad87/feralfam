import React from 'react';

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

const DUMMY_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Feral Spirit Tee",
    price: "$35.00",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Wild Heart Hoodie",
    price: "$65.00",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Freedom Seeker Cap",
    price: "$28.00",
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Wanderlust Backpack",
    price: "$89.00",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80"
  }
];

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Collection</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DUMMY_PRODUCTS.map((product) => (
            <div key={product.id} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                <p className="mt-1 text-gray-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}