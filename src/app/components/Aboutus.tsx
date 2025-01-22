'use client';
import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex items-center justify-center h-auto p-7 rounded-3xl border shadow-lg">
      <div className="max-w-4xl text-center">
        <h1 className="font-bold text-4xl mb-6 mt-10">About Us</h1>
        <p className="text-lg leading-7 text-gray-800 mb-4">
          We are a passionate team of IITians and AI Engineers with extensive experience in
          software, web and AI development. Our expertise lies in
          building robust, scalable, and user-friendly solutions tailored to
          meet the unique needs of our clients.
        </p>
        <p className="text-lg leading-7 text-gray-800 mb-4">
          What sets us apart is our ability to seamlessly integrate cutting-edge
          Artificial Intelligence technologies into web applications, creating
          innovative solutions that enhance user experiences and drive business
          growth.
        </p>

        <button className=' w-[10rem] h-[3rem] bg-black rounded-full mt-5 text-slate-100'>Email the Founder</button>
        <h2 className="font-bold text-2xl mt-8 mb-4 text-black">Our Mission</h2>
        <div className="text-lg leading-7 text-gray-800 space-y-4">
          <p>
            Our mission is to leverage our technical skills, creativity, and
            dedication to deliver high-quality products that make a difference.
          </p>
          <p>
            Whether it&apos;s crafting dynamic web applications, optimizing system
            performance, or embedding AI-driven functionalities, we are
            committed to excellence in everything we do.
          </p>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;
