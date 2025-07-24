

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const services = [
    { label: 'Express Courier', link: '/Service' },
    { label: 'Air Freight', link: '/Service' },
    { label: 'Sea Freight', link: '/Service' },
    { label: 'Custom Clearance', link: '/Service' },
    { label: 'Warehousing', link: '/Service' },
    { label: 'Cross Border', link: '/Service' },
  ];

  const navItems = [
    { label: 'Home', link: '/' },
    { label: 'Services', dropdown: true },
    { label: 'Company', link: '/company' },
    { label: 'Contact', link: '/Contact' },
  ];

  return (
    <header className="bg-[#0B0D11] border-b border-gray-800 shadow-sm sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 flex items-center justify-between h-20">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide text-white hover:text-red-500 transition"
        >
          DOORIER
        </Link>

        {/* Nav Items */}
        <nav className="hidden md:flex space-x-10 text-gray-200 text-base font-medium items-center">
          {navItems.map(({ label, link, dropdown }) =>
            dropdown ? (
              <div
                key={label}
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 hover:text-red-500 transition">
                  {label} <ChevronDown size={16} />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full mt-3 left-0 bg-[#1A1D22] text-white border border-gray-700 rounded-xl shadow-xl w-72 p-4 z-50 transition-opacity duration-200 ${
                    isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                >
                  {services.map(({ label, link }) => (
                    <Link
                      key={label}
                      to={link}
                      className="block py-2 px-3 rounded-md hover:bg-gray-800 transition"
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
                className="hover:text-red-500 transition duration-300"
              >
                {label}
              </Link>
            )
          )}
        </nav>

        {/* CTA Button */}
        <button
onClick={() => window.location.href = "/ContactForm"}
  className="hidden md:flex items-center gap-2 bg-red-600 text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:bg-red-700 transition"
>
  Ship Now <ChevronDown size={18} />
</button>
      </div>
    </header>
  );
};

export default Navbar;