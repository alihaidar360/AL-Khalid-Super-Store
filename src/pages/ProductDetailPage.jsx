import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, Star, ChevronLeft, Check, Truck, RotateCcw, Shield, Plus, Minus, Share2 } from 'lucide-react';
import { products, categories } from '../data/Product';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';

function StarRating({ rating, reviews }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            size={16}
            className={i < Math.floor(rating) ? 'fill-amber-400 text-amber-400' : i < rating ? 'fill-amber-200 text-amber-300' : 'text-gray-200 fill-gray-200'}
          />
        ))}
      </div>
      <span className="text-sm font-semibold text-gray-700">{rating}</span>
      <span className="text-sm text-gray-400">({reviews} reviews)</span>
    </div>
  );
}

function ReviewCard({ name, rating, comment, date }) {
  return (
    <div className="border border-gray-100 rounded-2xl p-5 hover:shadow-card transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-btn-gradient flex items-center justify-center text-white font-bold text-sm">
            {name[0]}
          </div>
          <div>
            <p className="font-semibold text-sm text-gray-800">{name}</p>
            <p className="text-xs text-gray-400">{date}</p>
          </div>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: rating }, (_, i) => (
            <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
          ))}
        </div>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">{comment}</p>
      <button className="mt-3 text-xs text-gray-400 hover:text-brand-600 transition-colors">👍 Helpful (3)</button>
    </div>
  );
}

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const { addItem } = useCart();
  const { toggle, isWishlisted } = useWishlist();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [imgIdx, setImgIdx] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="font-display text-2xl font-bold text-gray-700">Product Not Found</h2>
          <Link to="/" className="btn-primary mt-5 inline-block">Go Home</Link>
        </div>
      </div>
    );
  }

  const images = [product.image, product.image, product.image, product.image];

  const handleAdd = () => {
    if (!product.inStock) return;
    for (let i = 0; i < qty; i++) addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const mockReviews = [
    { name: 'Sarah Ahmed', rating: 5, comment: 'Absolutely love this product! Great quality and amazing value for money. Will definitely buy again.', date: 'March 15, 2024' },
    { name: 'Muhammad Ali', rating: 4, comment: 'Good product, exactly as described. Delivery was quick and packaging was excellent.', date: 'March 10, 2024' },
    { name: 'Fatima Khan', rating: 5, comment: 'Best purchase I made this month! Highly recommend to everyone.', date: 'February 28, 2024' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 page-enter">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link to="/" className="hover:text-brand-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-brand-600 transition-colors">Products</Link>
          <span>/</span>
          <Link to={`/products?category=${product.category}`} className="hover:text-brand-600 transition-colors capitalize">{product.category.replace('-', ' ')}</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium truncate max-w-[200px]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="card overflow-hidden bg-gradient-to-br from-gray-50 to-brand-50 aspect-square flex items-center justify-center relative group">
              <img
                src={product.image}
                alt={product.name}
                className="w-3/4 h-3/4 object-contain transition-transform duration-500 group-hover:scale-110"
              />
              {product.discount > 0 && (
                <div className="absolute top-5 left-5 bg-accent text-gray-800 font-bold text-sm px-3 py-1.5 rounded-full">
                  -{product.discount}% OFF
                </div>
              )}
            </div>
            <div className="grid grid-cols-4 gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setImgIdx(i)}
                  className={`card p-2 aspect-square flex items-center justify-center overflow-hidden transition-all duration-200 hover:scale-105
                    ${imgIdx === i ? 'ring-2 ring-brand-500 shadow-green' : ''}`}
                >
                  <img src={img} alt="" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold text-brand-600 uppercase tracking-wider bg-brand-50 px-3 py-1 rounded-full capitalize">
                  {product.category.replace('-', ' ')}
                </span>
                {product.badge && (
                  <span className="text-xs font-semibold text-white bg-amber-500 px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>
              <h1 className="font-display text-3xl font-bold text-gray-900 leading-tight">{product.name}</h1>
            </div>

            <StarRating rating={product.rating} reviews={product.reviews} />

            {/* Price */}
            <div className="flex items-end gap-4 p-5 bg-brand-50 rounded-2xl">
              <div>
                <p className="text-xs text-gray-500 mb-1">Price</p>
                <span className="text-4xl font-bold text-gray-900">PKR {product.price}</span>
              </div>
              {product.originalPrice && (
                <div>
                  <p className="text-xs text-gray-400 mb-1">Was</p>
                  <span className="text-xl text-gray-400 line-through">PKR {product.originalPrice}</span>
                </div>
              )}
              {product.discount > 0 && (
                <span className="ml-auto bg-emerald-500 text-white text-sm font-bold px-3 py-1.5 rounded-xl">
                  Save PKR {product.originalPrice - product.price}
                </span>
              )}
            </div>

            {/* Stock */}
            <div className={`flex items-center gap-2 text-sm font-medium ${product.inStock ? 'text-emerald-600' : 'text-rose-500'}`}>
              <div className={`w-2.5 h-2.5 rounded-full ${product.inStock ? 'bg-emerald-500 animate-pulse' : 'bg-rose-400'}`} />
              {product.inStock ? 'In Stock — Ready to ship' : 'Out of Stock'}
            </div>

            {/* Qty + Add to Cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-0 bg-white border border-gray-200 rounded-xl overflow-hidden shadow-soft">
                <button
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  className="p-3 hover:bg-gray-50 active:bg-gray-100 transition-colors"
                >
                  <Minus size={16} className="text-gray-600" />
                </button>
                <span className="w-12 text-center font-bold text-gray-800 text-sm">{qty}</span>
                <button
                  onClick={() => setQty(q => q + 1)}
                  className="p-3 hover:bg-gray-50 active:bg-gray-100 transition-colors"
                >
                  <Plus size={16} className="text-gray-600" />
                </button>
              </div>

              <button
                onClick={handleAdd}
                disabled={!product.inStock}
                className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-2xl font-bold text-base transition-all duration-200 ripple
                  ${product.inStock
                    ? added
                      ? 'bg-emerald-500 text-white scale-[0.97]'
                      : 'bg-btn-gradient text-white shadow-green hover:shadow-green-lg hover:scale-[1.02] active:scale-[0.97]'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
              >
                {added ? <><Check size={18} /> Added to Cart!</> : <><ShoppingCart size={18} /> Add to Cart</>}
              </button>

              <button
                onClick={() => toggle(product)}
                className="p-4 rounded-2xl border border-gray-200 bg-white hover:border-rose-300 hover:bg-rose-50 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <Heart size={20} className={isWishlisted(product.id) ? 'fill-rose-500 text-rose-500' : 'text-gray-400'} />
              </button>

              <button className="p-4 rounded-2xl border border-gray-200 bg-white hover:border-brand-300 hover:bg-brand-50 transition-all duration-200 hover:scale-105 active:scale-95">
                <Share2 size={20} className="text-gray-400" />
              </button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: <Truck size={16} />, text: 'Free Delivery', sub: 'Over PKR 500' },
                { icon: <RotateCcw size={16} />, text: 'Easy Returns', sub: '7-Day Policy' },
                { icon: <Shield size={16} />, text: 'Genuine', sub: '100% Authentic' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center p-3 bg-gray-50 rounded-xl hover:bg-brand-50 transition-colors">
                  <span className="text-brand-600 mb-1.5">{item.icon}</span>
                  <p className="text-xs font-semibold text-gray-700">{item.text}</p>
                  <p className="text-[10px] text-gray-400">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <div className="flex gap-1 bg-gray-100 p-1 rounded-2xl w-fit mb-8">
            {['description', 'reviews'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold capitalize transition-all duration-200 ${
                  activeTab === tab ? 'bg-white shadow-soft text-brand-700' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab} {tab === 'reviews' && `(${product.reviews})`}
              </button>
            ))}
          </div>

          {activeTab === 'description' ? (
            <div className="card p-8 max-w-3xl">
              <h3 className="font-display text-xl font-bold text-gray-800 mb-4">Product Description</h3>
              <p className="text-gray-600 leading-relaxed text-sm mb-4">{product.description}</p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  ['Category', product.category.replace('-', ' ')],
                  ['Rating', `${product.rating} / 5.0`],
                  ['Reviews', product.reviews],
                  ['Availability', product.inStock ? 'In Stock' : 'Out of Stock'],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <span className="text-xs font-semibold text-gray-400 uppercase w-24">{k}</span>
                    <span className="text-sm font-medium text-gray-700 capitalize">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4 max-w-3xl">
              <div className="card p-6 flex items-center gap-6 mb-6">
                <div className="text-center">
                  <p className="text-5xl font-bold text-gray-900">{product.rating}</p>
                  <StarRating rating={product.rating} reviews={product.reviews} />
                  <p className="text-xs text-gray-400 mt-1">Overall Rating</p>
                </div>
                <div className="flex-1 space-y-2">
                  {[5,4,3,2,1].map(n => (
                    <div key={n} className="flex items-center gap-3">
                      <span className="text-xs text-gray-500 w-4">{n}★</span>
                      <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                        <div className="h-2 bg-amber-400 rounded-full" style={{ width: `${Math.random() * 60 + 10}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {mockReviews.map((r, i) => <ReviewCard key={i} {...r} />)}
            </div>
          )}
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((p, i) => <ProductCard key={p.id} product={p} delay={i * 60} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
