import React, { useState } from 'react';
import logo from '../assets/NDRIO_LOGO.png';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProgramsDropdownOpen, setIsProgramsDropdownOpen] = useState(false);

  // Define the navigation links and their purpose
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { 
      name: 'Programs', 
      href: '#',
      dropdown: [
        { name: 'Advanced Research', href: '#advanced-research' },
        { name: 'Direct Pathway to IITs', href: '#iit-pathway' },
        { name: 'Skill Development', href: '#skill-development' },
        { name: 'Incubation', href: '#incubation' },
        { name: 'Govt. Partnerships', href: '#govt-partnerships' },
        { name: 'Survey Insights', href: '#survey' },
      ]
    },
    { name: 'News & Events', href: '#news' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const toggleProgramsDropdown = () => {
    setIsProgramsDropdownOpen(!isProgramsDropdownOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
        
              <img
                className="h-25 w-auto"
                src={logo}
                alt="NDRIO Logo"
              />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:block">
            <div className="flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <a
                    href={link.href}
                    className="text-slate-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                  {link.dropdown && (
                    <div className="absolute left-0 mt-2 w-48 bg-white border border-slate-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform scale-95 group-hover:scale-100">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button for Desktop */}
          <div className="hidden lg:block">
            <a
              href="#Login"
              className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-teal-700 shadow-md"
            >
              Login
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex lg:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-teal-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger menu icon */}
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <>
                    <button
                      onClick={toggleProgramsDropdown}
                      className="text-slate-700 hover:bg-slate-100 block px-3 py-2 rounded-md text-base font-medium transition-colors w-full text-left items-center justify-between"
                    >
                      {link.name}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isProgramsDropdownOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {isProgramsDropdownOpen && (
                      <div className="pl-6 pt-1 space-y-1">
                        {link.dropdown.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="text-slate-700 hover:bg-slate-100 block px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={link.href}
                    className="text-slate-700 hover:bg-slate-100 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
            <a
              href="#Login"
              className="mt-2 bg-teal-600 text-white block px-3 py-2 rounded-md text-base font-medium text-center transition-all hover:bg-teal-700 shadow-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
