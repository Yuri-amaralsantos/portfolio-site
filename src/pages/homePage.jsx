import AboutSection from "../sections/aboutSection";
import Header from "../sections/Header";
import ProjectsSection from "../sections/ProjectSection";
import Skills from "../sections/Skills";

const Home = () => {
  return (
    <div className="App">
      <Header />
      <ProjectsSection />
      <AboutSection />
      <Skills />
    </div>
  );
};
export default Home;
