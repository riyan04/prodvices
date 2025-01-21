'use client';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full h-[10rem] flex items-center justify-between p-6 shadow-xl rounded-t-2xl border bg-white mt-5">
    
      <div className="flex items-center">
       
        <h1 className="text-2xl font-bold">Prodvices</h1>
      </div>

      {/* Center Section: Email Input */}
      <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
  <input
    type="email"
    placeholder="Enter your email"
    className="p-2 flex-1 text-black focus:outline-none"
  />
  <button className="px-4 py-2 bg-black text-white rounded-full">
    Subscribe
  </button>
</div>


      {/* Right Section: Text */}
      <div className="text-right">
        <p className="text-sm">© {new Date().getFullYear()} YourBrand. All rights reserved.</p>
        <p className="text-sm">Powered by Prodvices</p>
      </div>
    </footer>
  );
};

export default Footer;
