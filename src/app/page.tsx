
import { Hero, TechStack, } from "./components";
import AboutUs from "./components/Aboutus";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



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

      <div>
        <div className=" w-[90%] bg-white mx-auto">
          <AboutUs />
        </div>


      </div>
      <div className=" bg-slate-50 py-6">
        {/* Offerings */}
        <div className=" w-[90%] bg-white mx-auto">

          <Contact />
        </div>

      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
