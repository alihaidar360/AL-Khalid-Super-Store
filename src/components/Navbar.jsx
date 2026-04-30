import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingCart, Search, User, Menu, X, Heart, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { products } from '../data/product';

export default function Navbar() {
  const { totalItems } = useCart();
  const { items: wishItems } = useWishlist();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchFocus, setSearchFocus] = useState(false);
  const [cartBounce, setCartBounce] = useState(false);
  const prevItems = useRef(totalItems);
  const navigate = useNavigate();
  const location = useLocation();
  const searchRef = useRef(null);

  useEffect(() => {
    if (totalItems > prevItems.current) {
      setCartBounce(true);
      setTimeout(() => setCartBounce(false), 500);
    }
    prevItems.current = totalItems;
  }, [totalItems]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (searchQuery.length > 1) {
      const results = products
        .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
        .slice(0, 5);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    const handler = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchFocus(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSearchSelect = (id) => {
    navigate(`/product/${id}`);
    setSearchQuery('');
    setSearchFocus(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      navigate(`/?search=${encodeURIComponent(searchQuery)}`);
      setSearchFocus(false);
    }
  };

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Products', to: '/products' },
    { label: 'Deals', to: '/?section=deals' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-soft py-2' : 'bg-white/80 backdrop-blur-md py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-9 h-9 rounded-xl bg-btn-gradient flex items-center justify-center shadow-green">
              <span className="text-white font-display font-bold text-lg">A</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-xl font-bold gradient-text">AL-Khalid</span>
              <span className="block text-[10px] text-gray-400 font-sans -mt-1 tracking-wider uppercase">Super Store</span>
            </div>
          </Link>

          {/* Search */}
          <div ref={searchRef} className="flex-1 relative max-w-2xl mx-auto">
            <form onSubmit={handleSearchSubmit} className="relative">
              <div className={`flex items-center bg-gray-50 border-2 rounded-full px-4 py-2.5 transition-all duration-300 ${searchFocus ? 'border-brand-500 shadow-[0_0_0_4px_rgba(22,163,74,0.12)] bg-white' : 'border-gray-100 hover:border-gray-200'}`}>
                <Search size={18} className={`flex-shrink-0 transition-colors ${searchFocus ? 'text-brand-600' : 'text-gray-400'}`} />
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocus(true)}
                  className="flex-1 bg-transparent outline-none px-3 text-sm font-medium text-gray-800 placeholder-gray-400"
                />
                {searchQuery && (
                  <button type="button" onClick={() => setSearchQuery('')} className="text-gray-300 hover:text-gray-500 transition-colors">
                    <X size={16} />
                  </button>
                )}
              </div>
            </form>

            {/* Search Dropdown */}
            {searchFocus && searchResults.length > 0 && (
              <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-2xl shadow-hover border border-gray-100 overflow-hidden z-50 animate-bounce-in">
                {searchResults.map(p => (
                  <button
                    key={p.id}
                    onClick={() => handleSearchSelect(p.id)}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-brand-50 transition-colors text-left group"
                  >
                    <img src={p.image} alt={p.name} className="w-10 h-10 object-cover rounded-lg" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-800 truncate group-hover:text-brand-700">{p.name}</p>
                      <p className="text-xs text-brand-600 font-semibold">PKR {p.price}</p>
                    </div>
                    <Search size={14} className="text-gray-300 flex-shrink-0" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Nav Links — desktop */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(l => (
              <Link key={l.label} to={l.to} className="nav-link text-sm">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Link to="/wishlist" className="relative p-2.5 rounded-xl hover:bg-brand-50 transition-colors group">
              <Heart size={20} className={`transition-all ${wishItems.length > 0 ? 'fill-rose-500 text-rose-500' : 'text-gray-500 group-hover:text-brand-600'}`} />
              {wishItems.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  {wishItems.length}
                </span>
              )}
            </Link>

            <Link to="/cart" className="relative p-2.5 rounded-xl hover:bg-brand-50 transition-colors group">
              <ShoppingCart
                size={20}
                className={`transition-all group-hover:text-brand-600 text-gray-500 ${cartBounce ? 'animate-cart-bounce' : ''}`}
              />
              {totalItems > 0 && (
                <span className={`absolute -top-1 -right-1 min-w-[18px] h-[18px] bg-brand-600 text-white text-[9px] font-bold rounded-full flex items-center justify-center px-1 ${cartBounce ? 'animate-bounce-in' : ''}`}>
                  {totalItems}
                </span>
              )}
            </Link>

            <button className="hidden sm:flex items-center gap-2 p-2.5 rounded-xl hover:bg-brand-50 transition-colors group">
              <User size={20} className="text-gray-500 group-hover:text-brand-600 transition-colors" />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="md:hidden p-2.5 rounded-xl hover:bg-brand-50 transition-colors"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-3 pb-3 border-t border-gray-100 pt-3 animate-fade-up">
            {navLinks.map(l => (
              <Link key={l.label} to={l.to} className="block py-2.5 px-2 text-gray-700 font-medium hover:text-brand-600 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
