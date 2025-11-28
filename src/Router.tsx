import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homePage";
import ProjectPage from "./pages/projectPage";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
/* import GamePage from "./pages/gamePage"; */

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/games" element={<GamePage />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
