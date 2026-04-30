import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight, TrendingUp, Clock, ShoppingBag, Zap, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories, deals } from '../data/Product';

function HeroSection() {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      title: "Everything You Need,\nOne Store",
      sub: "Fresh groceries, daily essentials & premium products delivered to your door",
      cta: "Shop Now",
      accent: "50+ Categories",
      bg: 'bg-hero-gradient',
      emoji: '🛒',
    },
    {
      title: "Summer Ice Cream\nExtravaganza",
      sub: "Beat the heat with our cool collection of ice creams, kulfi, and frozen treats",
      cta: "Explore Ice Cream",
      accent: "30% OFF Today",
      bg: 'bg-gradient-to-br from-blue-600 to-indigo-700',
      emoji: '🍦',
    },
    {
      title: "Premium Beauty\nEssentials",
      sub: "Top brands in shampoos, soaps, and skincare — all at unbeatable prices",
      cta: "View Beauty",
      accent: "100+ Products",
      bg: 'bg-gradient-to-br from-purple-600 to-pink-600',
      emoji: '✨',
    },
  ];

  useEffect(() => {
    const t = setInterval(() => setActiveSlide(s => (s + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const slide = slides[activeSlide];

  return (
    <section className={`relative min-h-[560px] ${slide.bg} transition-all duration-700 overflow-hidden`}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-10 w-80 h-80 bg-white rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6 text-sm font-medium">
            <Zap size={14} className="text-yellow-300" />
            {slide.accent}
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5 text-white whitespace-pre-line">
            {slide.title}
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-lg leading-relaxed">
            {slide.sub}
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigate('/products')}
              className="group flex items-center gap-3 bg-white text-brand-700 font-bold px-7 py-4 rounded-2xl hover:shadow-2xl hover:scale-[1.03] active:scale-[0.97] transition-all duration-200"
            >
              {slide.cta}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate('/products')}
              className="flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-7 py-4 rounded-2xl hover:bg-white/10 transition-all duration-200 active:scale-[0.97]"
            >
              <ShoppingBag size={18} />
              Browse All
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-10 pt-8 border-t border-white/20">
            {[['10K+', 'Happy Customers'], ['52+', 'Products'], ['6', 'Categories']].map(([num, label]) => (
              <div key={label}>
                <div className="text-2xl font-bold text-white">{num}</div>
                <div className="text-xs text-white/60 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero emoji / visual */}
        <div className="flex-shrink-0 hidden md:flex items-center justify-center w-72 h-72 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20">
          <span className="text-9xl animate-bounce" style={{ animationDuration: '3s' }}>{slide.emoji}</span>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveSlide(i)}
            className={`transition-all duration-300 rounded-full ${i === activeSlide ? 'w-8 h-2 bg-white' : 'w-2 h-2 bg-white/40 hover:bg-white/60'}`}
          />
        ))}
      </div>
    </section>
  );
}

function CategorySlider() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [active, setActive] = useState('all');

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 180, behavior: 'smooth' });
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-display text-2xl font-bold text-gray-900">Shop by Category</h2>
          <p className="text-sm text-gray-500 mt-0.5">Find what you're looking for</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => scroll(-1)} className="p-2.5 rounded-xl bg-white shadow-soft hover:shadow-card hover:scale-105 active:scale-95 transition-all">
            <ChevronLeft size={18} className="text-gray-600" />
          </button>
          <button onClick={() => scroll(1)} className="p-2.5 rounded-xl bg-white shadow-soft hover:shadow-card hover:scale-105 active:scale-95 transition-all">
            <ChevronRight size={18} className="text-gray-600" />
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="category-scroll flex gap-4 overflow-x-auto pb-2">
        {categories.map((cat, i) => (
          <button
            key={cat.id}
            onClick={() => {
              setActive(cat.id);
              navigate(cat.id === 'all' ? '/products' : `/products?category=${cat.id}`);
            }}
            className={`flex-shrink-0 flex flex-col items-center gap-3 p-5 rounded-2xl transition-all duration-200 cursor-pointer
              ${active === cat.id
                ? 'bg-brand-600 shadow-green scale-105 text-white'
                : 'bg-white shadow-soft hover:shadow-card hover:scale-105 hover:-translate-y-1 text-gray-700'
              }`}
            style={{ minWidth: 100, animationDelay: `${i * 60}ms` }}
          >
            <span className="text-3xl">{cat.emoji}</span>
            <span className="text-xs font-semibold whitespace-nowrap">{cat.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

function DealsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-6" id="deals">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-display text-2xl font-bold text-gray-900">🔥 Hot Deals</h2>
          <p className="text-sm text-gray-500 mt-0.5">Limited time offers</p>
        </div>
        <Link to="/products" className="text-sm text-brand-600 font-semibold hover:text-brand-700 flex items-center gap-1 group">
          All Deals <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {deals.map((deal, i) => (
          <Link
            to={`/products?category=${deal.category}`}
            key={deal.id}
            className={`relative bg-gradient-to-br ${deal.color} rounded-2xl p-6 text-white overflow-hidden cursor-pointer hover:shadow-hover hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 fade-up`}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="absolute -right-6 -bottom-6 text-8xl opacity-20">{deal.emoji}</div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <p className="text-white/70 text-sm font-medium mb-1">{deal.title}</p>
              <p className="text-3xl font-bold mb-1">{deal.discount}</p>
              <p className="text-white/80 text-sm mb-4">{deal.desc}</p>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 text-sm font-semibold hover:bg-white/30 transition-colors">
                Shop Now <ArrowRight size={14} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function FeaturedProducts({ searchQuery }) {
  const [filter, setFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(8);

  const filtered = products.filter(p => {
    const matchSearch = searchQuery
      ? p.name.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    const matchCat = filter === 'all' ? true : p.category === filter;
    return matchSearch && matchCat;
  });

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="font-display text-2xl font-bold text-gray-900">
            {searchQuery ? `Results for "${searchQuery}"` : '🛍️ Featured Products'}
          </h2>
          <p className="text-sm text-gray-500 mt-0.5">{filtered.length} products found</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.slice(0, 4).map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
                filter === cat.id
                  ? 'bg-brand-600 text-white shadow-green'
                  : 'bg-white text-gray-600 shadow-soft hover:shadow-card hover:text-brand-600'
              }`}
            >
              {cat.emoji} {cat.name}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="font-display text-xl font-bold text-gray-700">No products found</h3>
          <p className="text-gray-400 mt-2">Try a different search term</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.slice(0, visibleCount).map((p, i) => (
              <ProductCard key={p.id} product={p} delay={i * 50} />
            ))}
          </div>
          {visibleCount < filtered.length && (
            <div className="text-center mt-10">
              <button
                onClick={() => setVisibleCount(v => v + 8)}
                className="btn-primary inline-flex items-center gap-2"
              >
                Load More Products <ArrowRight size={16} />
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}

function TrustBadges() {
  const badges = [
    { icon: '🚚', title: 'Free Delivery', desc: 'On orders over PKR 500' },
    { icon: '🔄', title: 'Easy Returns', desc: '7-day hassle-free returns' },
    { icon: '💯', title: 'Genuine Products', desc: '100% authentic brands' },
    { icon: '🔒', title: 'Secure Payment', desc: 'Multiple payment options' },
  ];
  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {badges.map((b, i) => (
          <div key={i} className="card p-5 flex flex-col items-center text-center hover:scale-[1.02] transition-all duration-200 fade-up" style={{ animationDelay: `${i * 80}ms` }}>
            <span className="text-3xl mb-3">{b.icon}</span>
            <p className="font-semibold text-sm text-gray-800">{b.title}</p>
            <p className="text-xs text-gray-400 mt-1">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('search') || '';

  useEffect(() => {
    const section = new URLSearchParams(location.search).get('section');
    if (section === 'deals') {
      document.getElementById('deals')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.search]);

  return (
    <div className="page-enter">
      <HeroSection />
      <TrustBadges />
      <CategorySlider />
      <DealsSection />
      <FeaturedProducts searchQuery={searchQuery} />
    </div>
  );
}
