import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homePage";
import ProjectPage from "./pages/projectPage";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Nav />
      <div className="h-[60px]" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
