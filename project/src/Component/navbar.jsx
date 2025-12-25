import React, { useState } from 'react';
import logo from './photos/Logo1.png';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const navItems = [
    { label: 'Home', link: '/' },
    { label: 'Services', dropdown: true },
    { label: 'Company', link: '/company' },
    { label: 'Contact', link: '/Contact' },
  ];

  const services = [
    { label: 'Express Courier', link: '/Service' },
    { label: 'Air Freight', link: '/Service' },
    { label: 'Sea Freight', link: '/Service' },
    { label: 'Custom Clearance', link: '/Service' },
    { label: 'Warehousing', link: '/Service' },
    { label: 'Cross Border', link: '/Service' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 flex items-center justify-between h-24">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Doorier Logo"
            className="h-24 md:h-28 lg:h-32 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10 text-gray-700 font-medium">
          {navItems.map(({ label, link, dropdown }) =>
            dropdown ? (
              <div key={label} className="relative group">
                <button className="flex items-center gap-1 hover:text-blue-600 transition">
                  {label}
                  <ChevronDown
                    size={16}
                    className="transition-transform group-hover:rotate-180"
                  />
                </button>

                {/* Dropdown */}
                <div className="absolute top-full left-0 mt-4 w-72 bg-white border border-gray-200 rounded-xl shadow-xl
                                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                transition-all duration-200">
                  {services.map(({ label, link }) => (
                    <Link
                      key={label}
                      to={link}
                      className="block px-4 py-2 rounded-md hover:bg-gray-100 transition"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={label}
                to={link}
                className="hover:text-blue-600 transition"
              >
                {label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <button
          onClick={() => (window.location.href = '/ContactForm')}
          className="hidden md:flex items-center gap-2 bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Ship Now
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-50 px-6 py-4 space-y-4 border-t">

          {navItems.map(({ label, link, dropdown }) =>
            dropdown ? (
              <div key={label}>
                <button
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                  className="flex w-full items-center justify-between font-medium"
                >
                  {label}
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${isMobileDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isMobileDropdownOpen && (
                  <div className="mt-2 pl-4 space-y-2">
                    {services.map(({ label, link }) => (
                      <Link
                        key={label}
                        to={link}
                        className="block text-sm hover:text-blue-600"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={label}
                to={link}
                className="block hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </Link>
            )
          )}

          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              window.location.href = '/ContactForm';
            }}
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Ship Now
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;