import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold tracking-wide">B16</h1>

      <ul className="flex gap-8 text-lg">
        <li className="hover:text-yellow-300 cursor-pointer">Home</li>
        <li className="hover:text-yellow-300 cursor-pointer">Services</li>
        <li className="hover:text-yellow-300 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;