"use client";

import React from "react";
import ProjectCard from "./ProjectCard";


const projectsData = [
  {
    id: 1,
    title: "Employee Management System",
    description: "Employee Management System Using Lravel",
    image: "/Laravel.png",
    gitUrl: "https://github.com/ykyadmas/employee-management-system.git",
  },
  {
    id: 2,
    title: "E Commerce Website",
    description: "Ethuiolaptops E commerce Website",
    image: "/E-commerce.png",
    gitUrl: "https://ethiolaptops.netlify.app/",
  },
  {
    id: 3,
    title: "Youtube Clone",
    description: "Youtube clone using html,css",
    image: "/youtube-clone.png",
    gitUrl: "https://github.com/ykyadmas/youtube-clone",
  },
  {
    id: 4,
    title: "Product Managemnet System",
    description: "Product Managemnet System using Nextjs And MongoDb",
    image: "/Product.js.png",
    gitUrl: "https://github.com/ykyadmas/Product-management-system.git",
  
  },
  {
    id: 5,
    title: "Personal Portifolio",
    description: "Personal Portifolio",
    image: "/personal.png",
    gitUrl: "https://yekoye-portifolio.vercel.app/",
  
  },
 
];

const Projects = () => {
 
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-20 md:mb-12 border-b border-pink-700 pb-10">
        My Projects
      </h2>
     
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
         
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
            />
    
        ))}
      </ul>
    </section>
  );
};

export default Projects;
