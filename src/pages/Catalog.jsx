import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";

const Catalog = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-50 from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4 tracking-tight">
            Discover Our Products
          </h1>
          <p className="text-gray-500 text-lg">
            Explore the best gadgets and accessories for your lifestyle.
          </p>
        </header>

        <div className="relative max-w-xl mx-auto mb-16 group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg
              className="h-6 w-6 text-gray-400 group-focus-within:text-blue-500 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-100 rounded-2xl shadow-sm text-lg focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col"
            >
              <div className="h-48 bg-gray-100 overflow-hidden relative">
                <img
                  src={`https://placehold.co/400x300?text=${product.name.split(" ").join("+")}`}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-white/90 backdrop-blur-sm text-xs font-bold text-gray-700 px-3 py-1 rounded-full shadow-sm">
                    {product.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h2>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                  {product.desc}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">
                    ฿{product.price.toLocaleString()}
                  </span>
                  <Link
                    to={`/product/${product.id}`}
                    className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">
              No products found matching "{search}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
