import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className="fixed w-full flex justify-center mt-4 z-20">
      <nav className=" bg-orange-500 bg-opacity-50 rounded-lg w-11/12 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-10 mr-4" />
          </div>
          <div className="flex space-x-4">
            <Link to="" className="text-white px-3 py-2 rounded-md text-sm font-medium">Map</Link>
            <Link to="/locations" className="text-white px-3 py-2 rounded-md text-sm font-medium">Locations</Link>
            <Link to="/about" className="text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
