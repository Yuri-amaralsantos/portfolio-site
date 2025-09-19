import AboutSection from "../sections/AboutSection.jsx";
import Header from "../sections/Header.jsx";
import ProjectsSection from "../sections/ProjectsSection.jsx";

const Home = () => {
  return (
    <div className="App">
      <div className="w-full mx-auto">
        <Header />
        <ProjectsSection />
        <AboutSection />
      </div>
    </div>
  );
};
export default Home;
