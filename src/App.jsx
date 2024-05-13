import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Projects from "./components/projects/Projects";

const App = () => {
  return (
    <div className="w-full h-auto text-lightText bg-bodyColor">
      <div className="max-w-screen-2xl mx-auto px-16">
        <Navbar></Navbar>
        <Banner></Banner>
        <Features></Features>
        <Projects></Projects>
      </div>
    </div>
  );
};

export default App;