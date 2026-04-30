import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      {/* Newsletter */}
      <div className="bg-btn-gradient">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-display text-2xl font-bold">Get Exclusive Deals</h3>
            <p className="text-green-100 text-sm mt-1">Subscribe for weekly offers and new arrivals</p>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 sm:w-72 px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/60 text-sm backdrop-blur-sm"
            />
            <button className="bg-white text-brand-700 font-semibold px-5 py-3 rounded-xl hover:bg-gray-50 transition-all hover:shadow-lg active:scale-95 flex items-center gap-2 whitespace-nowrap">
              Subscribe <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-btn-gradient flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">A</span>
              </div>
              <div>
                <span className="font-display text-xl font-bold text-white">AL-Khalid</span>
                <span className="block text-[10px] text-gray-500 -mt-1 tracking-wider uppercase">Super Store</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Your neighborhood superstore with premium products at everyday prices. Quality you can trust, prices you'll love.
            </p>
            <div className="flex gap-3">
              {[FaInstagram, FaFacebook, FaTwitter].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-brand-600 transition-colors group">
                  <Icon size={16} className="text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Products', 'Deals & Offers', 'About Us', 'Blog'].map(link => (
                <li key={link}>
                  <Link to="/" className="text-sm text-gray-400 hover:text-brand-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-5">Categories</h4>
            <ul className="space-y-3">
              {['Ice Cream', 'Shampoo & Hair', 'Soaps & Skincare', 'Snacks & Sweets', 'Beverages', 'Household'].map(cat => (
                <li key={cat}>
                  <Link to="/" className="text-sm text-gray-400 hover:text-brand-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">Block 7, Gulshan-e-Iqbal, Karachi, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-400 flex-shrink-0" />
                <span className="text-sm text-gray-400">+92 321 000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-400 flex-shrink-0" />
                <span className="text-sm text-gray-400">hello@alkhalid.pk</span>
              </li>
            </ul>

            <div className="mt-6 bg-gray-800 rounded-xl p-4">
              <p className="text-xs text-gray-400 mb-1">Store Hours</p>
              <p className="text-sm text-white font-medium">Daily: 8:00 AM – 11:00 PM</p>
              <p className="text-xs text-brand-400 mt-1">🟢 Open Now</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© 2024 AL-Khalid Super Store. All rights reserved.</p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(t => (
              <a key={t} href="#" className="text-xs text-gray-500 hover:text-brand-400 transition-colors">{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
