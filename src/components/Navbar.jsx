import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa'; // Import the down arrow icon from react-icons

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <a className="flex flex-shrink-0 items-center mr-4" href="/index.html">
              <img className="h-10 w-auto" src="images/logo.png" alt="Logo" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                Firewall configuration and Management
              </span>
            </a>
            <div className="md:ml-auto">
              <div className="flex space-x-2 relative">
                <a
                  href="/index.html"
                  className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >
                  Home
                </a>
                <button
                  onClick={toggleDropdown}
                  className="flex items-center text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >
                  Features <FaCaretDown className="ml-1" />
                </button>
                {isDropdownOpen && (
                  <div
                    className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                    style={{ top: '100%', marginTop: '8px' }} // Adjust the margin-top for dropdown positioning
                  >
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Release Management</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Audit Rules</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Backup and Recovery</a>
                    </div>
                  </div>
                )}
                <a
                  href="/add-template.html"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >
                  Add custom template
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
