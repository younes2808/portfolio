// components/ProjectCard.tsx
import React from "react";
import type { Project } from "../data/projects";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="h-full w-full flex flex-col max-w-sm rounded overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl bg-white">
        <div className="overflow-hidden">
          <img
            className="w-full h-60 object-cover transition-transform duration-300 hover:scale-110"
            src={project.imageUrl}
            alt={project.name}
          />
        </div>
        <div className="flex-1 px-6 py-4">
          <div className="font-bold text-xl mb-2">{project.name}</div>
          <p className="text-gray-700 text-base">{project.description}</p>
        </div>
        <div className="px-6 py-4">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold hover:bg-yellow-300 text-gray-800 mr-2 transition-colors duration-300"
            >
              #{tag}
            </span>
          ))}
        </div>

        {(project.githubUrl || project.liveDemoUrl) && (
          <div className="mx-6 my-4 flex gap-3">
            {project.githubUrl && (
              <span className="flex items-center gap-2 bg-white border-2 border-black rounded-md px-4 py-2 text-sm font-medium">
                GitHub
              </span>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-rose-600 text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-rose-500 transition-colors duration-200"
                onClick={(e) => e.stopPropagation()} // stops Live Demo click from triggering the GitHub link
              >
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </a>
  );
};

export default ProjectCard;
