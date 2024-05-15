import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";
import Skill from "./components/skill/Skill";
import Testimonials from "./components/testimonails/Testimonials";

const App = () => {
  return (
    <div className="w-full h-auto text-lightText bg-bodyColor">
      <div className="max-w-screen-xl mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
        <Features></Features>
        <Projects></Projects>
        <Skill></Skill>
        <Testimonials></Testimonials>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;