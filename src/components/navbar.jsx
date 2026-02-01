import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
 import logo from '../assets/1.png';
import { siteConfig } from './config.js';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "الرئيسيه" },
    { to: "/about", label: "عن الصيدليه" },
    { to: "/courses", label: "خدماتنا" },
    { to: "/contact", label: "اتصل بنا" }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" aria-label="Home">
            <div className="w-auto h-12 object-contain">
              <img src={logo} alt={siteConfig.siteName} className="h-12 w-auto" />
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-4 bg-white/80 backdrop-blur-md shadow-lg rounded-xl px-6 py-3">
            <ul className="flex gap-6">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="relative text-gray-700 font-medium px-2 py-1 transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:transition-all hover:after:w-full"
                    style={{
                      '--hover-text': siteConfig.colors.primary,
                      '--after-bg': siteConfig.colors.primary
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = siteConfig.colors.primary;
                      e.target.style.setProperty('--after-width', '100%');
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'rgb(55, 65, 81)';
                      e.target.style.setProperty('--after-width', '0');
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 animate-in fade-in duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block py-3 text-gray-700 hover:font-semibold transition font-medium"
                style={{ '--hover-text': siteConfig.colors.primary }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
