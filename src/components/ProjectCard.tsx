// components/ProjectCard.tsx
import React from "react";
import type { Project } from "../data/projects";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
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
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold hover:bg-sky-200 text-gray-700 mr-2 transition-colors duration-300"
          >
            #{tag}
          </span>
        ))}
      </div>
      {/*Links (To Github/ Live-Demo) */}
      {/* Links (To Github / Live Demo) */}
      {(project.githubUrl || project.liveDemoUrl) && (
        <div className="mx-6 my-4 flex gap-3">
          {/* GitHub Button */}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white border-2 border-black rounded-md px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-black"
              >
                <path
                  fillRule="evenodd"
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.582
              0-.287-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729
              1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.304.762-1.604-2.665-.3-5.466-1.332-5.466-5.93
              0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.404c1.02.005 2.045.138
              3 .404 2.29-1.552 3.295-1.23 3.295-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222
              0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.103.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.216.7.825.58C20.565
              21.796 24 17.297 24 12c0-6.63-5.373-12-12-12z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">GitHub</span>
            </a>
          )}

          {/* Live Demo Button */}
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-sky-600 text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-sky-500 hover:text-white transition-colors duration-200"
            >
              Live Demo
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
