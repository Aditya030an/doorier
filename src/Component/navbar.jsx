

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { ChevronDown } from 'lucide-react';

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const services = [
//     { label: 'Express Courier', link: '/Service' },
//     { label: 'Air Freight', link: '/Service' },
//     { label: 'Sea Freight', link: '/Service' },
//     { label: 'Custom Clearance', link: '/Service' },
//     { label: 'Warehousing', link: '/Service' },
//     { label: 'Cross Border', link: '/Service' },
//   ];

//   const navItems = [
//     { label: 'Home', link: '/' },
//     { label: 'Services', dropdown: true },
//     { label: 'Company', link: '/company' },
//     { label: 'Contact', link: '/Contact' },
//   ];

//   return (
//     <header className="bg-[#0B0D11] border-b border-gray-800 shadow-sm sticky top-0 z-50">
//       <div className="max-w-[1440px] mx-auto px-6 md:px-20 flex items-center justify-between h-20">
//         {/* Logo */}
//         <Link
//           to="/"
//           className="text-2xl font-bold tracking-wide text-white hover:text-red-500 transition"
//         >
//           DOORIER
//         </Link>

//         {/* Nav Items */}
//         <nav className="hidden md:flex space-x-10 text-gray-200 text-base font-medium items-center">
//           {navItems.map(({ label, link, dropdown }) =>
//             dropdown ? (
//               <div
//                 key={label}
//                 className="relative"
//                 onMouseEnter={() => setIsDropdownOpen(true)}
//                 onMouseLeave={() => setIsDropdownOpen(false)}
//               >
//                 <button className="flex items-center gap-1 hover:text-red-500 transition">
//                   {label} <ChevronDown size={16} />
//                 </button>

//                 {/* Dropdown Menu */}
//                 <div
//                   className={`absolute top-full mt-3 left-0 bg-[#1A1D22] text-white border border-gray-700 rounded-xl shadow-xl w-72 p-4 z-50 transition-opacity duration-200 ${
//                     isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
//                   }`}
//                 >
//                   {services.map(({ label, link }) => (
//                     <Link
//                       key={label}
//                       to={link}
//                       className="block py-2 px-3 rounded-md hover:bg-gray-800 transition"
//                     >
//                       {label}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             ) : (
//               <Link
//                 key={label}
//                 to={link}
//                 className="hover:text-red-500 transition duration-300"
//               >
//                 {label}
//               </Link>
//             )
//           )}
//         </nav>

//         {/* CTA Button */}
//         <button
// onClick={() => window.location.href = "/ContactForm"}
//   className="hidden md:flex items-center gap-2 bg-red-600 text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:bg-red-700 transition"
// >
//   Ship Now <ChevronDown size={18} />
// </button>
//       </div>
//     </header>
//   );
// };

// export default Navbar;







import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

        {/* Desktop Nav */}
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

        {/* CTA (Desktop) */}
        <button
          onClick={() => (window.location.href = '/ContactForm')}
          className="hidden md:flex items-center gap-2 bg-red-600 text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:bg-red-700 transition"
        >
          Ship Now <ChevronDown size={18} />
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1A1D22] text-white px-6 py-4 space-y-4">
          {navItems.map(({ label, link, dropdown }) =>
            dropdown ? (
              <div key={label}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center justify-between w-full hover:text-red-500"
                >
                  {label}
                  <ChevronDown
                    className={`transform transition-transform ${
                      isDropdownOpen ? 'rotate-180' : ''
                    }`}
                    size={18}
                  />
                </button>
                {isDropdownOpen && (
                  <div className="mt-2 pl-4 space-y-2">
                    {services.map(({ label, link }) => (
                      <Link
                        key={label}
                        to={link}
                        className="block text-sm hover:text-red-400"
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
                className="block hover:text-red-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </Link>
            )
          )}

          {/* CTA (Mobile) */}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              window.location.href = '/ContactForm';
            }}
            className="w-full bg-red-600 mt-4 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-red-700 transition"
          >
            Ship Now
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
