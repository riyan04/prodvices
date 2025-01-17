import { Hero, Navbar, TechStack } from "./components";


export default function Home() {
  return (
    <div className=" bg-slate-50 h-screen">
      {/* NAV */}
      <div className=" pt-2">
        <Navbar />
      </div>

      {/* HERO */}
      <div>
        {/* Hero */}
        <Hero />
      </div>

      <div>
        {/* Carrousal */}
        <TechStack />
      </div>

      <div>
        {/* Offerings */}
        
      </div>
      <div>
        {/* Projects */}

      </div>
      <div>
        {/* CTA */}
      </div>
    </div>
  );
}
