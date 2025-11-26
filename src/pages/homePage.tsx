import React from "react";
import Header from "../sections/Header";
import ProjectsSection from "../sections/ProjectsSection";

const Home: React.FC = () => {
  return (
    <div className="App">
      <div className="w-full mx-auto">
        <Header />

        <div className="absolute inset-40 z-0 flex justify-center">
          <div className="w-[700px] h-[700px] bg-blue-500/20  blur-2xl rounded-full"></div>
        </div>
        <ProjectsSection />
      </div>
    </div>
  );
};

export default Home;
