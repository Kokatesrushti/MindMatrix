import React from 'react';

function Navbar () {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-2xl font-semibold">Logo</a>

        <div className="space-x-4">
          <a href="/" className="text-white hover:underline">Home</a>
          <a href="/register" className="text-white hover:underline">Register</a>
          <a href="/login" className="text-white hover:underline">Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
