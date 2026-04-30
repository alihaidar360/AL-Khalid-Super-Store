import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function ProductCard({ product, delay = 0 }) {
  const { addItem } = useCart();
  const { toggle, isWishlisted } = useWishlist();
  const [adding, setAdding] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!product.inStock) return;
    setAdding(true);
    addItem(product);
    setTimeout(() => setAdding(false), 600);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggle(product);
  };

  const wished = isWishlisted(product.id);
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.floor(product.rating));

  const badgeColors = {
    'Best Seller': 'bg-amber-500',
    'Premium': 'bg-purple-600',
    'Sale': 'bg-rose-500',
    'New': 'bg-blue-500',
    'Top Rated': 'bg-orange-500',
    'Local Pick': 'bg-brand-600',
    'Fan Fav': 'bg-pink-500',
    'Value': 'bg-teal-500',
    'Herbal': 'bg-green-700',
    'Energy': 'bg-yellow-500',
    'Healthy': 'bg-emerald-500',
    'Classic': 'bg-red-500',
    'Bestseller': 'bg-indigo-500',
    'Choco': 'bg-amber-700',
    'Effective': 'bg-cyan-600',
    'Disinfectant': 'bg-blue-600',
    'Loved': 'bg-rose-600',
    'Top Pick': 'bg-orange-600',
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="product-card card overflow-hidden flex flex-col cursor-pointer group fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-brand-50 rounded-t-2xl h-52">
        <img
          src={imgError ? `https://via.placeholder.com/400x300/f0fdf4/16a34a?text=${encodeURIComponent(product.name)}` : product.image}
          alt={product.name}
          className="product-card-img p-4"
          onError={() => setImgError(true)}
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />

        {/* Badges */}
        {product.badge && (
          <span className={`absolute top-3 left-3 text-[10px] font-bold text-white px-2.5 py-1 rounded-full ${badgeColors[product.badge] || 'bg-brand-600'}`}>
            {product.badge}
          </span>
        )}
        {product.discount > 0 && (
          <span className="absolute top-3 right-3 text-[10px] font-bold bg-accent text-gray-800 px-2 py-1 rounded-full">
            -{product.discount}%
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-white/70 flex items-center justify-center rounded-t-2xl">
            <span className="bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-full">Out of Stock</span>
          </div>
        )}

        {/* Wishlist */}
        <button
          onClick={handleWishlist}
          className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full shadow-soft flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 opacity-0 group-hover:opacity-100"
          style={{ top: product.discount > 0 ? '2.75rem' : '0.75rem' }}
        >
          <Heart
            size={14}
            className={`transition-all ${wished ? 'fill-rose-500 text-rose-500' : 'text-gray-400 hover:text-rose-400'}`}
          />
        </button>

        {/* Quick view */}
        <div className="absolute bottom-0 left-0 right-0 flex gap-2 px-3 pb-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleAdd}
            disabled={!product.inStock}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold text-white transition-all duration-200 ripple
              ${product.inStock
                ? 'bg-btn-gradient hover:shadow-green active:scale-95'
                : 'bg-gray-300 cursor-not-allowed'
              } ${adding ? 'scale-95' : ''}`}
          >
            <ShoppingCart size={13} />
            {adding ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-[11px] text-brand-600 font-semibold uppercase tracking-wider mb-1 capitalize">
          {product.category.replace('-', ' ')}
        </p>
        <h3 className="text-sm font-semibold text-gray-800 leading-snug line-clamp-2 mb-2 group-hover:text-brand-700 transition-colors">
          {product.name}
        </h3>

        {/* Stars */}
        <div className="flex items-center gap-1 mb-3">
          {stars.map((filled, i) => (
            <Star
              key={i}
              size={11}
              className={filled ? 'fill-amber-400 text-amber-400' : 'text-gray-200 fill-gray-200'}
            />
          ))}
          <span className="text-[10px] text-gray-400 ml-1">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="mt-auto flex items-center justify-between">
          <div>
            <span className="text-base font-bold text-gray-900">PKR {product.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through ml-1.5">{product.originalPrice}</span>
            )}
          </div>
          {product.discount > 0 && (
            <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
              Save {product.discount}%
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
