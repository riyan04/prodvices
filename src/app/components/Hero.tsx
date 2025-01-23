import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col mt-0 h-auto">
      <div className="text-center">
        <h1 className="font-bold text-[40px]">
          EMPOWERING YOUR BUSINESS WITH WEB, AI, AND MARKETING SOLUTIONS
        </h1>
      </div>
      <div className="text-center">
        <h3 className="text-muted-foreground">We build custom solutions tailored to your needs, from web development to AI and digital marketing.</h3>
      </div>
      <div className="mt-4 flex items-center justify-center h-[50px] gap-6">
        <Button asChild>
          <Link href={"#project"}>Discover our services</Link>
        </Button>
        <Button asChild variant={"outline"}> 
          <Link href={"#contact"}>Meet Us</Link>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
