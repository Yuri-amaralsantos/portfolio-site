import AboutSection from "../sections/AboutSection";
import Header from "../sections/Header";
import ProjectsSection from "../sections/ProjectsSection";

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
