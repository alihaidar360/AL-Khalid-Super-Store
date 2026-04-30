import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

export default function WishlistPage() {
  const { items } = useWishlist();
  const { addItem } = useCart();

  return (
    <div className="min-h-screen bg-gray-50 page-enter">
      <div className="bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <h1 className="font-display text-4xl font-bold text-white mb-1 flex items-center gap-3">
            <Heart className="fill-rose-400 text-rose-400" size={36} />
            My Wishlist
          </h1>
          <p className="text-white/70">{items.length} saved item{items.length !== 1 ? 's' : ''}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {items.length === 0 ? (
          <div className="text-center py-24">
            <div className="w-32 h-32 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart size={56} className="text-rose-300" />
            </div>
            <h2 className="font-display text-3xl font-bold text-gray-800 mb-3">Nothing here yet</h2>
            <p className="text-gray-400 mb-8">Save items you love by clicking the heart icon on any product.</p>
            <Link to="/products" className="btn-primary inline-flex items-center gap-2">
              <ShoppingCart size={18} /> Browse Products
            </Link>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-semibold text-gray-700">{items.length} Saved Items</h2>
              <button
                onClick={() => items.forEach(i => addItem(i))}
                className="btn-primary text-sm flex items-center gap-2"
              >
                <ShoppingCart size={15} /> Add All to Cart
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {items.map((p, i) => <ProductCard key={p.id} product={p} delay={i * 50} />)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
