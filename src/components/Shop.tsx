import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Product } from '../types';
import { ShoppingCart, Plus, Check } from 'lucide-react';

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [addedToCart, setAddedToCart] = useState<string | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/products`, {
        headers: { 'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}` },
      });
      const data = await response.json();
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setAddedToCart(product.id);
    setTimeout(() => setAddedToCart(null), 2000);
  };

  if (loading) {
    return (
      <div className="py-24 text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-lime-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section id="shop" className="py-24 bg-gradient-to-b from-white to-lime-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 bg-lime-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop Our Products</h2>
            <p className="text-xl text-gray-700">Premium regenerative agriculture products</p>
          </div>

          {products.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="mx-auto h-16 w-16 text-gray-400 mb-4" />
              <p className="text-xl text-gray-600">No products available yet</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg overflow-hidden border-2 border-lime-200 hover:border-lime-400 hover:shadow-xl transition-all group"
                >
                  {product.image_url ? (
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={product.image_url}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {product.stock <= 0 && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                          <span className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold">
                            Out of Stock
                          </span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="h-64 bg-gradient-to-br from-lime-200 to-green-200 flex items-center justify-center">
                      <ShoppingCart className="h-24 w-24 text-lime-600 opacity-50" />
                    </div>
                  )}

                  <div className="p-6">
                    <div className="mb-2">
                      <span className="inline-block bg-lime-500 text-white text-xs px-3 py-1 rounded-full font-semibold uppercase">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{product.description}</p>

                    <div className="flex justify-between items-center mb-4">
                      <span className="text-3xl font-bold text-lime-600">${product.price}</span>
                      {product.stock > 0 && (
                        <span className="text-sm text-gray-600">
                          {product.stock} in stock
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => handleAddToCart(product)}
                      disabled={product.stock <= 0 || addedToCart === product.id}
                      className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                        addedToCart === product.id
                          ? 'bg-green-500 text-white'
                          : product.stock <= 0
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-gradient-to-r from-lime-500 to-green-600 text-white hover:from-lime-600 hover:to-green-700 hover:scale-105 shadow-lg'
                      }`}
                    >
                      {addedToCart === product.id ? (
                        <>
                          <Check size={20} />
                          <span>Added to Cart!</span>
                        </>
                      ) : (
                        <>
                          <Plus size={20} />
                          <span>{product.stock <= 0 ? 'Out of Stock' : 'Add to Cart'}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
