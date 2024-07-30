import Companies from "./components/Companies";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Testimonials from "./components/Testimonials";
import About from "./components/About";

function App() {
  return (
    <div className="font-poppins">
      <NavBar />
      <Hero />
      <Companies />
      <About />
      <CTA />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
