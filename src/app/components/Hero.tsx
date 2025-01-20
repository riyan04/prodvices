// import Image from "next/image"

import { Button } from "@/components/ui/button"


const Hero = () => {
  return (
    <div className=" flex flex-col gap-3">
        <div className=" text-center">
            <h1 className=" font-bold text-[40px]">
              YOUR PARTNER TO BUILD RELAIABLE WEB AND AI SOLUTIONS
            </h1>
        </div>
        <div className="text-center">
          <h3 className=" text-muted-foreground">We build custom AI solutions for your specific needs.</h3>
        </div>
        <div className=" mt-4 flex items-center justify-center h-[50px] gap-6">
          <Button>
            Discover our services
          </Button>
          <Button variant={"outline"}> 
            Meet Us
          </Button>
        </div>
    </div>
  )
}

export default Hero