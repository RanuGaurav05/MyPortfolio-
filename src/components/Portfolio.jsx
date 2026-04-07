import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";

import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";

const projects = [
  {
    img: project1,
    title: "Project #1",
    description: "SIH Alumni Hub | Smart India Hackathon (SIH25017)",
    links: {
      site: "https://alumnihub071.netlify.app/",
      github: "https://github.com/RanuGaurav05/-user-alumni-hub",
    },
  },
  {
    img: project2,
    title: "Project #2",
    description: "UI frontend development for Library Management System.",
    links: {
      site: "https://library-ui.netlify.app",
      github: "https://github.com/RanuGaurav05/Library-managment-system-project",
    },
  },
  {
    img: project4,
    title: "Project #3",
    description: "'HOODIE' An e-commerce platform using HTML, Tailwind CSS, and JavaScript.",
    links: {
      site: "https://hooddie.netlify.app/",
      github: "https://github.com/RanuGaurav05/Hoodie",
    },
  },
  {
    img: project5,
    title: "Project #4",
    description: "Advanced, fully-featured scientific calculator.",
    links: {
      site: "https://ranucalci.netlify.app/",
      github: "https://github.com/RanuGaurav05/ScientificCalci",
    },
  },
];


const Portfolio = () => {
  return (
    <section className="max-w-[1000px] mx-auto py-24 px-6" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 mb-12 text-center">
        Projects
      </h2>

      {projects.map((project, index) => (
        <Reveal key={index}>
          <div
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-16`}
          >
            <div className="w-full md:w-1/2 p-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover rounded-xl shadow-xl"
              />
            </div>

            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-6">
                {project.description}
              </p>

              <div className="flex gap-4">
                <a
                href={project.links.site}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-slate-700 text-gray-200 rounded-lg
                          hover:bg-slate-800 transition"
              >
                View Site
              </a>

              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-slate-700 text-gray-200 rounded-lg
                          hover:bg-slate-800 transition flex items-center"
              >
                <AiOutlineGithub className="text-xl" />
             </a>

              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
};

export default Portfolio;
