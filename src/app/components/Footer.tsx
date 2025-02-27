'use client';
import React from 'react';


const Footer = () => {
  return (
    <footer className="flex items-center justify-between p-6">
      {/* Left Section: Logo */}
      <div className="flex items-center">
        
        <span className="text-lg font-bold">Prodvices</span>
      </div>

      {/* Center Section: Email Input */}
      {/* <div className="flex items-center justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 rounded-md text-black focus:ring-2 focus:ring-blue-500"
        />
        <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Subscribe
        </button>
      </div> */}

      {/* Right Section: Text */}
      <div className="text-right">
        <p className="text-sm">© {new Date().getFullYear()} Prodvices. All rights reserved.</p>
        <p className="text-sm">Powered by Prodvices</p>
      </div>
    </footer>
  );
};

export default Footer;
