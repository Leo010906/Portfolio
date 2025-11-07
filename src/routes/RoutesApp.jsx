import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import ProjectDetails from "../pages/Details";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
