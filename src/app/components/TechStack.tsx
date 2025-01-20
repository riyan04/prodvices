'use client';

import React from "react";
import Autoplay from "embla-carousel-autoplay"



import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

type TechStack = {
  // name: string;
  // icon: string;
  src: string
};

const techStack: TechStack[] = [
  // { name: "JavaScript", icon: "🟨" },
  // { name: "React", icon: "⚛️" },
  // { name: "Node.js", icon: "🟩" },
  // { name: "NestJS", icon: "🔺" },
  // { name: "Docker", icon: "🐳" },
  // { name: "PostgreSQL", icon: "🐘" },
  // { name: "MongoDB", icon: "🍃" },
  // { name: "TypeORM", icon: "🛠️" },
  {src: "logo-javascript.svg"},
  {src: "prisma-2.svg"},
  {src: "docker-3.svg"},
  {src: "mongodb-icon-2.svg"},
  {src: "nest.svg"},
];


const TechStackCarousel = () => {
  return (
    
    <Carousel
      opts={{
        loop: true
      }}
     plugins={[
      Autoplay({
        delay: 2000,
      }),
    ]} className="w-full">
      <CarouselContent className="ml-1">
        {techStack.map((tech, index) => (
          <CarouselItem key={index} className="pl-1 my-auto sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
            <div className=" p-5  ">
              <Card className=" border-none shadow-none lg:w-40">
                <CardContent className="flex items-center justify-center p-6">
                      <Image className=" shadow-md" src={tech.src} alt="tech" width={70} height={70} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>

  );
};

export default TechStackCarousel
