"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

import typescriptPng from "../../../public/typescript.png";
import golangPng from "../../../public/golang.png";
import javascriptPng from "../../../public/javascript.png";
import reactPng from "../../../public/react.png";
import sqlPng from "../../../public/sql.png";
import nodePng from "../../../public/node.png";
import mongodbPng from "../../../public/mongodb.png";
import githubPng from "../../../public/github.png";
import redisPng from "../../../public/redis.png";
import expressPng from "../../../public/express.png";
import codingPlatformImg from "../../../public/codingplatform.jpeg";
import petAppImg from "../../../public/petapp.jpeg";
import pollAppImg from "../../../public/pollapp.png";
import urlShortnerImg from "../../../public/shortio.png";

// Define the types for techs and projects
type Tech =
  | "typescript"
  | "react"
  | "golang"
  | "mongodb"
  | "node"
  | "redis"
  | "express"
  | "sql";

interface Project {
  title: string;
  imgSrc: StaticImageData;
  githubLink: string;
  techs: Tech[];
  description: string;
}

// Define techs object
const techs: Record<Tech, StaticImageData> = {
  typescript: typescriptPng,
  react: reactPng,
  golang: golangPng,
  mongodb: mongodbPng,
  node: nodePng,
  redis: redisPng,
  express: expressPng,
  sql: sqlPng,
};

const projects: Project[] = [
  {
    title: "Adaptive Coding Platform",
    imgSrc: codingPlatformImg,
    githubLink: "https://github.com/karthiknayak6/adaptive-coding-app",
    techs: ["typescript", "react", "golang", "mongodb"],
    description: `Adaptive Coding Platform is an ML-based web application that helps
      developers improve their coding skills through algorithmic
      challenges. Built with ReactJS and Golang, the platform features a
      code editor, real-time feedback, and progress tracking. It uses
      Docker containers for secure and isolated code execution. The
      platform leverages K-means clustering to suggest problems tailored
      to a user's learning speed, providing a personalized and effective
      learning experience for developers at all skill levels.`,
  },
  {
    title: "Real-time Polling Application",
    imgSrc: pollAppImg,
    githubLink: "https://github.com/karthiknayak6/pollapp",
    techs: ["typescript", "react", "node", "mongodb"],
    description: `The Real-time Polling Application was developed using ReactJS,
      NodeJS, TypeScript, and MongoDB. This project allows users to create
      and share polls, enabling real-time voting with immediate results
      updates. The use of WebSockets ensures that the voting process is
      interactive, with results being displayed instantly as users cast
      their votes.`,
  },
  {
    title: "Pet Adoption Application",
    imgSrc: petAppImg,
    githubLink: "https://github.com/karthiknayak6/pawmigo-pet-adoption-app",
    techs: ["typescript", "node", "express", "sql"],
    description: `The Pet Adoption Web Application was built with a stack including
      TailwindCSS, Node.js, Express.js, TypeScript, EJS, and MySQL. This
      application streamlines the adoption process by offering a
      user-friendly interface for both users and organizations. It
      features an exclusive admin dashboard for managing adoption
      requests, and detailed pet profiles, including images and care
      requirements, to help users make informed decisions. The platform
      also tracks adoption history, ensuring a smooth experience for all
      parties involved.`,
  },
  {
    title: "URL Shortener Application",
    imgSrc: urlShortnerImg,
    githubLink: "https://github.com/karthiknayak6/url_shortner",
    techs: ["golang", "redis"],
    description: `The URL Shortener Application was developed using Golang and Redis,
      focusing on efficiency and security. This application allows users
      to shorten URLs and monitor their usage. With rate limiting implemented, the platform ensures
      optimized performance while safeguarding against abuse.`,
  },
];

interface TechIconProps {
  tech: Tech;
}

const TechIcon: React.FC<TechIconProps> = ({ tech }) => (
  <div className="flex text-center items-center pl-1 mb-0 sm:mb-0">
    <Image className="w-4 h-4 md:w-6 md:h-6" src={techs[tech]} alt={tech} />
    <div className="ml-1 capitalize text-sm md:text-base">{tech}</div>
  </div>
);

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false); // State to track description expansion

  return (
    <div className="md:mx-5 flex flex-col lg:max-h-72 lg:flex-row justify-between bg-red-200 border-t-2 border-black rounded-md shadow-[4px_4px_0px_#000] overflow-hidden">
      <div className="w-full sm:w-full h-64 sm:h-full bg-red-400 sm:rounded-l-md border-black shadow-[0px_0px_0px_#000]">
        <Image
          src={project.imgSrc}
          alt={project.title}
          className="w-full h-full object-cover sm:rounded-l-md"
        />
      </div>
      <div className="w-full p-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <h1 className=" text-xl font-medium font-sans mb-2 sm:mb-0">
            {project.title}
          </h1>
          <a
            href={project.githubLink}
            className="flex items-center cursor-pointer"
          >
            <Image
              src={githubPng}
              alt="GitHub"
              className="w-5 h-5 md:w-6 md:h-6"
            />
            <div className="ml-1 text-sm md:text-base">GitHub</div>
          </a>
        </div>
        <div className="flex flex-wrap mx-2 mb-4">
          {project.techs.map((tech) => (
            <div key={tech} className="px-2 mb-2">
              <TechIcon tech={tech} />
            </div>
          ))}
        </div>
        <p
          className={`text-sm lg:text-md ${
            isExpanded ? "" : "line-clamp-3"
          } md:line-clamp-none`}
        >
          {project.description}
        </p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`text-blue-500 mt-2 text-xs ${
            isExpanded ? "sm:block" : "block"
          } md:hidden`}
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

const Projects: React.FC = () => (
  <div
    id="projects"
    className="bg-orange-100 rounded-md py-5 px-5 mt-5 pb-10 space-y-6"
  >
    <div className="text-xl md:text-2xl font-bold ml-4 mb-4">PROJECTS</div>
    {projects.map((project) => (
      <ProjectCard key={project.title} project={project} />
    ))}
  </div>
);

export default Projects;
