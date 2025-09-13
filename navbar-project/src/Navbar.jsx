import { useState } from "react";
 // Replace with your logo path

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="cursor-pointer transform hover:scale-105 transition-transform duration-300">
          <img src="./src/assets/NDRIO.jpg" alt="Logo" className="h-15 w-auto rounded-2xl" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-semibold">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li
              key={item}
              className="hover:text-teal-600 transition-colors cursor-pointer relative group"
            >
              {item}
              {/* Optional underline effect */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-600 transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 px-6 text-gray-700 font-semibold">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li
              key={item}
              className="hover:text-blue-600 transition-colors cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
