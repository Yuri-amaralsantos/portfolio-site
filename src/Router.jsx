import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/homePage";
import ProjectPage from "../src/pages/projectPage";
import AboutPage from "../src/pages/aboutPage";

import Nav from "../src/components/Nav";
import Footer from "../src/components/Footer";

// Mapping pages dynamically

const AppRouter = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
