import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/homePage";
import ProjectPage from "../src/pages/projectPage";

import Nav from "../src/components/Nav";
import Footer from "../src/components/Footer";

const AppRouter = () => {
  return (
    <Router>
      <Nav />

      <div className="h-[60px]" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
