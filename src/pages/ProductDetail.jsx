import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Product not found
        </h2>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center text-gray-500 hover:text-blue-600 transition-colors mb-8 font-medium"
        >
          <svg
            className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Catalog
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image Section */}
          <div className="rounded-3xl overflow-hidden bg-gray-100 shadow-lg border border-gray-100">
            <img
              src={`https://placehold.co/800x600?text=${product.name.split(" ").join("+")}`}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col h-full pt-4">
            <div className="mb-2">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold tracking-wide">
                {product.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center mb-8">
              <span className="text-4xl font-bold text-blue-600">
                ฿{product.price.toLocaleString()}
              </span>
              <span className="ml-4 text-sm text-gray-400">
                Includes all taxes
              </span>
            </div>

            <div className="prose prose-lg text-gray-600 mb-10">
              <p>{product.desc}</p>
              <p>
                Experience the quality and performance that comes with our{" "}
                {product.name.toLowerCase()}. Designed for modern life, built to
                last.
              </p>
            </div>

            <div className="mt-auto pt-8 border-t border-gray-100">
              <div className="flex space-x-4">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-4 px-8 rounded-xl shadow-lg shadow-blue-600/30 transform hover:-translate-y-1 transition-all duration-200">
                  Add to Cart
                </button>
                <button className="px-6 py-4 rounded-xl border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-semibold transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>
              <p className="mt-4 text-center text-sm text-gray-400">
                Free shipping on all orders over ฿3,000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
