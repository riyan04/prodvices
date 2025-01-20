'use client';

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";

type TechStack = {
  name: string;
  icon: string;
};

const techStack: TechStack[] = [
  { name: "JavaScript", icon: "🟨" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟩" },
  { name: "NestJS", icon: "🔺" },
  { name: "Docker", icon: "🐳" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MongoDB", icon: "🍃" },
  { name: "TypeORM", icon: "🛠️" },
];

const TechStackCarousel: React.FC = () => {
  return (
    <div className="w-11/12 max-w-6xl mx-auto text-center mb-5 mt-5">
      <h2 className="text-3xl font-bold mb-6">My Tech Stack</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1440: { slidesPerView: 5 },
        }}
      >
        {techStack.map((tech) => (
          <SwiperSlide
            key={tech.name}
            className="flex flex-col items-center justify-center  border  rounded-full shadow-md mb-5"
          >
            <div className="text-3xl md:text-6xl mb-4">{tech.icon}</div>
            <p className="font-semibold text-lg md:text-xl mb-4">{tech.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TechStackCarousel;
