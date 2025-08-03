import AboutSection from "../sections/aboutSection";
import Header from "../sections/Header";
import ProjectsSection from "../sections/ProjectSection";
import SkillSection from "../sections/SkillSection";

const Home = () => {
  return (
    <div className="App">
      <div className="w-full mx-auto">
        <Header />
        <ProjectsSection />
        <AboutSection />
        <SkillSection />
      </div>
    </div>
  );
};
export default Home;
