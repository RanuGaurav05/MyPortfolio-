import React from "react";
import Reveal from "./Reveal";

const AboutMe = () => {
  return (
    <section className="max-w-[1000px] mx-auto py-10 px-1" id="about">
      <Reveal>
        <div className="grid md:grid-cols-1 place-items-center">

          <div>
            <div className="text-gray-300 my-3 text-center md:text-left">
              <h3 className="text-4xl font-semibold mb-5">
                About <span className="text-purple-400">Me</span>
              </h3>

              <p className="text-justify leading-7 max-w-[800px]">
                I am a dedicated B.Tech Computer Science student proficient in
                full-stack MERN (HTML, CSS, Tailwind, JavaScript), Python DSA,
                and Java, with proven alumni networking prototypes. Targeting
                software engineering internships to deliver scalable solutions
                and tackle complex challenges.
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start mt-10 gap-6">
              <div className="bg-gray-800/40 p-4 rounded-xl backdrop-blur-sm">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  7<span className="text-purple-400">+</span>
                </h3>
                <p className="text-sm text-gray-400">Projects</p>
              </div>

              <div className="bg-gray-800/40 p-4 rounded-xl backdrop-blur-sm">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  1<span className="text-purple-400"></span>
                </h3>
                <p className="text-sm text-gray-400">
                  Internship 
                </p>
              </div>

              <div className="bg-gray-800/40 p-4 rounded-xl backdrop-blur-sm">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  <span className="text-purple-400">*</span>
                </h3>
                <p className="text-sm text-gray-400">MERN Stack Developer</p>
              </div>
            </div>
          </div>

        </div>
      </Reveal>
    </section>
  );
};

export default AboutMe;
