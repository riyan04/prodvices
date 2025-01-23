
import { Hero, Projects, TechStack, } from "./components";
import AboutUs from "./components/Aboutus";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ServicesPage from "./components/OurServices";



export default function Home() {
  return (
    <div>
      <div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-100 to-white">

        <div id="hero" className="py-[50px] w-[50%] mx-auto " >
          <Hero />
        </div>
      </div>

     

      <div>
        <div id="about" className=" w-[90%] bg-white mx-auto">
          <AboutUs />
        </div>
      </div>


      <div>
        <div id="project" className=" w-[70%] mx-auto">
          <Projects />
        </div>
      </div>
      <div>
        {/* Carrousal */}
        <TechStack />
      </div>
      
      <div id="services">
      
        <ServicesPage/>
        
      </div>
      <div className=" bg-slate-50 py-6">
        {/* Offerings */}
        <div id="contact" className=" w-[90%] bg-white mx-auto">

          <Contact />
        </div>

      </div>
      <div>
      <Footer />
      </div>
    </div>
  );
}
