import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag, Truck, Lock } from 'lucide-react';
import { useCart } from '../context/CartContext';

function CartItem({ item, onQtyChange, onRemove }) {
  return (
    <div className="card p-5 flex items-center gap-5 hover:shadow-hover transition-all duration-200 group">
      <Link to={`/product/${item.id}`} className="flex-shrink-0">
        <div className="w-24 h-24 bg-gradient-to-br from-gray-50 to-brand-50 rounded-2xl overflow-hidden flex items-center justify-center">
          <img src={item.image} alt={item.name} className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110" />
        </div>
      </Link>

      <div className="flex-1 min-w-0">
        <Link to={`/product/${item.id}`}>
          <p className="text-xs text-brand-600 font-semibold uppercase tracking-wider mb-1 capitalize">{item.category.replace('-', ' ')}</p>
          <h3 className="font-semibold text-gray-800 line-clamp-2 hover:text-brand-700 transition-colors leading-snug">{item.name}</h3>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-bold text-gray-900">PKR {item.price}</span>
          {item.originalPrice && (
            <span className="text-sm text-gray-400 line-through">PKR {item.originalPrice}</span>
          )}
          {item.discount > 0 && (
            <span className="text-xs bg-emerald-50 text-emerald-600 font-semibold px-2 py-0.5 rounded-full">-{item.discount}%</span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Qty Stepper */}
        <div className="flex items-center gap-0 bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
          <button
            onClick={() => onQtyChange(item.id, item.qty - 1)}
            className="p-2.5 hover:bg-gray-100 active:bg-gray-200 transition-colors"
          >
            <Minus size={14} className="text-gray-600" />
          </button>
          <span className="w-10 text-center text-sm font-bold text-gray-800">{item.qty}</span>
          <button
            onClick={() => onQtyChange(item.id, item.qty + 1)}
            className="p-2.5 hover:bg-gray-100 active:bg-gray-200 transition-colors"
          >
            <Plus size={14} className="text-gray-600" />
          </button>
        </div>

        {/* Subtotal */}
        <div className="text-right hidden sm:block">
          <p className="text-xs text-gray-400 mb-0.5">Subtotal</p>
          <p className="font-bold text-gray-900">PKR {item.price * item.qty}</p>
        </div>

        {/* Remove */}
        <button
          onClick={() => onRemove(item.id)}
          className="p-2.5 rounded-xl text-gray-300 hover:text-rose-500 hover:bg-rose-50 transition-all duration-200 hover:scale-110 active:scale-95"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
}

export default function CartPage() {
  const { items, removeItem, updateQty, clearCart, totalPrice, totalItems } = useCart();
  const [coupon, setCoupon] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [checkoutDone, setCheckoutDone] = useState(false);

  const delivery = totalPrice > 500 ? 0 : 99;
  const discount = couponApplied ? Math.round(totalPrice * 0.1) : 0;
  const finalTotal = totalPrice - discount + delivery;

  const applyCoupon = () => {
    if (coupon.toLowerCase() === 'alkhalid10') {
      setCouponApplied(true);
    }
  };

  if (checkoutDone) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center card p-12 max-w-md">
          <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🎉</span>
          </div>
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-2">Order Placed!</h2>
          <p className="text-gray-500 mb-6">Thank you for shopping with AL-Khalid Super Store. Your order is being processed.</p>
          <p className="text-sm text-brand-600 font-semibold mb-8">Estimated delivery: 2-3 business days</p>
          <Link to="/" className="btn-primary inline-block">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 page-enter">
        <div className="text-center">
          <div className="w-32 h-32 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag size={56} className="text-brand-300" />
          </div>
          <h2 className="font-display text-3xl font-bold text-gray-800 mb-3">Your Cart is Empty</h2>
          <p className="text-gray-400 mb-8 max-w-sm mx-auto">Looks like you haven't added anything yet. Start browsing our amazing collection!</p>
          <Link to="/products" className="btn-primary inline-flex items-center gap-2">
            <ShoppingBag size={18} /> Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 page-enter">
      {/* Header */}
      <div className="bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <h1 className="font-display text-4xl font-bold text-white mb-1">Your Cart</h1>
          <p className="text-white/70">{totalItems} item{totalItems !== 1 ? 's' : ''} ready to checkout</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-semibold text-gray-700">{items.length} Product{items.length !== 1 ? 's' : ''}</h2>
              <button onClick={clearCart} className="text-sm text-rose-500 hover:text-rose-600 font-medium flex items-center gap-1 hover:underline">
                <Trash2 size={14} /> Clear all
              </button>
            </div>
            {items.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onQtyChange={updateQty}
                onRemove={removeItem}
              />
            ))}

            {/* Continue Shopping */}
            <Link to="/products" className="inline-flex items-center gap-2 text-sm text-brand-600 font-semibold hover:text-brand-700 transition-colors mt-2">
              <ArrowRight size={14} className="rotate-180" /> Continue Shopping
            </Link>
          </div>

          {/* Summary */}
          <div className="lg:w-96 flex-shrink-0">
            <div className="card p-6 sticky top-24 space-y-5">
              <h2 className="font-display text-xl font-bold text-gray-900">Order Summary</h2>

              {/* Coupon */}
              <div className="flex gap-2">
                <div className="flex-1 flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5">
                  <Tag size={15} className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Coupon code"
                    value={coupon}
                    onChange={e => setCoupon(e.target.value)}
                    disabled={couponApplied}
                    className="flex-1 bg-transparent text-sm text-gray-700 outline-none placeholder-gray-400"
                  />
                </div>
                <button
                  onClick={applyCoupon}
                  disabled={couponApplied}
                  className="px-4 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {couponApplied ? 'Applied!' : 'Apply'}
                </button>
              </div>
              {couponApplied && (
                <p className="text-xs text-emerald-600 font-medium -mt-3 flex items-center gap-1">✅ 10% discount applied!</p>
              )}

              {/* Price breakdown */}
              <div className="space-y-3 py-4 border-t border-b border-gray-100">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Subtotal ({totalItems} items)</span>
                  <span className="font-medium text-gray-800">PKR {totalPrice}</span>
                </div>
                {couponApplied && (
                  <div className="flex justify-between text-sm">
                    <span className="text-emerald-600">Discount (10%)</span>
                    <span className="font-medium text-emerald-600">-PKR {discount}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 flex items-center gap-1">
                    <Truck size={13} /> Delivery
                  </span>
                  <span className={`font-medium ${delivery === 0 ? 'text-emerald-600' : 'text-gray-800'}`}>
                    {delivery === 0 ? 'FREE' : `PKR ${delivery}`}
                  </span>
                </div>
                {delivery > 0 && (
                  <p className="text-xs text-gray-400">Add PKR {500 - totalPrice} more for free delivery</p>
                )}
              </div>

              <div className="flex justify-between">
                <span className="font-bold text-gray-900 text-lg">Total</span>
                <span className="font-bold text-brand-700 text-2xl">PKR {finalTotal}</span>
              </div>

              <button
                onClick={() => setCheckoutDone(true)}
                className="w-full flex items-center justify-center gap-3 py-4 bg-btn-gradient text-white font-bold text-base rounded-2xl shadow-green hover:shadow-green-lg hover:scale-[1.02] active:scale-[0.97] transition-all duration-200 ripple"
              >
                <Lock size={16} /> Checkout Securely
                <ArrowRight size={16} />
              </button>

              {/* Trust */}
              <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
                {['Visa', 'Mastercard', 'EasyPaisa', 'JazzCash'].map(p => (
                  <span key={p} className="font-medium">{p}</span>
                ))}
              </div>
              <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1">
                <Lock size={11} /> Secure 256-bit SSL encryption
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
