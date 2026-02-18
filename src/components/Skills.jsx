import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
  DiPython,
  DiJava,
} from "react-icons/di";
import { SiTailwindcss, SiExpress, SiPycharm, SiIntellijidea, SiPostman } from "react-icons/si";
import Reveal from "./Reveal";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML", icon: <DiHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <DiCss3 className="text-blue-600" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
      { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-500" /> },
      { name: "React", icon: <DiReact className="text-blue-500" /> },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node Js", icon: <DiNodejsSmall className="text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-gray-300" /> },
      { name: "MongoDB", icon: <DiMongodb className="text-green-600" /> },


    ],
  },
  {
    category: "Languages",
    technologies: [
     {name: "Python", icon: <DiPython className="text-green-500" />},
     {name: "Java", icon: <DiJava className="text-green-500" />},
     {name:"JavaScript", icon: <DiJavascript1 className="text-yellow-500" />},

    ],
  },

  {
    category: "Tools / IDEs",
    technologies: [
      { name: "GitHub", icon: <DiGithubBadge className="text-gray-400" /> },
      // { name: "VS Code", icon: <SiVisualstudio className="text-blue-500" /> },
      { name: "PyCharm", icon: <SiPycharm className="text-green-400" /> },
      { name: "IntelliJ IDEA", icon: <SiIntellijidea className="text-red-400" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section className="max-w-[1170px] mx-auto py-12 px-4" id="skills">
      <Reveal>
        <h2 className="text-3xl font-bold mb-5 text-center text-gray-200">
          Skills
        </h2>

        <p className="text-center mb-15 text-gray-400">
          I worked on various frontend and fullstack projects. Check them{" "}
          <a href="#" className="underline text-purple-400">
            there
          </a>
          .
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-purple-900 p-6 rounded-lg
                         bg-purple-900/20 backdrop-blur-sm
                         shadow-lg w-full md:w-[260px] md:mr-auto transition-all duration-300
                          
                        hover:bg-gradient-to-br
                        hover:from-purple-600/20
                        hover:to-blue-600/30
                        hover:shadow-[0_25px_60px_-15px_rgba(128,0,255,0.8)]"
            >
              <h3 className="text-xl font-bold mb-4 text-center text-gray-200">
                {skill.category}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {skill.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-3 text-gray-300"
                  >
                    <span className="text-2xl">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default Skills;
