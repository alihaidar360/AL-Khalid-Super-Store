import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SlidersHorizontal, Grid3X3, List, Search } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/Product';

export default function ProductsPage() {
  const location = useLocation();
  const queryCategory = new URLSearchParams(location.search).get('category') || 'all';
  const querySearch = new URLSearchParams(location.search).get('search') || '';

  const [search, setSearch] = useState(querySearch);
  const [category, setCategory] = useState(queryCategory);
  const [sortBy, setSortBy] = useState('default');
  const [gridCols, setGridCols] = useState(4);
  const [priceRange, setPriceRange] = useState([0, 2000]);

  useEffect(() => {
    setCategory(queryCategory);
  }, [queryCategory]);

  let filtered = products.filter(p => {
    const matchCat = category === 'all' ? true : p.category === category;
    const matchSearch = search ? p.name.toLowerCase().includes(search.toLowerCase()) : true;
    const matchPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
    return matchCat && matchSearch && matchPrice;
  });

  if (sortBy === 'price-asc') filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sortBy === 'price-desc') filtered = [...filtered].sort((a, b) => b.price - a.price);
  if (sortBy === 'rating') filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  if (sortBy === 'discount') filtered = [...filtered].sort((a, b) => b.discount - a.discount);

  return (
    <div className="min-h-screen bg-gray-50 page-enter">
      {/* Header */}
      <div className="bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="font-display text-4xl font-bold text-white mb-2">All Products</h1>
          <p className="text-white/70 text-sm">{filtered.length} products available</p>
          {/* Search */}
          <div className="mt-6 max-w-lg">
            <div className="flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-5 py-3 gap-3">
              <Search size={18} className="text-white/60" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="flex-1 bg-transparent text-white placeholder-white/50 outline-none text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-60 flex-shrink-0">
            <div className="card p-5 sticky top-24">
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-gray-100">
                <SlidersHorizontal size={16} className="text-brand-600" />
                <h3 className="font-semibold text-gray-800">Filters</h3>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Category</p>
                <div className="space-y-1">
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setCategory(cat.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-150
                        ${category === cat.id
                          ? 'bg-brand-50 text-brand-700 font-semibold border border-brand-200'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                    >
                      <span className="text-base">{cat.emoji}</span>
                      <span className="flex-1 text-left">{cat.name}</span>
                      <span className="text-xs text-gray-400">
                        {cat.id === 'all' ? products.length : products.filter(p => p.category === cat.id).length}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Max Price</p>
                <input
                  type="range"
                  min={0}
                  max={2000}
                  value={priceRange[1]}
                  onChange={e => setPriceRange([0, Number(e.target.value)])}
                  className="w-full accent-brand-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>PKR 0</span>
                  <span className="font-semibold text-brand-600">PKR {priceRange[1]}</span>
                </div>
              </div>

              {/* In Stock toggle */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Availability</p>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="accent-brand-600 w-4 h-4 rounded" />
                  <span className="text-sm text-gray-600">In Stock Only</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Products */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
              <p className="text-sm text-gray-500">
                Showing <span className="font-semibold text-gray-800">{filtered.length}</span> results
              </p>
              <div className="flex items-center gap-3">
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:border-brand-400 text-gray-700"
                >
                  <option value="default">Sort: Default</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="discount">Best Discount</option>
                </select>
                <div className="flex gap-1 bg-white rounded-xl p-1 shadow-soft">
                  {[3, 4].map(n => (
                    <button
                      key={n}
                      onClick={() => setGridCols(n)}
                      className={`p-2 rounded-lg transition-all ${gridCols === n ? 'bg-brand-600 text-white' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                      <Grid3X3 size={16} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-24 card">
                <div className="text-6xl mb-4">😔</div>
                <h3 className="font-display text-xl font-bold text-gray-700">No products found</h3>
                <p className="text-gray-400 mt-2 mb-5">Try adjusting your filters</p>
                <button onClick={() => { setCategory('all'); setSearch(''); setPriceRange([0, 2000]); }}
                  className="btn-primary">
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className={`grid gap-5 ${gridCols === 4 ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
                {filtered.map((p, i) => (
                  <ProductCard key={p.id} product={p} delay={i * 40} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
