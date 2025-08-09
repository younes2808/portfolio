import { useEffect } from "react";
import Navbar from "./Navbar";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

//Scrolling to the top off the page on Load
const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <div className="w-screen flex justify-center">
        <Navbar />
      </div>

      {/* GRID-SYSTEM */}
      <div className="max-w-6xl mx-auto px-4 py-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
