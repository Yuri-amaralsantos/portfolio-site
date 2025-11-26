import React from "react";
import AboutSection from "../sections/AboutSection";
import Header from "../sections/Header";
import ProjectsSection from "../sections/ProjectsSection";

const Home: React.FC = () => {
  return (
    <div className="App">
      <div className="w-full mx-auto">
        <Header />

        <div className="absolute inset-40 z-0 flex justify-center">
          <div className="w-[700px] h-[700px] bg-blue-400/20  blur-2xl rounded-full"></div>
        </div>
        <ProjectsSection />
        <AboutSection />
      </div>
    </div>
  );
};

export default Home;
