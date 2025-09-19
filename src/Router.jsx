import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homePage.jsx";
import ProjectPage from "./pages/projectPage.jsx";

import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";

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
