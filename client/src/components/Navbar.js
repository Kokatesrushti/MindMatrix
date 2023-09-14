import React from 'react';

function Navbar () {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-2xl font-semibold">Logo</a>

        <div className="space-x-4">
          <a href="#" className="text-white hover:underline">Home</a>
          <a href="#" className="text-white hover:underline">About</a>
          <a href="#" className="text-white hover:underline">Services</a>
          <a href="#" className="text-white hover:underline">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
