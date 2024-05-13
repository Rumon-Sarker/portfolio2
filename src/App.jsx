import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Projects from "./components/projects/Projects";
import Skill from "./components/skill/Skill";
import Testimonials from "./components/testimonails/Testimonials";

const App = () => {
  return (
    <div className="w-full h-auto text-lightText bg-bodyColor">
      <div className="max-w-screen-2xl mx-auto px-16">
        <Navbar></Navbar>
        <Banner></Banner>
        <Features></Features>
        <Projects></Projects>
        <Skill></Skill>
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default App;