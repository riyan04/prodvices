
import { Hero, TechStack, } from "./components";
import Contact from "./components/Contact";



export default function Home() {
  return (
    <div>
      <div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-100 to-white">

        <div className="py-[150px] w-[50%] mx-auto " >
          <Hero />
        </div>
      </div>

      <div>
        {/* Carrousal */}
        <TechStack />
      </div>

      <div className=" bg-slate-50 py-6">
        {/* Offerings */}
        <div className=" w-[90%] bg-white mx-auto">

          <Contact />
        </div>

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
