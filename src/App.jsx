import Companies from "./components/Companies";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Overview from "./components/Overview";

function App() {
  return (
    <div className="px-40 font-poppins">
      <NavBar />
      <Hero />
      <Companies />
      <Overview />
    </div>
  );
}

export default App;
