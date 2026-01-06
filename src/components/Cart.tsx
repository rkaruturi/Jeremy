import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, ShoppingCart, ArrowRight } from 'lucide-react';
import Checkout from './Checkout';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, getTotalItems } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  if (!isOpen) return null;

  if (showCheckout) {
    return <Checkout onClose={() => { setShowCheckout(false); onClose(); }} />;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-gradient-to-r from-lime-600 to-green-700 text-white p-6 flex justify-between items-center z-10">
          <div className="flex items-center space-x-3">
            <ShoppingCart size={24} />
            <div>
              <h2 className="text-2xl font-bold">Your Cart</h2>
              <p className="text-sm text-lime-100">{getTotalItems()} items</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="mx-auto h-24 w-24 text-gray-300 mb-4" />
              <p className="text-xl text-gray-600 mb-2">Your cart is empty</p>
              <p className="text-gray-500">Add some products to get started</p>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.product.id} className="bg-gradient-to-br from-lime-50 to-green-50 rounded-xl p-4 border-2 border-lime-200">
                    <div className="flex gap-4">
                      {item.product.image_url ? (
                        <img
                          src={item.product.image_url}
                          alt={item.product.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                      ) : (
                        <div className="w-20 h-20 bg-lime-200 rounded-lg flex items-center justify-center">
                          <ShoppingCart className="h-8 w-8 text-lime-600" />
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-1">{item.product.name}</h3>
                        <p className="text-lime-600 font-bold mb-2">${item.product.price}</p>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="bg-white text-gray-700 p-1 rounded hover:bg-lime-100 transition-all border border-lime-300"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="font-semibold text-gray-900 min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            disabled={item.quantity >= item.product.stock}
                            className="bg-white text-gray-700 p-1 rounded hover:bg-lime-100 transition-all border border-lime-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <Plus size={16} />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="ml-auto text-red-600 hover:text-red-800 transition-all"
                          >
                            <X size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t-2 border-lime-300 pt-6 space-y-4">
                <div className="flex justify-between items-center text-xl">
                  <span className="font-semibold text-gray-900">Total:</span>
                  <span className="font-bold text-lime-600 text-2xl">
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={() => setShowCheckout(true)}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-lime-500 to-green-600 text-white px-8 py-4 rounded-lg hover:from-lime-600 hover:to-green-700 transition-all font-semibold text-lg shadow-lg hover:scale-105"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
